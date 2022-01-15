const nums = [1,2,3,4,5]

//For com propósito
let resultado = nums.map(function(e) {
    return e*2
})
console.log(resultado, nums);

const soma10 = e=> e+10
const triplo = e=>e*3
const paraDinheiro= e=> `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);

/**
 * O map() transforma um array em outro preservando a quantidade
 * de elementos.
 * 
 * "Serve para mapear os elementos de um array para outro"
 * 
 * Conceito: o array final sempre terá a mesma qunatiodade de
 * elementos do array inicial
 * 
 * Dentro do método map() irá uma callback com a regra de negócio
 * e a função callback possuí três paramentos:
 * (Elemento do Array, Índice do Elemento,Array)
 * 
 * ficando da seguinte forma:
 * array.map((Elemento do Array, Índice do Elemento,Array)=>{...})
 */