import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

//เปิด public ให้ folder
app.use('/', express.static(__dirname + '/design'+'/images'));
app.use('/src', express.static(__dirname + '/src'));

//ให้หน้า index เรียกใช้ไฟล์ index.html
app.get('/',(req,res) => res.sendFile(__dirname+'/index.html'));
//ให้หน้า index เรียกใช้ไฟล์ index.html
app.get('/about',(req,res) => res.sendFile(__dirname+'/about.html'));
//ให้ใช้ port 3000
app.listen(3000, () => console.log( 'App listening from Port 3000'));

