/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris

    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param) {
    // your code here
    var output = '';
    var med = Math.floor(param/2);
    if(param % 2 === 1) {
        for(var i = 0; i <= param - 1; i++) {
            output = '';
            for(var j = 0; j <= param + 1; j++) {                
                if(j === 0 || j === param + 1) {
                    output += "'";
                } else if(i === med || j === med + 1) {
                    output += "*";
                } else {
                    output += " ";
                }                        
            }
            console.log(output);
        }
    } else {
        console.log('invalid input - input harus angka ganjil')
    }
}

benderaInggris(9);

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

benderaInggris(5);
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

benderaInggris(4); // invalid input