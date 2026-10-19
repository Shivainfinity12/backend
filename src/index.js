import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

import express from "express";
import {app} from "./app.js";
import {connectDB} from "./db/connectDB.js";

const port = process.env.PORT || 8000;


connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`server is running at port ${port}`);
    })
})
.catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
})