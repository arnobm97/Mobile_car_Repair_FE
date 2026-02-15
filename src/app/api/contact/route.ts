import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, captchaToken } = body;

        // Verify reCAPTCHA
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
        const verificationResponse = await fetch(verificationUrl, { method: 'POST' });
        const verificationData = await verificationResponse.json();

        if (!verificationData.success) {
            return NextResponse.json(
                { error: 'reCAPTCHA verification failed' },
                { status: 400 }
            );
        }

        // Send email using nodemailer
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (!emailUser || !emailPass) {
            console.log('Email credentials not configured. Form data:', { name, email, phone, message });
            return NextResponse.json(
                { message: 'Message received (email not configured)' },
                { status: 200 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        // Email content
        const mailOptions = {
            from: emailUser,
            to: ['Eunosmohammed85@gmail.com', 'marketing.b2cserver@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
            replyTo: email,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
