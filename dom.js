function insert(value){
    let numero = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = numero + value
}

// limpa o visor
function clean () {
    document.querySelector('#resultado').innerHTML = ""

}

// Remove o ultimo resultado
function back(){
    let resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

// Realiza o calculo e exibe o resultado
function calcular(){
    let resultado = document.querySelector('#resultado').innerHTML

     // Substitui porcentagem por sua fração equivalente
     resultado = resultado.replace(/(\d+(\.\d+)?)%/g, '($1/100)')

    if(resultado) {
        try {
            let calculado = eval(resultado)
            document.querySelector('#resultado').innerHTML = calculado.toFixed(1)
        } catch (error) {
            document.querySelector('#resultado').innerHTML = "Erro"
        }
    } else {
        document.querySelector('#resultado').innerHTML = ''
    }
}

