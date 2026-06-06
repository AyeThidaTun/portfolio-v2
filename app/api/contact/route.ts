import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const { name, email, company, message } = await req.json();

	try {
		await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "ayethidatun.anna@gmail.com",
			subject: `New message from ${name}${company ? ` at ${company}` : ""}`,
			html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json(
			{ error: `Failed to send email: ${error}` },
			{ status: 500 },
		);
	}
}
