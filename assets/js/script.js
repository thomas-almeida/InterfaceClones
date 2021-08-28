// Thomas e Guzote
//Mecânica do Cupom de Desconto

var inputCupom = document.getElementById('txt')
var btnCupom = document.getElementById('btncupom')
var cupomDesconto = "MEUBOIBARATO"
var precoAntigo = document.getElementById('preco-antigo')
var precoNovo = document.getElementById('preco-novo')

var desconto = 303 * 0.15
desconto = 303 - desconto
console.log(desconto)

//botão de validar cupom
btnCupom.addEventListener('click', function () {

    if (inputCupom.value == cupomDesconto) {
        //Validar cupom

        precoAntigo.innerText = 'de R$ 300,00, por'
        precoNovo.innerText = 'R$ ' + desconto
        inputCupom.value = ""
    } else {
        alert('CUPOM INVALIDO')
    }

})