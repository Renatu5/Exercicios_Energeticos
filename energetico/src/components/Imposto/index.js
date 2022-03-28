function calculo(percentual, valor) {
    let valorImposto = percentual / 100 * valor
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorImposto)

}
function Imposto(quantidade, valorDaMercadoria) {

    let valorTotal = valorDaMercadoria * quantidade
    let valorImposto = [{ ICMS: 18, IPI: 4, PIS: 1.86, COFINS: 8.54 }]
    let impostoCobrado = {
        ICMS: calculo(valorImposto.ICMS, valorTotal),
        IPI: calculo(valorImposto.IPI, valorTotal),
        PIS: calculo(valorImposto.PIS, valorTotal),
        COFINS: calculo(valorImposto.COFINS, valorTotal)
    }
    return impostoCobrado
}

console.log(Imposto(350, 4.50))

export default Imposto