import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; color: white;">
          <h1 style="margin: 0; font-size: 24px;">New Message from Portfolio</h1>
        </div>
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #666; margin-top: 0;"><strong>${name}</strong> reaching out from portfolio</p>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-top: 20px; margin-bottom: 10px;">From:</h3>
            <p style="color: #666; margin: 0;">
              <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
            </p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-top: 20px; margin-bottom: 10px;">Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #667eea;">
              ${message}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999;">
            <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      </div>
    `;

    const plainTextContent = `
New Message from Portfolio

From: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from your portfolio contact form.
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "shakilahmmed8882@gmail.com",
      subject: `${name} reaching out from portfolio`,
      text: plainTextContent,
      html: htmlContent,
      replyTo: email,
    });

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
