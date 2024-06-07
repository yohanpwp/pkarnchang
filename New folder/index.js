const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'images/') // folder ที่เราต้องการเก็บไฟล์
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname) //ให้ใช้ชื่อไฟล์ original เป็นชื่อหลังอัพโหลด
    },
  })
const upload = multer({storage});
const app = express();
//เปิด public ให้กับ client folder
app.use('/', express.static(__dirname + '/client'));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
// //parse application/json
app.use(bodyParser.json());
//parse application/form-data
app.use(upload.any());
// ส่งรูปภาพเข้ามาเก็บในโฟลเดอร์
app.post('/upload',upload.single(),(req,res)=>{
  // # The req.file will contain your file data
  // # The req.body will contain your text data
  console.log(req.file, req.body.name)
  res.status(200).json("ok")
})
// ส่งรูปภาพหลายรูปเข้ามาเก็บในโฟลเดอร์
app.post('/upload',upload.array(),(req,res)=>{
  console.log(req.files, req.body.name)
  res.status(200).json("ok")
})
//สร้าง Function ใหม่ให้กับ express
app.use(require('./configs/config'));
//สร้าง router ที่ขึ้นต้นด้วย /api
app.use('/api', require('./configs/route'));
//หน้าแรกของเว็บไซต์จะใช้ไฟล์ client/index.html
app.get('/', (req, res) => res.sendFile(__dirname + '/client/index.html'));
//เปิดport 3000 เพื่อ run server
app.listen(3000, () => console.log('Example app listening on port 3000!'));