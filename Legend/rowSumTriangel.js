/* 
    ================
    Row Sum Triangle
    ================

    [INSTRUCTION]
    diberikan sebuah segitiga yang berisi angka - angka ganjil 

    1 
    3 5 
    7 9 11
    13 15 17 19
    21 23 25 27 29
    31 33 35 37 39 41
    ...

    tugas kalian adalah dapat mengetahui jumlah angka per baris bila 
    baris nya disebutkan.

    [EXAMPLE]
    rowSumTriangle(4)
    dibaris 4 terdapat angka :
    13 + 15 + 17 + 19 = 64
    output: 64 

    rowSumTriangle(27)
    output : 19683


*/

function rowSumTriangle(row) {
    // your code here
    var output = '';
    var counter = 1;
    for(var i = 1; i <= 30; i++) {
        output = '';
        counter = 1;
        for(var j = 1; j <= i; j++) {
            output = counter;
            counter += 1;
        }
        console.log(output);
    }
}

rowSumTriangle(4) // 64

rowSumTriangle(27) // 19683