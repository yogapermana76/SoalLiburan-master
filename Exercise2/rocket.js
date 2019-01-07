/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
    // yout code here
    var output = '';
    for(var i = 0; i <= param - 1; i++) {
        output = '';
        for(var j = 0; j <= param + 1; j++) {
            if(j === 0 || j === param + 1) {
                output += "'";
            } else {
                output += '*';
            }
        }
        console.log(output);
    } 
}

scotlandFlag(5);
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

scotlandFlag(9);
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/