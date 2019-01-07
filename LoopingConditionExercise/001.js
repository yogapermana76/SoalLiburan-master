/*
    ============
    Generate Bar 
    ============

    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 

*/

function generateBar(p,t) {
    // your code here
    var output = '';
    if(t < p) {
        for(var i = 0; i <= t - 1; i++) {
            output = '';
            for(var j = 0; j <= p - 1; j++) {
                if(i === 0 || i === t - 1) {
                    output += 'o';
                } else if(j === 0 || j === p - 1) {
                    output += 'o';
                } else {
                    output += ' ';
                }
            }
            console.log(output);
        }
    } else {
        console.log('invalid, panjang harus lebih besar dari tinggi');
    }
    
}



generateBar(4,3)//
/*
    oooo
    o  o
    oooo
*/

generateBar(10,4) // 
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

generateBar(4,5) // panjang harus lebih besar daripada tinggi 