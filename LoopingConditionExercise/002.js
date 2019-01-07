/*
    ===========
    Bar X dan O
    ===========

    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X

    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar 
    - p => panjang
    - t => tinggi 

    character yang pertama kali di cetak adalah x , 
    lalu o dan setelah itu o kemudian kembali lagi ke x 

    [EXAMPLE]

    generateBarXO(4,3)
    output: 
    xoox
    ooxo
    oxoo
    xoox

    generateBarXO(6,4)
    output: 
    xooxoo
    xooxoo
    xooxoo
    xooxoo

*/

function generateBarXO(p,t) {
    // your code here
    var output = '';
    for(var i = 0; i <= t - 1; i++) {
        output = '';
        for(var j = 0; j <= p; j++) {
            output += 'x';
            
        }
        console.log(output);
    }
     
}

generateBarXO(4,3)
/* 
xoox
ooxo
oxoo
xoox
*/

generateBarXO(6,4)
/*
xooxoo
xooxoo
xooxoo
xooxoo
*/