import { ResetPasswordTemplate } from "@/components/EmailTemplates/reset-email";
import { string } from "prop-types";
import { stringify } from "querystring";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {
  const { firstName, email, resetUrl } = await request.json();
  //console.log("Template check:", ResetPasswordTemplate);

  try {
    const { data, error } = await resend.emails.send({
      from: "Moleculyst <support@resend.dev>",
      to: [email],
      subject: "Password reset request",
      react: ResetPasswordTemplate({ firstName, resetUrl }),
    });
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
