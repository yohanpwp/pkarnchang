const express = require('express');
const multer = require('multer');
 
const app = express();
 
// Set up Multer to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Uploads will be stored in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename to avoid overwriting
    }
});
 
const upload = multer({ storage: storage });
 
app.get('/', (req, res) => {
    res.send('Hello from server')
})
 
// Define the file upload endpoint
app.post('/api/files/upload', upload.single('file'), (req, res) => {
    // Access the uploaded file information from req.file
    const fileName = req.file.filename;
 
    // Store the file into file system / database (if needed)
 
    // Send the response
    res.status(200).json({ message: `File uploaded successfully: ${fileName}` });
});
 
// Start the server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});