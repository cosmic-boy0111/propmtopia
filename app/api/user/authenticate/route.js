import connectToDB from "@utils/database";
import User from "@models/user";
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';

export const GET = async (req, res) => {

    try {

        await connectToDB();
        const cookieStore = cookies();
        const token = cookieStore.get('jwToken')?.value;

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token });

        if(!rootUser){
            throw new Error('user not found');
        }

        return new Response(JSON.stringify(rootUser), { status: 200 })
        
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}
