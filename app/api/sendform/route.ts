import sgMail from "@sendgrid/mail";

function htmlEntities(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const POST = async (req: Request) => {
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

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  const msg = {
    to: "nelli@mandariinimedia.fi",
    from: "Mandariinimedia <nelli@mandariinimedia.fi>", // Verified sender
    reply_to: htmlEntities(payload?.email),
    subject: "Mandariinimedia: viesti verkkosivuilta",
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

  (async () => {
    try {
      const foo = await sgMail.send(msg);

      console.log("Email sent:", foo);
      return new Response("OK", { status: 200 });
    } catch (error) {
      console.log(JSON.stringify(error));

      return new Response("Send failed", {
        status: 500,
      });
    }
  })();
};
