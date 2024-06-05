const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
readInterface.question('Enter your first number: ', (num1) => num1 = number(num1))
    readInterface.close();
//readInterface.question('Enter your second number: ', (num2) => num2 = number(num2))
    //readInterface.close();

console.log ("ผลลัพธ์เท่ากับ"%s((num1 + num2)))
