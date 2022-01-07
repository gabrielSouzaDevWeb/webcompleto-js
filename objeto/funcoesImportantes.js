const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}
 
console.log('l.7: ',Object.keys(pessoa));//Resgata todas as chaves de um objeto in A
console.log('l.8: ',Object.values(pessoa));//Resgata todos os valores de um objeto in A
console.log('l.9: ',Object.entries(pessoa));//Resgata todas as chaves e valores A in A

Object.entries(pessoa).forEach(([chave,valor])=>{//transformou um array de duas posições em duas variáveis
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento',{ // maior poder a na definição de uma propriedade
    enumerable:true,
    writable:false,
    value: '01/01/2019'
})//4
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1= {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2)//5

Object.freeze(obj)//6
obj.c = 1234
console.log(obj);