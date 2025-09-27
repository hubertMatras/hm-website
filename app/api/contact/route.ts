import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing fields" },
      { status: 400 }
    );
  }

  // Example: send with Resend if configured
  try {
    if (
      process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.CONTACT_FROM_EMAIL
    ) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL,
          to: process.env.CONTACT_TO_EMAIL,
          subject: `Portfolio contact from ${name}`,
          html: `<p><b>From:</b> ${name} (${email})</p><p>${message}</p>`,
        }),
      });
      if (!res.ok) throw new Error("Email send failed");
    } else {
      console.warn("Resend not configured. Log message only.");
      console.log({ name, email, message });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Failed to send" },
      { status: 500 }
    );
  }
}
