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
console.log(produto.filter(isFragil).filter(isCaro));