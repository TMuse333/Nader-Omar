import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    //
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    transporter.verify((error) => {
        if (error) {
            console.error('Error verifying transporter:', error);
        } else {
            console.log('Transporter is ready to send emails');
        }
    });

    try {
        const body = await request.json();
        const { name, email, phone, intent, location, timeline, budget, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !intent) {
            console.log(body)
            return NextResponse.json({ message: 'Missing required fields: name, email, phone, or intent' }, { status: 400 });
        }

        // Process intent checkboxes (e.g., intent-Buy: 'true', intent-Sell: 'true')
        const intentChoices = ['Buy', 'Sell', 'Both', 'Just browsing'];
        const selectedIntents = intentChoices
            .filter(choice => intent[`intent-${choice}`] === 'true')
            .join(', ') || 'None selected';

        // Handle optional fields (set to 'Not provided' if empty)
        const locationText = location || 'Not provided';
        const timelineText = timeline || 'Not provided';
        const budgetText = budget || 'Not provided';
        const messageText = message || 'Not provided';

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'chriscrowell@remaxnova.ca',
            //  to: 'thomaslmusial@gmail.com',
            subject: 'New Contact Form Submission - Real Estate Inquiry',
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Intent: ${selectedIntents}
                Preferred Area: ${locationText}
                Timeline: ${timelineText}
                Budget: ${budgetText}
                Message: ${messageText}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Intent:</strong> ${selectedIntents}</p>
                <p><strong>Preferred Area:</strong> ${locationText}</p>
                <p><strong>Timeline:</strong> ${timelineText}</p>
                <p><strong>Budget:</strong> ${budgetText}</p>
                <p><strong>Message:</strong> ${messageText}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        const errorMessage = (error as Error).message || 'An error occurred';
        return NextResponse.json({ message: 'Failed to send email', error: errorMessage }, { status: 500 });
    }
}

export async function OPTIONS() {
    return NextResponse.json({ message: 'CORS preflight check' }, { status: 200 });
}