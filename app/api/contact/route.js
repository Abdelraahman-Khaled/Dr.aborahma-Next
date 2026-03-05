import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `رسالة جديدة من ${name} - موقع د. محمد بن عبدالرحمن ابورحمه`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e4f3; border-radius: 12px;">
          <h2 style="color: #20296e; margin-bottom: 20px;">رسالة تواصل جديدة</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600; width: 130px;">الاسم:</td>
              <td style="padding: 10px 0; color: #20296e;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600;">البريد الإلكتروني:</td>
              <td style="padding: 10px 0; color: #20296e;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: 600;">رقم الجوال:</td>
              <td style="padding: 10px 0; color: #20296e;">${phone}</td>
            </tr>`
                : ""
            }
            <tr>
              <td colspan="2" style="padding: 16px 0 8px; color: #666; font-weight: 600;">الرسالة:</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 12px 16px; background: #f4f5ff; border-radius: 8px; color: #20296e; line-height: 1.7;">
                ${message.replace(/\n/g, "<br/>")}
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
