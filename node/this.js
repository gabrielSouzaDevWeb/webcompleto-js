console.log(this === global);
console.log(this === module);
console.log(module.exports == this);//true
console.log(this === exports); // true

(function logThis() {
    console.log("Dentro de uma função...");
    console.log(this === exports);
    console.log(this=== module.exports);
    console.log(this === global);//true
})()
this.perigo = '!!!'
console.log(global.perigo);
console.log(module.exports.perigo);
