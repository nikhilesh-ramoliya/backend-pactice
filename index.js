import Express from "express";
import cors from "cors"
import bodyParser from "body-parser";

const app = Express();

app.use(Express.json());

app.get("/", (req,res)=>{
    res.send("hello world")
})
const port = 3000||process.env.PORT

app.listen(port, ()=>{
    console.log("server is running at port : " + port );
})