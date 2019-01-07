/*
    ================
    simple Trapesium
    ================

    [INSTRUCTION]
    buatlah sebuah program yg dapat membuat trapesium sederhana
    program ini hanya memiliki 1 input yaitu 
    - tinggi (t)

    Program ini memiliki 2 release. 
    yaitu : 

    [RELEASE 0]
    trapesiumRelease0(5)
    output: 
    ooooo
    oooooo
    ooooooo
    oooooooo
    ooooooooo

    [RELEASE 1]
    trapesiumRelease1(5)
    output:
    ooooo
    o    o
    o     o
    o      o
    ooooooooo

*/

function trapesiumRelease0(t) {
    // your code here 
    var output = '';
    for(var i = t; i < (t*2); i++) {
        output = '';
        for(var j = 1; j <= i; j++) {
            output += 'o';
        }
        console.log(output);
    }
}

trapesiumRelease0(5)

/* 
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/

function trapesiumReleaseFinal(t) {
    //your code here
    var output = '';
    for(var i = t; i < (t*2); i++) {
        output = '';
        for(var j = 1; j <= i; j++) {
            if(j === 1 || j === i) {
                output += 'o';
            } else if(i === t || i === (t*2)-1) {
                output += 'o';
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }
}

trapesiumReleaseFinal(5)
/*
ooooo
o    o
o     o
o      o
ooooooooo
*/

