import connectToDB from "@utils/database";
import { NextResponse } from "next/server";
import User from "@models/user";

export const GET = async (req,res) => {

    await connectToDB();
    return new Response(JSON.stringify({
        message : "Hello world"
    }), { statusCode : 500 })

}

export const POST = async (req, res) => {
    try {
        await connectToDB();

        const data = await req.json();
        const user = await User.create(data);
        return new Response(JSON.stringify(user), { statusCode : 200 });

    } catch (error) {
        return new Response(JSON.stringify(error), { statusCode : 500 })
    }
}