// Thomas e Guzote
//Mecânica do Cupom de Desconto

var inputCupom = document.getElementById('txt')
var btnCupom = document.getElementById('btncupom')
var cupomDesconto = "MEUBOIBARATO"

var desconto = 303 * 0.15
desconto = 303 - desconto
console.log(desconto)

//botão de validar cupom
btnCupom.addEventListener('click', function () {

    if (inputCupom.value == cupomDesconto) {
        //Validar cupom
        alert('CUPOM APLICADO, BOI TA MAIS BARATO!!')
    } else {
        alert('CUPOM INVALIDO')
    }

})