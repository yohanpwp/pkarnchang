const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your first number : ', (answer) => {
    var num1 = parseInt(answer);
    
    rl.question("Enter your second number ", (answer) => {
        var num2 = parseInt(answer);
        console.log('ผลรวมคือ' , num1  + num2);
        console.log('ผลต่างคือ' , num1  - num2);
        console.log('ผลคูณคือ' , num1  * num2);
        console.log('ผลหารคือ' , num1  / num2);
        rl.close();
    });
});