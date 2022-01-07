function soma() {
    let soma = '';
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
function args() {
    console.log(arguments);
    for (const i in arguments) {
        console.log(arguments[i]);
    }
    
}
console.log(soma());
console.log(soma(1));
console.log(soma(1.1,2.2,3.3));
console.log(soma(1.1, 2.2,'teste'));
console.log(soma('a','b','c'));
args(1,2,3,'yes')