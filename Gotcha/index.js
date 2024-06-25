const express = require('express');
const app = express();

// เปิด publicให้กับโฟลเดอร์ testing
app.use('/', express.static(__dirname + '/testing'));
app.get('/', (req, res) => res.status(200).sendFile(__dirname + '/testing/calculate.js'));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

var today = new Date() ;

let x=console.log(today.toLocaleTimeString());
const person = {firstName: 'Peerawith', lastName: 'Tangmanosopa', email:'peewawith@verismart.co.th'};
console.log (person.firstName+' '+person.lastName);
console.log (person.email);
    
const ratingObj = {
    rating: [],
    rateIt(rating) {
        if(rating) {
            this.rating.push(rating);
        }
        const total = this.rating.reduce((x, y) => x+y);
        return total / this.rating.length;
    }
}
ratingObj.rateIt(5);
ratingObj.rateIt(5);
ratingObj.rateIt(5);

console.log(ratingObj.rateIt(10));