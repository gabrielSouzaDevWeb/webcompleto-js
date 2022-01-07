function Compras(trabalho1, trabalho2) {
    const ComprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !ComprarSorvete
    return {
        ComprarSorvete,
        comprarTv50,
        comprarTv32,
        manterSaudavel
    }
}

console.log(Compras(true,true));
console.log(Compras(true,false));
console.log(Compras(false,true));
console.log(Compras(false,false));