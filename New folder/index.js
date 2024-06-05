const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser') ;
const multer = require('multer');
const upload = multer({ dest:function(req,file,cb){cb('null', './images/' )}});
const app = express();
//เปิด public ให้กับ client folder
app.use('/', express.static(__dirname + '/client'));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());
// อนุญาตให้นำไฟล์ประเภทform-dataเข้า

//สร้าง Function ใหม่ให้กับ express
app.use(require('./configs/config'));
//สร้าง router ที่ขึ้นต้นด้วย /api
app.use('/api', require('./configs/route'));
//หน้าแรกของเว็บไซต์จะใช้ไฟล์ client/index.html
app.get('/', (req, res) => res.sendFile(__dirname + '/client/index.html'));
//เปิดport 3000 เพื่อ run server
app.listen(3000, () => console.log('Example app listening on port 3000!'));