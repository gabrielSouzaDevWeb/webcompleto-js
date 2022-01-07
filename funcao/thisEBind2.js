function Pessoa() {
    this.idade = 0

    const self=this //arrow function
    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/,1000);
}

new Pessoa