function tratarErroElancar(erro) {
    //throw new Error('404')
    //throw 10
    //throw true
    //throw 'msg'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
   try {
    console.log(obj.name.toUpperCase() + "!!");
   } catch (e) {
       tratarErroElancar(e);
   } finally{
       console.log('final');
   }
}
const obj = {name: 'Roberto'}
imprimirNomeGritado(obj);