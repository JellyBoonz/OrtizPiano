import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, preferredDays, preferredTime } = body;

        if (!email || !phone) {
            return NextResponse.json(
                { error: 'Email and phone are required.' },
                { status: 400 }
            );
        }

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'zitropiano@gmail.com', // Your email username
                pass: 'brjh dlhn arhp yfxc', // Your email password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: 'zitropiano@gmail.com',
            subject: 'New Piano Tuning Request',
            text: `You have a new piano tuning request:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Preferred Days: ${preferredDays.join(', ')}
        Preferred Time: ${preferredTime}
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email.' },
            { status: 500 }
        );
    }
}
