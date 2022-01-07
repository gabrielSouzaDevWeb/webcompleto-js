function soBoaNoticia(nota){
    if(nota>=7){
        console.log('aprovado com ' + nota);
    }
}
soBoaNoticia(8.1);
soBoaNoticia(5.1);

function seFVEF(valor){
    if(valor){
        console.log('É verdade... ' + valor);
    }
}

seFVEF()
seFVEF(null)
seFVEF(undefined)
seFVEF(NaN)
seFVEF('')
seFVEF(0)
seFVEF(-1)
seFVEF(' ')
seFVEF('?')
seFVEF([])
seFVEF([1,2])
seFVEF({})
