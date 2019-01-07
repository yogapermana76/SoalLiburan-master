function rocket(param) {
    // your code here
    var output = [];
    for(var i = 0; i <= param - 1; i++) {
        var output2 = [];
        for(var j = 0; j <= param - 1; j++) {
            output2.push('')
        }
        output.push(output2);
    }
    console.log(output)    
}

rocket(5);
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

// console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

// console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

// console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

// console.log(rocket(1))
/*
    [
        ['*']
    ]
*/