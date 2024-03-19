import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
    try {
        const { Name, Email, PhoneNumber, TourName, Transport, Adults, Children, StartDate, EndDate, SplMessage } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASS,
            }
        });
        const info = await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: 'raghulkrishna50@gmail.com',
            subject: 'test of nodemailer',
            text: `Name: ${Name}\nEmail: ${Email}\nNumber: ${PhoneNumber}\nTourName: ${TourName}\nTransport: ${Transport}\nNo.of Adults: ${Adults}\nNo.of Children: ${Children}\nStart-Date: ${StartDate}\nEnd-Date: ${EndDate}\nMessage: ${SplMessage}`
        });
        return NextResponse.json({ message: "Email Sent" }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'error while submitting Email' }, { status: 500 })
    }
}