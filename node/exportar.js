console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

const  inObj= function(){
    let a = 1
    let b = 2
    let c = 3
    return console.log(a,b,c)
}


exports = null
console.log(module.exports);

exports = {
    nome: "Teste"
}
//console.log(module.exports);
console.log(module);
module.exports = {publico: true, inObj}
module.exports.inObj()