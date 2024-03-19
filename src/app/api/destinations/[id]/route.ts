import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    const id = req.url.split("destinations/")[1];
    // console.log(id);
    try {
        const result = await sql`SELECT * FROM tours WHERE id = ${id}`;
        const singleTour = result.rows[0];
        return NextResponse.json({ message: "Fetched the Unique id from db", singleTour }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching the Unique id from db" }, { status: 404 })
    }
}