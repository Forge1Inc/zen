export type LeadPayload = Record<string, string>;

/*
 * Single seam for lead submission. Both the home page quote form and the
 * /estimate intake form go through here.
 *
 * Submissions POST to the static form registered in public/__forms.html and
 * are captured by Netlify Forms in production. They show up under
 * Netlify > Forms, where email notifications can be pointed at the business
 * inbox. In local dev there is no form backend, so this returns false and the
 * UI shows direct contact options instead.
 */
export async function submitLead(
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
