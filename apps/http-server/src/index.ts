import express from "express"
import { router } from "./routes/user.routes";
import { connectToDb } from "@repo/database/db-config"

const app=express();
app.use(express.json());

const port=4000;

connectToDb();

app.use(router);

app.listen(port,()=>{
    console.log("HTTP SERVER LIVE:",port);
})