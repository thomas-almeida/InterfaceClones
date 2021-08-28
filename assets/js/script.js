// Thomas e Guzote
//Mecânica do Cupom de Desconto

var inputCupom = document.getElementById('txt')
var btnCupom = document.getElementById('btncupom')
var cupomDesconto = "MEUBOIBARATO"
var precoAntigo = document.getElementById('preco-antigo')
var precoNovo = document.getElementById('preco-novo')

//Adicionando variavel linkada da notificação
var notify = document.getElementById('notify')
var notifyTxt = document.getElementById('notify-txt')
var notifyClose = document.getElementById('notify-close')

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

        //notificando
        notify.style.display = 'block'
        notify.style.backgroundColor = 'springgreen'
        notify.style.color = '#333'
        notifyTxt.innerText = ' ✔ Desconto foda aplicado !'
        
    } else {

        //notificando
        notify.style.display = 'block'
        notify.style.backgroundColor = 'crimson'
        notify.style.color = '#fff'
        notifyTxt.innerText = ' ⚠️ Cupom Inválido !'
    }

})

notifyClose.addEventListener('click', function(){

    //fechando notificação
    notify.style.display = 'none'

})