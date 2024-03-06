import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
    try {
        const { userName, email, number, tourname, transport, adults, children, startDate, endDate } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.nodemailer_Email,
                pass: process.env.nodemailer_Pass,
            }
        });
        const info = await transporter.sendMail({
            from: process.env.nodemailer_Email,
            to: 'raghulkrishna50@gmail.com',
            subject: 'test of nodemailer',
            text: `Name: ${userName}\nEmail: ${email}\nNumber: ${number}\nTourName: ${tourname}\nTransport: ${transport}\nNo.of Adults: ${adults}\nNo.of Children: ${children}\nStart-Date: ${startDate}\nEnd-Date: ${endDate}`
        });
        return NextResponse.json({ message: "Email Sent" }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'error while submitting Email' }, { status: 500 })
    }
}