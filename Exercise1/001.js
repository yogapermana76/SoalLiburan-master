function soal1(param) {
    // your code here
    var output = [];
    for(var i = 0; i <= param - 1; i++) {
        if(param % 2 === 1) {
           if(i === Math.floor(param/2)) {
                output.push('*');
            } else {
                output.push(' ');
            } 
        } else if(param % 2 === 0) {
            if(i === Math.floor(param/2)-1 || i === Math.floor(param/2)) {
                output.push('*')
            } else {
                output.push(' ');
            }
        }    
    }
    return output; 
}



// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']