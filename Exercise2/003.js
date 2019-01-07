// function soal3(param) {
//     // your code here
//     var output = {};
//     for(var i = 0; i <= param.length - 1; i++) {
//         var index0 = param[i].charAt(0);
//         switch(index0) {
//             case 'A':
//                 output.A = [param[i]]; break;
//             case 'B':
//                 output.B = [param[i]]; break;
//             case 'C':
//                 output.C = [param[i]]; break;
//             case 'K':
//                 output.K = [param[i]]; break;
//             case 'L':
//                 output.L = [param[i]]; break;
//             case 'M':
//                 output.M = [param[i]]; break;
//             case 'S':
//                 output.S = [param[i]]; break;
//             case 'Z':
//                 output.Z = [param[i]]; break;
//         }
//     }
//     return output;
// }

function soal3(param) {
    // your code here
    var output = {};
    for(var i = 0; i <= param.length - 1; i++) {
        var index0 = param[i].charAt(0);
        output[index0] = [param[i]]
    }
    return output;
}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']));

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/