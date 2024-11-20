// netlify/functions/submit-form.ts
import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        if (!event.body) {
            throw new Error('No data provided');
        }

        const { email, phone, preferredDays, preferredTime } = JSON.parse(event.body);

        // Validate required fields
        if (!email || !phone || !preferredDays || !preferredTime) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'All fields are required.' }),
            };
        }

        // Create nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Email template
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.EMAIL_USERNAME,
            subject: 'New Piano Tuning Request',
            text: `New Piano Tuning Request Details:

            Email: ${email}
            Phone: ${phone}
            Preferred Days: ${preferredDays.join(', ')}
            Preferred Time: ${preferredTime}

            Submitted on: ${new Date().toLocaleString()}
                `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Form submitted successfully!'
            }),
        };
    } catch (error) {
        console.error('Error processing form submission:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                error: 'Failed to process form submission.'
            }),
        };
    }
};

export { handler };