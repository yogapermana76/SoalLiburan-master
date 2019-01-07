// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
    //your code here 
    var output = [];
    for(var i = 0; i <= param.length - 1; i++) {
        // if(param.length % 2 === 0) {
        //     output.push([param[i], param[(param.length - 1)-i]]);
        // } else {
        //     output.push([param[i], param[(param.length - 1)-i]])
        // }
        for(var j = 0; j <= param.length - 1; j++) {
            
        }
        
    }
    return output;
}

// if(i === Math.floor(param/2)) {

// }

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]