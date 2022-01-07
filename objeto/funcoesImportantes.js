const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log('l.7: ',Object.keys(pessoa));//1
console.log('l.8: ',Object.values(pessoa));//2
console.log('l.9: ',Object.entries(pessoa));//3

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento',{
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