function rocket(param) {
    // your code here
    var output = [];
    for(var i = 0; i <= param - 1; i++) {
        var output2 = [];
        for(var j = 0; j <= param - 1; j++) {
            output2.push([i, j])
        }
        output.push(output2)
    }
    return output;
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/