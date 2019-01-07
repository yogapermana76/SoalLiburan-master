function soal3(param) {
    // your code here
    var output = [];
    var nilai = 0;
    for(var i = 0; i <= param - 1; i++) {
        var output2 = [];
        for(var j = 0; j <= param - 1; j++) {
            output2.push(nilai + 1);
            nilai++;
        }
        output.push(output2);        
    }
    console.log(output); 
}

soal3(5);
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

soal3(4);

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/