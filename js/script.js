const botao = document.getElementById('button')

function calcular() {

    const numerodeBares = document.querySelector('.numero-bares').value;
    var NIB = document.querySelector('.nivel-bares').value
    const numerodeBaladas = document.querySelector('.numero-baladas').value
    var NIBA = document.querySelector('.nivel-baladas').value
    var NIS = document.querySelector('.nivel-sede').value
    const kmUber = document.querySelector('.km-uber').value
    var D = document.querySelector('.dia-revoada').value
    const outrosGastos = document.querySelector('.outros-gastos').value

    const NB = parseFloat(numerodeBares)
    const NBA = parseFloat(numerodeBaladas)
    const KM = parseFloat(kmUber)
    const O = parseFloat(outrosGastos)

    if (NB !== '' && NIB !== '' && NBA !== '' && NIBA !== '' && NIS !== '' && KM !== '' &&
    D !== '' && O !== '') {
        if(NIB == 1) {
            NIB = 1.1
        } else if (NIB == 2) {
            NIB = 1.5
        } else {
            NIB = 2.2
        }

        if(NIBA == 1) {
            NIBA = 2
        } else {
            NIBA = 3
        }

        if(NIS == 1) {
            NIS = 1
        } else if (NIS == 2) {
            NIS = 1.6
        } else {
            NIS = 2.5
        }

        if(D == 1) {
            D = 1
        } else if (D == 2) {
            D = 1.4
        } else if (D == 3) {
            D = 1.6
        } else {
            D = 1.2
        }

        const formula = parseFloat((NB * NIB * NIS * 5 * 9) + (NBA * NIBA * NIS * 5 * 9) + (KM * D * 4) + O).toFixed(2).replace('.',',')
        localStorage.setItem('resultadoDaRevoada', formula.toString())
        location.replace("index.html")   
    }
}

botao.addEventListener('click', calcular)