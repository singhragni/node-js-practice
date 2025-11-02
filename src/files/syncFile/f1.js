import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve the current file path
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// path join 
const filePath = path.join(__dirname,'prac.txt')

console.log("Start");

function readFile(){
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data)
}

export default readFile;


console.log("testttttt")