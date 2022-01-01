let investido = 3122 // Se refere ao valor investido em fundos imobiliarios
const dividendYield = 0.013 //Taxa de dividendo mensal da carteira

let aporteSalario = 0

objetivo = 1000

function investir(investido, dividendYield, aporteSalario, objetivo){
    let proventos = 0
    let mes = 0
    let aportado = 0
    while (proventos < objetivo){
        proventos = investido * dividendYield
        if (Number.isInteger(mes/12)){
            investido+= 2125 //Este numero representa a soma do 13º e o saque aniversário do FGTS
        }
        investido+= aporteSalario + proventos
        aportado+= aporteSalario
        mes+= 1
    }
    return 'Em ' + mes/12 + ' anos, R$ ' + investido + ' investidos, e um retorno de R$' + proventos + ' mensais. O total aportado foi de R$' + aportado

}

console.log(investir(0, 0.013, 350, 1000))