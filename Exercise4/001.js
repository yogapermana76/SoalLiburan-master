function soal1(param) {
    // Your Code Here
    var output = [];
    for(var i = 0; i <= param - 1; i++) {        
        if(i % 4 === 3) {
            output.push('Fizz');
        } else if(i % 7 === 6) {
            output.push('Buzz');
        } else {
            output.push('');
        }
    }
    return output;
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']


