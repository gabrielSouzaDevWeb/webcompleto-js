Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i,this))
    }
    return newArray
}
/**
 * cria um novo array e para os elementos serem
 * adicionados a esse array ele passará primeiro por uma
 * regra de negócio que transforma o antigo array em um
 * novo com a mesma quantidade de elementos do array
 * anterior
 */

const carrinho=[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"kit de Lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}',    
]

//Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json)
//transforma json em objeto e o retorna
const apenasPreco = produto => produto.preco
//pega os preços dos produtos e o retorna
const paraReal = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.',',')}`
//formatação em real e o retorna

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco).map(paraReal)
console.log(resultado);