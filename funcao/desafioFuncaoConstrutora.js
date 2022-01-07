function Pessoa(nome) {
    let personName = nome

    this.talk = function(){
        console.log(`Meu nome é ${personName}`);
    }
}
const p1 = new Pessoa('Gabriel');
p1.talk()