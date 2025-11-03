import express from "express";
import  {add,divide} from './utill/index.js';
import  file from './files/syncFile/f1.js'
import file1 from './files/asyncFiles/f1.js'
import morgan from 'morgan'
import dotenv from 'dotenv';
dotenv.config();
const app = express();

if (process.env.ENVIRONMENT === 'dev') {
    app.use(morgan('dev'));
  }

// file()
await file1()
console.log(add(3,4))

console.log(divide(4,2));
// listen app

app.get('/file', async(req,res) => {
    const data = await file1();
    console.log(data);
    res.status(201).json({
        message:"successfully get"
    })
})
// global error handle 
app.use((err,req,res,next) =>{
        console.error("global error handle")
        req.status(500).json({
            success:"failed",
            message: "something went wrong",
            error: err.message
        })
})


const PORT = 3000;

app.listen(PORT, () => console.log(`app is  working on - ${PORT}`))