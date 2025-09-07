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
      firstName,
      lastName,
      email,
      telephone,
      bestTime,
      country,
      address1,
      address2,
      city,
      province,
      postalCode,
      homeType,
    } = body;

    if (!firstName || !email || !address1 || !city || !province || !postalCode) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"${firstName} ${lastName || ''}" <${email}>`,
      to: 'naderomar@remaxnova.ca',
      subject: "New Home Evaluation Request",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName || "Not provided"}
        Email: ${email}
        Telephone: ${telephone || "Not provided"}
        Best Time to Call: ${bestTime || "Not provided"}
        Country: ${country || "Not provided"}
        Address Line 1: ${address1}
        Address Line 2: ${address2 || "Not provided"}
        City: ${city}
        Province: ${province}
        Postal Code: ${postalCode}
        Type of Home: ${homeType || "Not provided"}
      `,
      html: `
        <h2>New Home Evaluation Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName || "Not provided"}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telephone:</strong> ${telephone || "Not provided"}</p>
        <p><strong>Best Time to Call:</strong> ${bestTime || "Not provided"}</p>
        <p><strong>Country:</strong> ${country || "Not provided"}</p>
        <p><strong>Address Line 1:</strong> ${address1}</p>
        <p><strong>Address Line 2:</strong> ${address2 || "Not provided"}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Province:</strong> ${province}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>Type of Home:</strong> ${homeType || "Not provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}