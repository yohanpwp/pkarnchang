const readline = require('readline');

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
readInterface.question('Enter your score 0 - 100: ', (score) => {
    readInterface.close();

    score = parseInt(score);
    if (score < 0 || score > 100) {
        console.log('You entered an invalid score.');
        return;    
    }

    if (score >= 80) {
        console.log('Fuck you ได้  A เก่งนักหรอ');
    } else if (score >= 70) {
        console.log('B');
    } else if (score >= 60) {
        console.log('C');
    } else if (score >= 50) {
        console.log('D');
    } else {
        console.log('F');
    }
});

