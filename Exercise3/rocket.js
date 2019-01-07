function persegi(param1,param2) {
    // your code here
    var output = '';
    if(param1 !== 0 || param2 !== 0) {
        for(var i = 0; i <= param2 - 1; i++) {
            output = '';
            for(var j = 0; j <= param1 - 1; j++) {            
                if(i === 0 || i === param2 - 1) {
                    output += '#';
                } else if(j === 0 || j === param1 - 1) {
                    output += '#';
                } else {
                    output += ' ';
                }
            }
            console.log(output);
        }
    } else {
       console.log('invalid');
    } 
}


persegi(5,7);

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

persegi(6,3);

/*
    ######
    #    #
    ######
*/


persegi(0,7) // invalid value 
persegi(4,0) // invalid value 