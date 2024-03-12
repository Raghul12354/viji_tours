import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres"
import { hash } from 'bcrypt';

// export const GET = async (req: Request, res: Response) => {
//     try {
//         const response = await sql``
//     } catch (error) {

//     }
// }


// Register
export const POST = async (req: Request) => {
    try {
        const { Email, Password } = await req.json();
        // Hashing the password
        // const hashPassword = await hash(Password, 10);
        // Inserting the values into db
        const response = await sql`INSERT INTO Login (Email, Password) 
        VALUES (${Email},${Password})`
        return NextResponse.json({ message: "Inserted login credentials successfully" }, { status: 200 });
    } catch (error) {
        console.log({ error });
        return NextResponse.json({ message: "Error while Inserting login credentials" }, { status: 500 })
    }
}

// export const Delete = async (req: Request, res: Response) => {
//     try {
//         const { Id } = await req.json();

//     } catch (error) {

//     }
// }