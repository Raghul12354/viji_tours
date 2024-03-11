// import db from "@/components/db/db";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        const result = await sql.query("SELECT * FROM users");
        const data = result.rows;
        console.log(data);
        return NextResponse.json({ message: "vercel pg data is fetched", data }, { status: 200 });
    } catch (error) {
        console.error('Error fetching vercel pg data:', error);
        return NextResponse.json({ message: "GET method Error in PostgreSQL", error }, { status: 500 });
    }
}

export const POST = async (req: Request) => {
    try {
        const { Name, Email, PhoneNumber, TourName, Transport, Adults, Children, StartDate, EndDate, SplMessage } = await req.json();
        const response = await sql`INSERT INTO users (Name, Email, PhoneNumber, TourName, Transport, Adults, Children, StartDate, EndDate, SplMessage)
        VALUES (${Name}, ${Email}, ${PhoneNumber}, ${TourName}, ${Transport}, ${Adults}, ${Children}, ${StartDate}, ${EndDate}, ${SplMessage})
        `
        return NextResponse.json({ message: "Success in inserting data in PostgreSQL" }, { status: 200 });
    } catch (error) {
        console.log(error, "error in vercel post req");
        return NextResponse.json({ message: "Post Req error in PostgreSQL", error }, { status: 500 });
    }
}

// export const POST = async (req: Request, res: Response) => {
//     try {
//         const { userName, email, number, tourname, transport, adults, children, startDate, endDate, splMessage } = await req.json();
//         await db.query("INSERT INTO vijiforms(userName, email, phoneNumber, tourname, transport, adults, children, startDate, endDate, splMessage) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [userName, email, number, tourname, transport, adults, children, startDate, endDate, splMessage]);
//         return NextResponse.json({ message: "Success in inserting data in PostgreSQL" }, { status: 200 });
//     } catch (error) {
//         console.error('Error postgresql:', error);
//         return NextResponse.json({ message: "Post Req error in PostgreSQL", error }, { status: 500 });
//     }
// };