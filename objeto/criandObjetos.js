// usando notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//Função construtora
function Produto(prodNome, prodPreco, prodDesc) {
    this.nome = prodNome
    let preco = prodPreco
    let desconto = prodDesc
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto / 100)
    }
}

const p1 = new Produto('Caneta', 2.00, 25)
const p2 = new Produto('Notebook', 3998.99, 20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());
//console.log(p1.nome);

// Função Factory
function criarFuncionario(funcNome, funcSalarioBase, funFaltas) {
    return {
        funcNome,
        funcSalarioBase,
        funFaltas,
        getSalario() {
            return (funcSalarioBase / 30) * (30 - funFaltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha= Object.create(null)
filha.nome= 'Ana'
console.log(filha);

// uma funcção famosa que retorna um objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info);