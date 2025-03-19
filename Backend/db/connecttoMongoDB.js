import mongoose from "mongoose";

const connecttoMongoDB = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Chatzy')
        console.log("connected to mongodb")
    }
    catch(error){
        console.log("error connecting to MongoDB",error.message)
    }
}

export default connecttoMongoDB;