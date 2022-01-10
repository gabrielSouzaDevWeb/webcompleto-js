const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const carro={
    cambio:'auto'
}
const volvo = {
    modelo: 'v40',
    velMax: 200
}
//Object.setPrototypeOf(ferrari,carro)
//Objeto não tem prototype, função tem
console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(ferrari.__proto__ === volvo.__proto__);
console.log(Object.prototype.__proto__ === null);

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);