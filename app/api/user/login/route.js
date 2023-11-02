import connectToDB from "@utils/database";
import User from "@models/user";
import { serialize } from "cookie";

export const GET = async (req,res) => {

    await connectToDB();
    return new Response(JSON.stringify({
        message : "Hello world"
    }), { status : 500 })

}

export const POST = async (req, res) => {
    try {
        await connectToDB();

        const data = await req.json();
        const user = await User.create(data);
        await user.encryptPassword();
        const token = await user.generateAuthToken()

        const serialized = serialize('jwToken', token, {
            httpOnly : true,
            path : '/',
            maxAge : 60 * 60 * 24 * 30
        });

        return new Response(JSON.stringify({
            message : 'user login successfully'
        }), { 
            status : 200,
            headers : {'Set-Cookie': serialized}
        });

    } catch (error) {
        return new Response(JSON.stringify(error), { status : 500 })
    }
}