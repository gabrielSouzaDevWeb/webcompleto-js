//oo = coleção dinamica de pares chave/valor
const produto = new Object  //produto = {}
produto.nome = "Cadeira"  // produto={nome:'Cadeira}
produto['marca do produto'] = 'Generica' //{ nome: 'Cadeira', 'marca do produto': 'Generica'}
produto.preco = 220 //{ nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
console.log(produto);

delete produto.preco //{ nome: 'Cadeira', 'marca do produto': 'Generica'}
delete produto['marca do produto']// produto={nome:'Cadeira}
console.log(produto);// produto={nome:'Cadeira}

const Carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {//o in o
        nome: 'Raul',
        idade: 56,
        endereco: {// o in o in o
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ // o in a 
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function () {
        //......
    }
}

Carro.proprietario.endereco.numero = 1000 //forma 1 de modificar um valor k in o in o in o
Carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante'; //forma 2 de modificar um valor k in o in o in o
console.log(Carro);

delete Carro.condutores //deletando key
delete Carro.proprietario.endereco//deletando key
delete Carro.calcularValorSeguro// deletando key
console.log(Carro);
console.log(Carro.condutores);//valor da key de um o
//console.log(Carro.condutores.length);