export type LeadPayload = Record<string, string>;

/*
 * Single seam for lead submission. Both the home page quote form and the
 * /estimate intake form go through here.
 *
 * Every lead is sent to two places in parallel:
 *
 * 1. Supabase: the aaa_zen.leads table (project ogjyxaawfmqzlrnuxnaa), through
 *    the public.submit_aaa_zen_lead RPC. The table lives in its own schema,
 *    is locked behind RLS with no policies, and the security definer function
 *    is the only write path.
 * 2. Netlify Forms: the static form registered in public/__forms.html, which
 *    powers dashboard visibility and email notifications on the Netlify side.
 *
 * The submission counts as successful if either channel accepts it, so a lead
 * is never lost to a single provider hiccup.
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function sendToSupabase(data: LeadPayload): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_KEY) return false;
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
    };
    if (SUPABASE_KEY.startsWith("eyJ")) {
      headers.Authorization = `Bearer ${SUPABASE_KEY}`;
    }
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_aaa_zen_lead`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        p_name: data.name ?? "",
        p_phone: data.phone ?? "",
        p_email: data.email ?? "",
        p_address: data.address ?? "",
        p_service: data.service ?? "",
        p_page: data.page ?? null,
        p_property_type: data["property-type"] ?? null,
        p_budget: data.budget ?? null,
        p_timeline: data.timeline ?? null,
        p_details: data.details ?? null,
        p_contact_preference: data["contact-preference"] ?? null,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function sendToNetlifyForms(
  formName: string,
  data: LeadPayload
): Promise<boolean> {
  const body = new URLSearchParams({ "form-name": formName, ...data });
  try {
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function submitLead(
  formName: string,
  data: LeadPayload
): Promise<boolean> {
  // Honeypot tripped: drop silently so bots see a normal success.
  if (data["bot-field"]) return true;

  const [supabaseOk, netlifyOk] = await Promise.all([
    sendToSupabase(data),
    sendToNetlifyForms(formName, data),
  ]);
  return supabaseOk || netlifyOk;
}
