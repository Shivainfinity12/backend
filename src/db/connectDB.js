import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MongoDB connected at host: ${conn.connection.host}`)
    } catch (error) {
        console.log("MONGO DB connection error", error)
        process.exit(1)
    }
}