const alunos = [
    {nome:'João',nota:7.3,bolsista:false},   
    {nome:'Maria',nota:9.2,bolsista:true},   
    {nome:'Pedro',nota:9.8,bolsista:false},   
    {nome:'Ana',nota:8.7,bolsista:true},   
]
console.log(alunos.map(a=>a.nota));
const somarNotas = (acumulador,atual) =>{
    console.log(acumulador ,atual);
    return acumulador + atual
}
const resultado = alunos.map(a => a.nota).reduce(somarNotas,0)
console.log(resultado);
/**
 function(acumulador,atual) {
        console.log(acumulador, atual);
        return acumulador + atual
}
 */

/**
 * O reduce tem como propósito transformar um array
 * em uma quantidade menor de elementos e que esse/esses
 * elementos representem os seus anteriores de acordo com
 * o criterio que é a regra de negócio.
 * 
 * O resultado de uma função reduce é passado sempre para
 * a próxima interação
 * 
 * O primeiro reduce sempre recebe dois parametros, o
 * elemento de índice zero, que é o acumulador dos
 * resultados, e o elemento de índice um. É montada uma
 * regra de negócio com esses dois parametros e o
 * resultado será o acumulador da próxima interação.
 * 
 * O acumulador sempre será o resultado da regra de
 * negócio da interação anterior. Esse resultado é
 * passado adiante virando acumulador da próxima
 * interação e assim sucessivamente até que seja
 * percorrido todos os índices do array.
 * 
 * rray.reduce(callback,valorInicialDoAcumulador)
 * se o valor i
 */

/* 
    Parâmetros

    callback:

    Função que é executada em cada valor no array
    (exceto no primeiro, se nenhum valorInicial    
    for passado); recebe quatro argumentos:


    Acumulador:

    Opcional. O índice do elemento atual que está
    sendo processado no array. Começa a partir do
    index 0 se um valorInicial for fornecido. Do
    contrário, começa do index 1.

    valorInicial:

    Opcional. Valor a ser usado como o primeiro
    argumento da primeira chamada da função
    callback. Se nenhum valorInicial é fornecido,
    o primeiro elemento do array será usado como
    o valor inicial do acumulador e o valorAtual
    não será lido. Chamar reduce() em uma array
    vazia sem valor inicial retornará um erro.
    Valor retornado
    O valor que resulta da redução.
*/