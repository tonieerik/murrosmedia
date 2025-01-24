import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

function htmlEntities(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const POST = async (req: Request) => {
  try {
    const payload = await req.json();

    if (!payload?.email) {
      return new Response("Email is required", {
        status: 422,
      });
    }

    if (!payload.message) {
      return new Response("Message is required", {
        status: 422,
      });
    }

    const msg = {
      to: "nelli@murrosmedia.fi",
      from: "Murrosmedia <nelli@murrosmedia.fi>", // Verified sender
      reply_to: htmlEntities(payload?.email),
      subject: "Murrosmedia: viesti verkkosivuilta",
      text: `Nimi: ${htmlEntities(payload?.name)}, Sähköposti: ${htmlEntities(
        payload?.email
      )}, Puhelin: ${htmlEntities(payload?.phone)}, Viesti: ${htmlEntities(
        payload?.message
      )}`,
      html: `<strong>Nimi:</strong> ${htmlEntities(
        payload?.name
      )}<br /><strong>Sähköposti:</strong> ${htmlEntities(
        payload?.email
      )}<br /><strong>Puhelin:</strong> ${htmlEntities(
        payload?.phone
      )}<br /><strong>Viesti:</strong><br />${htmlEntities(payload?.message)}`,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Send failed" }), {
      status: 500,
    });
  }
};
