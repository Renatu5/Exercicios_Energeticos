function doSul(quantidade, quantidade2) {
    //(valor unitário x quantidade + impostos)
    let calculo = 4.50 * quantidade
    let icms = (18 / 100) * calculo
    let ipi = 4 / 100 * calculo
    let pis = 1.86 / 100 * calculo
    let cofins = 8.54 / 100 * calculo
    let imposto = icms + ipi + pis + cofins
    let valorTotal = (calculo + imposto).toFixed(2)
    console.log(`Cliente: Supermercado doSul 
    ICMS: ${icms.toFixed(2)} IPI: ${ipi.toFixed(2)} PIS: ${pis.toFixed(2)} COFINS: ${cofins.toFixed(2)} Total: ${valorTotal}`)

    let calculo2 = 4.50 * quantidade2
    let icms2 = (18 / 100) * calculo2
    let ipi2 = 4 / 100 * calculo2
    let pis2 = 1.86 / 100 * calculo2
    let cofins2 = 8.54 / 100 * calculo2
    let imposto2 = icms2 + ipi2 + pis2 + cofins2
    let valorTotal2 = (calculo2 + imposto2).toFixed(2)
    console.log(`Cliente: Supermercado Zottis 
    ICMS: ${icms2.toFixed(2)} IPI: ${ipi2.toFixed(2)} PIS: ${pis2.toFixed(2)} COFINS: ${cofins2.toFixed(2)} Total: ${valorTotal2}`)

    let totalDeImpostos = (imposto + imposto2).toFixed(2)
    let totalMercadorias = (calculo + calculo2).toFixed(2)
    let valorGeral = parseFloat(valorTotal) + parseFloat(valorTotal2)
    let teste = parseFloat(totalMercadorias) + parseFloat(totalDeImpostos)

    return `Total Impostos: ${totalDeImpostos} \n
    Total Mercadorias: ${totalMercadorias}\n
    Valor Geral: ${teste.toFixed(2)}
    teste: ${valorGeral.toFixed(2)}`
}

console.log(doSul(350, 400))

//Supermercado doSul: 350 energéticos
//Super Zottis: : 400 energéticos
// 1 energético = 4,50
// ICMS: 18%; IPI: 4%;  PIS: 1,86%; COFINS: 8,54%