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
const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(paraReal)
/**
 * 1° map() transformou o array de json e array de objeto
 * 2° map() transformou o array de objetos em array de
 * preços dos objetos.
 * 3° map() trsnformou de float para Real
 */
console.log(resultado);