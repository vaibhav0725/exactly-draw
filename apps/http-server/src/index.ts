import express from "express"

const app=express();
app.use(express.json());

const port=4000;

app.listen(port,()=>{
    console.log("HTTP SERVER LIVE:",port);
})