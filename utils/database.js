import mongoose from "mongoose";
let isConnected = false;

const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })

        isConnected = true;
        console.log('mongodb is connected');
    } catch (error) {

        console.log(error);
        
    }
}

export default connectToDB;