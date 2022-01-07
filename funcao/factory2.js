function produto(nome,preco, desconto = 0) {
    return{
        prodName: nome,
        prodPreco: preco - (preco*desconto/100)
    }
}

console.log(produto('creatina',30,25));
console.log(produto('whey concentrado 1kg',80,10));
console.log(produto('cafeína 210mg/cps',25,20));