import { NextResponse } from "next/server";
import { getById } from "@/components/destinations/data";

export const GET = async (req: Request) => {
    const id = req.url.split("destinations/")[1];
    // console.log(id);

    const singleTour = getById(id);
    // console.log('test', singleTour);

    if (!singleTour) {
        return NextResponse.json({ message: 'Error' }, { status: 404 })
    }
    return NextResponse.json({ message: 'success', singleTour }, { status: 200 })
}