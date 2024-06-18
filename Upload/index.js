const express = require ('express');
const app = express();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './my-folders')
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname)
    },
  })
const upload = multer({ storage })

app.post('/picture', upload.single('photo'), (req, res) => {
  res.send(req.file);

})

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen[3000, () => console.log('Your app listening on port 3000!')];
