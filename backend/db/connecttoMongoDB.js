import mongoose from "mongoose";

const connecttoMongoDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongodb")
    }
    catch(error){
        console.log("error connecting to MongoDB",error.message)
    }
}

export default connecttoMongoDB;