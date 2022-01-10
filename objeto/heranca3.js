const pai = {nome: 'Pedro', corCabelo: 'preto'}
function l(e) {
    console.log(e);
}
const filha1 = Object.create(pai)//__proto__: pai
filha1.nome = 'Ana'
l(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome:{value:'Bia', writable:false, enumerable:true}

})
l(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

l(Object.keys(filha1))
l(Object.keys(filha2))
l(filha2)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por herança ${key}`);

}