

function doSul(inputQuantidade, inputQuantidade2) {
    //(valor unitário x quantidade + impostos)
    // let inputNomeDoMercado = document.getElementById("Mercadinho").value
    // let inputNomeDoMercado2 = document.getElementById("Mercadinho2").value
    // let inputValor = document.getElementById("Valor").value
    // let inputQuantidade = document.getElementById("Quantidade").value


    let calculo = 4.50 * inputQuantidade
    let imposto = 0
    let valorImposto = [18, 4, 1.86, 8.54]
    let array = []
    for (i = 0; i < valorImposto.length; i++) {
        let pushe = valorImposto[i] / 100 * calculo
        array.push(pushe)
        imposto += pushe
        console.log(imposto)
    }
    let valorTotal = (calculo + imposto).toFixed(2)
    // let inputQuantidade2 = document.getElementById('Quantidade2').value

    let calculo2 = 4.50 * inputQuantidade2
    let imposto2 = 0
    // let valorImposto2 = [18, 4, 1.86, 8.54]

    for (i = 0; i < valorImposto.length; i++) {
        imposto2 += valorImposto[i] / 100 * calculo2
        console.log(imposto2)
    }
    // let icms2 = (18 / 100) * calculo2
    // let ipi2 = 4 / 100 * calculo2
    // let pis2 = 1.86 / 100 * calculo2
    // let cofins2 = 8.54 / 100 * calculo2
    // let imposto2 = icms2 + ipi2 + pis2 + cofins2
    let valorTotal2 = (calculo2 + imposto2).toFixed(2)

    let totalDeImpostos = (imposto + imposto2).toFixed(2)
    let totalMercadorias = (calculo + calculo2).toFixed(2)
    let valorGeral = parseFloat(valorTotal) + parseFloat(valorTotal2)
    let teste = parseFloat(totalMercadorias) + parseFloat(totalDeImpostos)

    return `ICMS: ${array[0].toFixed(2)} IPI: ${array[1].toFixed(2)} PIS: ${array[2].toFixed(2)} COFINS: ${array[3].toFixed(2)} Total: ${valorTotal}`
    //     return (`
    //     Cliente: ${inputNomeDoMercado}
    //     ICMS: ${valorImposto[0].toFixed(2)} IPI: ${valorImposto[1].toFixed(2)} PIS: ${valorImposto[2].toFixed(2)} COFINS: ${valorImposto[3].toFixed(2)} Total: ${valorTotal} \n

    //     Cliente: ${inputNomeDoMercado2}
    //     ICMS: ${icms2.toFixed(2)} IPI: ${ipi2.toFixed(2)} PIS: ${pis2.toFixed(2)} COFINS: ${cofins2.toFixed(2)} Total: ${valorTotal2} \n

    //     Total Impostos: ${totalDeImpostos} \n
    //     Total Mercadorias: ${totalMercadorias}\n
    //     Valor Geral: ${teste.toFixed(2)}
    //     teste: ${valorGeral.toFixed(2)}`)
}

console.log(doSul(350, 400))

//Supermercado doSul: 350 energéticos
//Super Zottis: : 400 energéticos
// 1 energético = 4,50
// ICMS: 18%; IPI: 4%;  PIS: 1,86%; COFINS: 8,54%