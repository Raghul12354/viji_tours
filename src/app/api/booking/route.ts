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
        const { name, email, number, tourName } = await req.json();
        await db.query("INSERT INTO vijiforms(username, email, phoneNumber, tourName) VALUES($1, $2, $3, $4)", [name, email, number, tourName]);
        return NextResponse.json({ message: "Success in inserting data in PostgreSQL" }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "Error in PostgreSQL", error }, { status: 500 });
    }
};