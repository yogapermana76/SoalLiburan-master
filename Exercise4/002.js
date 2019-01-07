function soal2(param) {
    // your code here
    var times = param[0] * param[param.length - 1];
    var med = Math.floor(param.length / 2);

    if(param.length >= 3) {
        if(param.length % 2 === 1) {
            param.splice(med, 1, times);
            return param;
        } else {
            param.splice(med-1, 2, times, times);
            return param;
        } 
    } else {
        return 'input is invalid';
    }
}




console.log(soal2([34,'','','',40]))
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 