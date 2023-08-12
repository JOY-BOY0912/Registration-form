import express from "express";
import cookieParser from "cookie-parser";
import RouterDefault from './routes/user.js';
import dotenv from "dotenv";
export const app = express();


dotenv.config({
    path:"./data/config.env",
})

app.use(express.urlencoded());
app.use(cookieParser());
app.use(RouterDefault);


app.set("view engine", "pug"); 

