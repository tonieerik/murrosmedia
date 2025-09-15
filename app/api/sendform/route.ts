import { Resend } from "resend";

function htmlEntities(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const POST = async (req: Request) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response("Server not configured (RESEND_API_KEY missing)", {
        status: 500,
      });
    }
    const resend = new Resend(apiKey);

    const payload = await req.json();

    if (!payload?.email) {
      return new Response("Email is required", { status: 422 });
    }
    if (!payload?.message) {
      return new Response("Message is required", { status: 422 });
    }

    const text = `Nimi: ${htmlEntities(
      payload?.name
    )}, Sähköposti: ${htmlEntities(payload?.email)}, Puhelin: ${htmlEntities(
      payload?.phone
    )}, Viesti: ${htmlEntities(payload?.message)}`;

    const html = `<strong>Nimi:</strong> ${htmlEntities(
      payload?.name
    )}<br /><strong>Sähköposti:</strong> ${htmlEntities(
      payload?.email
    )}<br /><strong>Puhelin:</strong> ${htmlEntities(
      payload?.phone
    )}<br /><strong>Viesti:</strong><br />${htmlEntities(payload?.message)}`;

    const { error } = await resend.emails.send({
      to: "nelli@murrosmedia.fi",
      from: "Murrosmedia <nelli@murrosmedia.fi>",
      replyTo: htmlEntities(payload?.email),
      subject: "Murrosmedia: viesti verkkosivuilta",
      text,
      html,
    });

    if (error) {
      return new Response(JSON.stringify({ message: "Send failed" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ message: "Send failed" }), {
      status: 500,
    });
  }
};
