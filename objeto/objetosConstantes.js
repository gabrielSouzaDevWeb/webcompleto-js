//pessoa --> 123 --> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa); //= {nome : 'Pedro}

// pessoa <-456-> {...}
//pessoa = {nome:'Ana'}

Object.freeze(pessoa)//obj e seus dados constantes

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome:'João'})
pessoaConstante.nome ="maria"
console.log(pessoaConstante);