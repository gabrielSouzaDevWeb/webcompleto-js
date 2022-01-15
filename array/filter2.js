Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)) {
            newArray.push(this[i])
        }        
    }    
    return newArray
}
/**
 * o filter() transforma um antigo array em um novo
 * porém com a quantidade de elementos reduzidas mediante
 * uma regra de negócio
 * 
 * funciona como um filtro de dados no qual se ele
 * corresponder as condições ele é adicionado a o novo
 * array
 */

const produto = [
    {nome: 'Notebook', preco: 2499,fragil:true},
    {nome: 'iPad', preco: 4199,fragil:true},
    {nome: 'copo de vidro', preco: 12.49,fragil:true},
    {nome: 'copo de Plástico', preco: 18.99,fragil:false},
]

console.log(produto.filter(function(p){
    return (p.fragil && p.preco >= 500)
}));
const isFragil = e=>e.preco >= 500
const isCaro = e=>e.fragil
console.log(produto.filter2(isFragil).filter(isCaro));