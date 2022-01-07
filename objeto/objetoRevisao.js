const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const Carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro:'Rua ABC',
            numero:123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade:19
    },{
        nome:'Ana',
        idade:42
    }],

    calcularValorSeguro: function () {
        //......
    }
}

Carro.proprietario.endereco.numero = 1000
Carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante';
console.log(Carro);

delete Carro.condutores
delete Carro.proprietario.endereco
delete Carro.calcularValorSeguro
console.log(Carro);
console.log(Carro.condutores);
//console.log(Carro.condutores.length);