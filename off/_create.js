
function _create(e,a){
    if (isNaN(a)) {
        return eval(`module.exports.${e} = '${a}'`)
    } else {
        return eval(`module.exports.${e} = ${a}`)
    }
    
}
_create('hoje',16)
_create('amanha',17)
_create('nome','Gabriel')
_create('nota',8.3)
_create('sobreNome','Souza')

console.log(module.exports.nota);
console.log(module.exports.nome);
console.log(module.exports.hoje);
console.log(module.exports.amanha);
console.log(module.exports);