//closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas á função

//Contexto léxico

const x = 'Globar'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())