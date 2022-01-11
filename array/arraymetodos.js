const pilotos = ['Vettel','Alonso','Raikkonen', 'Massa']
pilotos.pop()//Massa quebrou o carro!//remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen')//adiciona um elemento na última posição
console.log(pilotos);

pilotos.shift()//remove o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton')//adiciona um elemento no início do /array
console.log(pilotos);

//splice pode adicionar elementos ou remover

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')//([apartir de(indice)],[remover n elementos(0)],[e adicionar('Bottas','Massa)])
console.log(pilotos);

//remove
pilotos.splice(3,1) //Massa quebrou o carro de novo :(
console.log(pilotos);

//slice
const algunsPilotos = pilotos.slice(2) //novo array gerado apartir desse método
console.log(algunsPilotos);//todos a partir do índice 2

const algunsPilotos2 = pilotos.slice(1,4)//novo array,recorte(ínicio, fim-1)
console.log(algunsPilotos)