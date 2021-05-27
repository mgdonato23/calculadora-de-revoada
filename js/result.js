function atualizarResultado(){
    if(localStorage.getItem('resultadoDaRevoada') != null){
        var resultado = document.getElementById('resultado')
        resultado.innerHTML = "R$ " + localStorage.getItem('resultadoDaRevoada')
        localStorage.removeItem('resultadoDaRevoada')
    }
}

atualizarResultado()