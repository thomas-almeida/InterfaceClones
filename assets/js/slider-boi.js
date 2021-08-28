

var imagemBoi = document.getElementById('icone-boi')
var bntLeft = document.getElementById('arrow-left')
var bntRight = document.getElementById('arrow-right')

var stage = 1

bntRight.addEventListener('click', function () {

    if (stage == 1) {
        stage = 2
        //mudar imagem
        imagemBoi.src = '../assets/images/iconeboi-2.png'
        console.log('Boi ' + stage)
    } else if (stage == 2) {
        stage = 3
        //mudar imagem
        imagemBoi.src = '../assets/images/iconeBoi-3.png'
        console.log('Boi ' + stage)
    } else if (stage == 3) {
        stage = 1
        //mudar imagem
        imagemBoi.src = '../assets/images/iconeBoi.png'
        console.log('Boi ' + stage)
    }

})

bntLeft.addEventListener('click', function () {

    if (stage == 1) {
        stage = 3
        //mudar imagem
        imagemBoi.src = '../assets/images/iconeboi-3.png'
        console.log('Boi ' + stage)
    } else if (stage == 3) {
        stage = 2
        //mudar imagem
        imagemBoi.src = '../assets/images/iconeboi-2.png'
        console.log('Boi ' + stage)
    } else if (stage == 2) {
        stage = 1
        //mudar imagem
        imagemBoi.src = '../assets/images/iconeBoi.png'
        console.log('Boi ' + stage)
    }

})