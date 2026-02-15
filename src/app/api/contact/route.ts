import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, captchaToken } = body;

        // Verify reCAPTCHA
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        if (!secretKey) {
            return NextResponse.json(
                { error: 'Server misconfiguration: Missing reCAPTCHA secret key' },
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

        // Here you would typically send an email or save to a database.
        // For now, we'll just return success.

        console.log('Form submitted:', { name, email, phone, message });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
