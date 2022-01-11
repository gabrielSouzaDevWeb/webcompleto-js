const carrinho=[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"kit de Lapis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}',    
]

//Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const paraReal = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.',',')}`

const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(paraReal)
console.log(resultado);