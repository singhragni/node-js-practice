import express from "express";
import  {add,divide} from './utill/index.js';
const app = express();


console.log(add(3,4))

console.log(divide(4,2));

// listen app


const PORT = 3000;

app.listen(PORT, () => console.log(`app is  working on - ${PORT}`))