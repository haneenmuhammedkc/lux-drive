import mongoose from "mongoose"

const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected Successfully")
    }
    catch(error){
        console.error("MongoDB Connection Failed Due to: ", error.message)
        process.exit(1)
    }
}

export default connectDB