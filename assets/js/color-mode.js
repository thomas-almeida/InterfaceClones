
//Implementando color mode

var colorMode = document.getElementById('color-mode')

var body = document.getElementById('fundo')
var paragrafo = document.getElementById('paragrafo')
var logo = document.getElementById('logo-name')
var pointer = 0

colorMode.addEventListener('click', function(){

    //Mudar modo de cor
    if(pointer == 0){
        
        body.style.backgroundColor = '#fff'
        paragrafo.style.color = '#000'
        logo.style.color = '#000'

        pointer = 1

    }else{

        body.style.backgroundColor = '#333'
        paragrafo.style.color = '#fff'
        logo.style.color = '#fff'

        pointer = 0

    }

})

