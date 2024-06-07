const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  },
})

const upload = multer({ storage })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
// uploadรูปภาพรูปเดียว
app.post('/upload', upload.single('photo'), (req, res) => {
  res.send(req.file)
})
// uploadรูปภาพหลายรูป
app.post('/images', upload.array('images'), (req, res) => {
  res.send(req.file)
})

app.listen(9999, () => console.log('Running on port 9999'))
