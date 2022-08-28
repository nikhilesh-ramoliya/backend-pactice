import Express from "express";
import cors from "cors"
import bodyParser from "body-parser";

const app = Express();

app.use(Express.json());

app.get("/", (req,res)=>{
    res.send("hello world")
})
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("server is running at port : " + port );
})