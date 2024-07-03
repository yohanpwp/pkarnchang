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
ratingObj.rateIt(10);
ratingObj.rateIt(24);

console.log(ratingObj.rateIt());

