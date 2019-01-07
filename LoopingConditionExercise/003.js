/*
    =========
    Triangel
    =========

    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid
    
    [EXAMPLE]
    triangel(5)
    output:
        *    
       ***
      *****
     *******
    *********

    triangel(3)
    output:
        *    
       ***
      *****

*/

function triangel(t) {
    // your code here 
    var output = '';
    var med = Math.floor(t / 2)
    for(var i = 0; i <= t - 1; i++) {
        output = '';
        for(var j = 0; j <= t - 1; j++) {
            if(j === med) {
                output += '*';
            } else if(i === t - 1) {
                output += '*'
            } else if(i) {

            } else {
                output += ' '
            }
        }
        console.log(output)
    }
}

triangel(3)
/*
      *    
     ***
    *****
*/

triangel(5)
/*
        *    
       ***
      *****
     *******
    *********
*/

triangel(1) // t is invalid