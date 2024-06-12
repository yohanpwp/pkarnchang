
var filter = function(arr, fn, init) {
    var filteredArr = [];
    // for (let i = 0; i < arr.length; ++i) {
    //     arr[i] = fn(arr[i], i);
    // }
    // return arr; ****จะรีเทินผลลัพธ์ เป็นค่า true,false ต้องกำหนดตัวแปรรับผลลัพธ์
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return console.log(filteredArr);
};

filter([0,10,20,30,40], function greaterThan5(num) {
    return num > 5;
});

const array = [4,2,6,4,5]
const sum = array.reduceRight((prev, cur) => {
    return prev + cur;
}) ;
console.log(sum);