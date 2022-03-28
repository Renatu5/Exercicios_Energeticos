function Imposto(inputQuantidade) {

    let calculo = 4.50 * inputQuantidade
    let imposto = 0
    let valorImposto = [18, 4, 1.86, 8.54]
    let arrayMap = valorImposto.map(
        valor => valor / 100 * calculo
    )
    console.log(arrayMap)
    for (let i = 0; i < valorImposto.length; i++) {
        let pushe = valorImposto[i] / 100 * calculo
        imposto += pushe
        console.log(imposto)
    }
    return (calculo + imposto).toFixed(2)

}

console.log(Imposto(350))