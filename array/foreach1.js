const aprovados= ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome,indice,Array)=>{
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

/**
 * forEach((Elemento do Array, Índice do Elemento,Array)+>{})
*/

const exibirAprovados= aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados)