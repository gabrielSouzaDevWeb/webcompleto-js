const aprovados= ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function (callback) {
    for(let i = 0; i<this.length; i++){
        callback(this[i],i,this)
        //funPassadaComoParametro(elementoDoArray,IndiceDoElementoDoArray,Array)
    }
}

const listaAprovados = (elemento,indice,array) => console.log(`${indice +1}) ${elemento}`);
aprovados.forEach2(listaAprovados)

/**
 * 
 * forEach((Elemento do Array, Índice do Elemento,Array)=>{...})
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