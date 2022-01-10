//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0" //Não é recomendado
//por padrão o __proto__ de um abjeto sempre aponta para Object.prototype
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 3 }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual:0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual = delta
        } else {
            this.velAtual = this.velMax
        }

    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`//this, referência ao objeto atual
    }
}

const ferrari = {
    modelo : 'f40',
    velMax: 324 // shadowing, pois o seu prototipo também terá velocidade máxima,
    //super: usado para o prototipo, this: usado para o objeto atual
}

const volvo ={
    modelo:'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super referêncía o prototipo, ao contrario do this que faz referência o objeto atual
    }//[super] =  a função status está sendo sombreada pelo atributo do prototipo 
}

Object.setPrototypeOf(ferrari,carro)// settar proto, ferrari recebe prototypo carro
Object.setPrototypeOf(volvo,carro)// volvo recebe o prototipo carro, uma forma de definir o prototipe de um obj
//{volvo.__proto__:carro}
console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(300)
console.log(volvo.status());
/*ferrari.acelerarMais(100)
console.log(ferrari.status());*/

ferrari.acelerarMais(300)
console.log(ferrari.status());