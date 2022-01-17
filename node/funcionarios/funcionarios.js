const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{

    const funcionarios = response.data

    const isF = element=> element.genero === 'F'
    const isChina = element => element.pais === 'China'
    const justSalario = element=>element.salario
    const lowerSalario = (previousValue,currenteValue)=>previousValue.salario<currenteValue.salario?currenteValue:previousValue
    const objWithLowerSalario = element=>element.salario==menorSalario

    const menorSalario = funcionarios.filter(isF).filter(isChina).reduce(lowerSalario)
    console.log(menorSalario);
    /*const chinesaComOMenorSalario = funcionarios.filter(objWithLowerSalario)[0].nome
    
    console.log(`A Chinesa com o menor salário é a ${chinesaComOMenorSalario}, que recebe ${menorSalario}`);   */
})

