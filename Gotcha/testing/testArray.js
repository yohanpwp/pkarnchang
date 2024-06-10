
var filter = function(arr, fn) {
    var filteredArr = [];
    // for (let i = 0; i < arr.length; ++i) {
    //     arr[i] = fn(arr[i], i);
    // }
    // return arr; ****จะรีเทินผลลัพธ์ เป็นค่า true,false ต้องกำหนดตัวแปรรับผลลัพธ์
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return console.log(filteredArr);
};

filter([0,10,20,30], function greaterThan10(num) {
    return num > 10;
});