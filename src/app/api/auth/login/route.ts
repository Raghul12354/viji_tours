import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres"
import { hash } from 'bcrypt';

// export const GET = async (req: Request, res: Response) => {
//     try {
//         const result = sql`SELECT * FROM login`
//         const data = (await result).rows
//         console.log(data);
//         return NextResponse.json({ message: "fetched login details successfully" }, { status: 200 })
//     } catch (error) {
//         console.log({ error });
//         return NextResponse.json({ message: "error fetching login details from db" }, { status: 500 })
//     }
// }

// Register
export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json();
        // Hashing the password
        const hashPassword = await hash(password, 10);
        // Inserting the values into db
        const response = await sql`INSERT INTO Login (email, password) 
        VALUES (${email},${hashPassword})`
        return NextResponse.json({ message: "Inserted login credentials successfully" }, { status: 200 });
    } catch (error) {
        console.log({ error });
        return NextResponse.json({ message: "Error while Inserting login credentials" }, { status: 500 })
    }
}