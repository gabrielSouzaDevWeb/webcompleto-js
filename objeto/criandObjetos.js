// usando notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
obj2.nome = 'Gabriel';
console.log(obj2);

//Função construtora
function Produto(prodNome, prodPreco, prodDesc) {
    this.nome = prodNome // attr public
    let preco = prodPreco //attr privated
    let desconto = prodDesc //attr privated
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto / 100)
    }
}

const p1 = new Produto('Caneta', 2.00, 25)
const p2 = new Produto('Notebook', 3998.99, 20)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());
//console.log(p1.nome);

// Função Factory: retorna m obeto com os parâmetros passados
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.nome, f2.nome);
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha= Object.create(null)
filha.nome= 'Ana'
filha['idade']=14
console.log(filha);

// uma funcção famosa que retorna um objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info);