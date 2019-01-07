function soal3(param1) {
    // your code here
    var output = [];
    var nilai = 0; 
    for(var i = 0; i <= param1 - 1; i++) {
        var output2 = [];
        for(var j = 0; j <= param1 - 1; j++) {
            output2.push(nilai + 1);
            nilai = nilai + 1;
        }
        output.push(output2);
    }
    return output;
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]

*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]

*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]

*/
