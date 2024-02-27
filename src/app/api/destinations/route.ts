import { NextResponse } from "next/server";
import { getData } from "@/components/destinations/data";

export const GET = async (req: Request, res: Response) => {
    try {
        const data = getData();
        // console.log('Fetched data:', data); 
        return NextResponse.json({ message: 'success bro', data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'error occurred', error }, { status: 500 })
    }
}

// export const POST = async (req: Request, res: Response) => {
//     const { id, title, description } = await req.json();
//     try {
//         const postdata = {
//             img: "", // Dummy img
//             days: "", // Dummy days
//             nights: "", // Dummy nights
//             location: "", // Dummy location
//             id,
//             title,
//             description
//         };
//         postData(postdata)
//         return NextResponse.json({ message: 'post success bro', postdata }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: 'post error occurred', error }, { status: 500 })
//     }
// }