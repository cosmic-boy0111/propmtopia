import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
        name : {
            type: String,
            required: [true,'Username is required!'],
        },
        email : {
            type: String,
            unique: [true,'Email already exists!'],
            required: [true,'Email is required!'],
        },
        password : {
            type : String,
            required : [true,'Password is required!'],
        },
        tokens : [
            {
                token : {
                    type : String,
                    required : true
                }
            }
        ],
    },
    {
        timestamps : true
    }
)



const User = models.User || model("User", userSchema);

export default User;
