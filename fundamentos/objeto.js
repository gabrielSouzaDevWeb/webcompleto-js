const prod1= {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar attr com espaços

console.log(prod1)

const prod2={
    nome: 'camisa polo',
    preco: 79.80,
    obj:{
        blabla:1,
        obj:{
            blabla:2
        }
    }
}
console.log(prod2);

/*'{"nome":"camisa polo","preco":79.90}' //JSON*/
