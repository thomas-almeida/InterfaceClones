
//Implementando color mode

var colorMode = document.getElementById('color-mode')

var body = document.getElementById('fundo')
var paragrafo = document.getElementById('paragrafo')
var paragrafoDois = document.getElementById('paragrafo-2')
var logo = document.getElementById('logo-name')
var pointer = 0

colorMode.addEventListener('click', function(){

    //Mudar modo de cor
    if(pointer == 0){
        // trocar para modo claro 
        body.style.backgroundColor = '#fff'
        paragrafo.style.color = '#000'
        paragrafoDois.style.color = '#000'
        logo.style.color = '#000'

        colorMode.innerText = "Modo Escuro"
        colorMode.style.color = 'mediumpurple'

        pointer = 1

    }else{
        //Trocar para modo escuro
        body.style.backgroundColor = '#333'
        paragrafo.style.color = '#fff'
        paragrafoDois.style.color = '#fff'
        logo.style.color = '#fff'

        colorMode.innerText = "Modo Claro"

        pointer = 0

    }

})

