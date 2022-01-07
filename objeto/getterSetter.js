const sequencia = {
    _valor: 1,//convenção de attr privated

    //resgatar valor
    get valor(){
        return this._valor++
    },

    //modificar valor
    set valor(valor){
        //Regra de negócio
        if (valor> this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor);
sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor);