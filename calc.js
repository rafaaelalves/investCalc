
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

    mes = mes/12
    mes= mes.toFixed(1)
    investido = investido.toFixed(2)
    proventos = proventos.toFixed(2)
    
    return 'Em ' + mes + ' anos, foram aportados R$ ' + aportado + ', resultando num montante de R$ ' + investido + ', gerando um dividendo de R$ ' + proventos + '.'

}

console.log(investir(6000, 0.013, 350, 1000))