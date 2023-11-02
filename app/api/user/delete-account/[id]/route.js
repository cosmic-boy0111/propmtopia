import connectToDB from "@utils/database";
import User from "@models/user";
import { cookies } from 'next/headers';

export const DELETE = async (req, {params}) => {
    try {
        await connectToDB();

        await User.findByIdAndRemove(params.id);
        const cookieStore = cookies();
        cookieStore.delete('jwToken')

        return new Response(JSON.stringify({
            message : 'user deleted successfully',
        }), { status : 200 })

    } catch (error) {
        return new Response(JSON.stringify({
            message : error
        }), { status : 500 })
    }
}