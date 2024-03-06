import db from "@/components/db/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        const result = await db.query("SELECT * FROM vijiforms");
        const data = result.rows;
        // console.log(data);
        return NextResponse.json({ message: "pg data is fetched", data }, { status: 200 });
    } catch (error) {
        console.error('Error occured bro:', error);
        return NextResponse.json({ message: "GET method Error in PostgreSQL", error }, { status: 500 });
    }
}

export const POST = async (req: Request, res: Response) => {
    try {
        const { userName, email, number, tourname, transport, adults, children, startDate, endDate } = await req.json();
        await db.query("INSERT INTO vijiforms(userName, email, phoneNumber, tourname, transport, adults, children, startDate, endDate) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)", [userName, email, number, tourname, transport, adults, children, startDate, endDate]);
        return NextResponse.json({ message: "Success in inserting data in PostgreSQL" }, { status: 200 });
    } catch (error) {
        console.error('Error postgresql:', error);
        return NextResponse.json({ message: "Post Req error in PostgreSQL", error }, { status: 500 });
    }
};