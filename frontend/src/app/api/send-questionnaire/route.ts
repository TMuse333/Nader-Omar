import { NextResponse } from "next/server";
import JSZip from "jszip";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body: { answers: Record<string, string | string[]>; files: { name: string; content: string }[] } = await req.json();
    const { answers, files } = body;

    // Prepare answers text
    const answerLines = Object.entries(answers)
      .map(([q, a]) => `${q}: ${Array.isArray(a) ? a.join(", ") : a}`)
      .join("\n");

    // Create zip if files exist
    const attachments: { filename: string; content: Buffer }[] = [];
    if (files.length) {
      const zip = new JSZip();
      files.forEach((f) => zip.file(f.name, Buffer.from(f.content, "base64")));
      const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });
      attachments.push({ filename: "attachments.zip", content: zipBuffer });
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Questionnaire" <${process.env.EMAIL_USER}>`,
      to: process.env.MY_EMAIL, // your email
      subject: "New Questionnaire Submission",
      text: answerLines,
      html: `<pre>${answerLines}</pre>`,
      attachments,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (err) {
    console.error("Error sending questionnaire:", err);
    return NextResponse.json({ message: "Failed to send questionnaire" }, { status: 500 });
  }
}