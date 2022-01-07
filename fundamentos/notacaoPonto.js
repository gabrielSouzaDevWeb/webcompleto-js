console.log(typeof console);
console.log(Math.ceil(6.1));
{this.nome;}
const obj1= {}
obj1.nome = 'bola'
obj1['nome'] = 'Bola2';
console.log(obj1.nome);

function setObj(params) {
    this.nome = params;
    this.exec = function(){
        console.log('exec...');
    }
}
function getObj() {
    return this.nome;
}
setObj("Gabriel Lucas de Souza");
console.log(getObj());


const obj2 = new setObj('cadeira');
const obj3 = new setObj('mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();