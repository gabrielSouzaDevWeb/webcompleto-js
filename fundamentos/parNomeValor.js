// par nome/valor
const saudacao = 'opa'; // contexto léxico 1

function exec() {
    const saudacao = 'falaaa'; // contexto léxico 2
    return saudacao;
}

//objetos são grupos aninhados de pares nome/valor ou chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:90,
    esdereco:{
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);