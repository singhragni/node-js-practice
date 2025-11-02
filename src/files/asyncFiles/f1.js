import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
// Resolve the current file path
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// path join 
const filePath = path.join(__dirname,'prac.txt') 


async function readFile(){
    try{
        const data = await fs.readFile(filePath,'utf8');
        return data
    }
    catch(err){
        throw err
    }
}


export default readFile;
 
