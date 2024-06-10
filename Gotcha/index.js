const express = require('express');
const app = express();

// เปิด publicให้กับโฟลเดอร์ testing
app.use('/', express.static(__dirname + '/testing'));
app.get('/', (req, res) => res.status(200).sendFile(__dirname + '/testing/calculate.js'));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});