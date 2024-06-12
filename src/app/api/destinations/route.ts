import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const res = await sql`SELECT * FROM tours`
        const data = res.rows
        return NextResponse.json({ message: "Fetched tours data successfully", data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "error in fetching tours data" }, { status: 500 })
    }
}

export const POST = async (req: Request) => {
    try {
        const { title, img, location, description } = await req.json()
        const res = await sql`INSERT INTO tours (title, img, location, description) VALUES (${title}, ${img}, ${location}, ${description})`
        return NextResponse.json({ message: "Inserted tours data into db" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "error in Inserting tours data into db" }, { status: 500 })
    }
}

export const DELETE = async (req: Request) => {
    try {
        const { id } = await req.json();
        const res = await sql`DELETE FROM tours WHERE id = ${id}`
        return NextResponse.json({ message: "successfully deleted the tour" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "error deleting the tour" }, { status: 500 })
    }
}