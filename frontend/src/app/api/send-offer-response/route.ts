import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const nodemailer = (await import("nodemailer")).default;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    const body = await request.json();
    const {
      wantsRedesign,
      wantsAboutPage,
      wantsChatbot,
      clientsAsk,
      siteMissing,
      whatMakesDifferent,
    } = body;

    const mailOptions = {
      from: `"Nader Offer Response" <${process.env.EMAIL_USER}>`,
      to: "thomaslmusial@gmail.com",
      subject: "Nader's Offer Response",
      text: `
Nader's Offer Page Response
============================

DECISIONS
---------
Website Redesign: ${wantsRedesign ? "Yes" : "No"}
New About Page:   ${wantsAboutPage ? "Yes" : "No"}
AI Chatbot:       ${wantsChatbot ? "Yes" : "No"}

FEEDBACK
--------
1. What clients usually ask:
${clientsAsk || "No answer"}

2. What the site is missing:
${siteMissing || "No answer"}

3. What makes him different:
${whatMakesDifferent || "No answer"}
      `,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #ffffff; padding: 32px; border-radius: 16px;">
          <h1 style="color: #06b6d4; font-size: 24px; margin-bottom: 24px;">Nader&rsquo;s Offer Response</h1>

          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h2 style="color: #06b6d4; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;">Decisions</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #d1d5db;">Website Redesign</td>
                <td style="padding: 8px 0; text-align: right; font-weight: bold; color: ${wantsRedesign ? "#22d3ee" : "#ef4444"};">${wantsRedesign ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #d1d5db;">New About Page</td>
                <td style="padding: 8px 0; text-align: right; font-weight: bold; color: ${wantsAboutPage ? "#22d3ee" : "#ef4444"};">${wantsAboutPage ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #d1d5db;">AI Chatbot</td>
                <td style="padding: 8px 0; text-align: right; font-weight: bold; color: ${wantsChatbot ? "#22d3ee" : "#ef4444"};">${wantsChatbot ? "Yes" : "No"}</td>
              </tr>
            </table>
          </div>

          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px;">
            <h2 style="color: #06b6d4; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;">Feedback</h2>

            <div style="margin-bottom: 20px;">
              <p style="color: #9ca3af; font-size: 13px; margin-bottom: 4px;">What clients usually ask:</p>
              <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">${clientsAsk || "<em style='color: #6b7280;'>No answer</em>"}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="color: #9ca3af; font-size: 13px; margin-bottom: 4px;">What the site is missing:</p>
              <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">${siteMissing || "<em style='color: #6b7280;'>No answer</em>"}</p>
            </div>

            <div>
              <p style="color: #9ca3af; font-size: 13px; margin-bottom: 4px;">What makes him different:</p>
              <p style="color: #e5e7eb; font-size: 15px; line-height: 1.6;">${whatMakesDifferent || "<em style='color: #6b7280;'>No answer</em>"}</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Response sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        message: "Failed to send response",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
