import Express from "express";
import cors from "cors"
import bodyParser from "body-parser";

const app = Express();

app.use(Express.json());

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.listen(3000||process.env.PORT, ()=>{
    console.log("server is running at port 3000");
})