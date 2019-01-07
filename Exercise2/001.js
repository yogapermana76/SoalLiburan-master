/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    PSEUDOCODE HERE : 


*/
function soal1(param) {
    // your code here
    var output = [];
    if(param !== 0) {
        for(var i = 0; i <= param - 1; i++) {        
            if(i % 3 === 0) {
                output.push('!');
            } else if(i % 3 === 1) {
                output.push('@');
            } else if(i % 3 === 2) {
                output.push('#');
            }
        }
        return output;
    } else {
        return 'invalid input';
    }    
}



console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input