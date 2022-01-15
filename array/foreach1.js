const aprovados= ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((ElementoDoArray,indice,Array)=>{
    console.log(`${indice + 1}) ${ElementoDoArray}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados= (elemento,indice,array) => console.log(elemento,(indice+1),array);
aprovados.forEach(exibirAprovados)

/**
 * 
 * forEach((Elemento do Array, Índice do Elemento,Array)=>{})
 * 
 * exibirAprovados é uma variável que armazena uma função,
 * portanto, é uma função que foi declarada de forma literal.
 * 
 * callback = callback é uma função que é chamada para cada elemento
 * de um laço for.
 * 
 * Essa função é passada como parametro e executada dentro do método
 * onde ela foi passada.
 * 
 * Dentro desse método ela recebe parametros. Esses parametros estão
 * disponíveis para serem utilizados dentro da função callback que é
 * passada como parametro do método do Array
 * 
 */