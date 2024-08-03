function Verificar() {
    var botao = document.getElementById('btndarkmode')
    var mudar = document.getElementById('art-futuro-habilidades')
    var divvazio = document.getElementById('vazio')
    var txtfuturo = document.querySelectorAll('.txt-futuro-habilidades')
    var trocarimg = document.querySelectorAll('.lanternaOFF')
    if (botao.checked) {
        mudar.style.backgroundColor = "#171616"
        divvazio.style.backgroundColor = "#171616"
        mudar.style.transition = "1s"
        divvazio.style.transition = "1s"

        txtfuturo.forEach(elemento => {
            elemento.style.color= '#F2F1EB'
        })

        trocarimg.forEach(elemento => {
            elemento.src = "Imagens/Icones/lanternaligada.png"
        })
    } else {
        mudar.style.backgroundColor = "#EBFDEF"
        divvazio.style.backgroundColor ="#EBFDEF"

        txtfuturo.forEach(elemento => {
            elemento.style.color = '#1B1A1A'
        })

        trocarimg.forEach(elemento => {
            elemento.src = "Imagens/Icones/lanternadesligada.png"
        })
    }
}

const Mover = () => {
    window.scrollTo({
        top: 743,
        behavior: "smooth"
    })
}

const Mover1 = () => {
    window.scrollTo({
        top: 1194,
        behavior: "smooth"
    })
}

const Mover2 = () => {
    window.scrollTo({
        top: 1194,
        behavior: "smooth"
    })
}

const Mover3 = () => {
    window.scrollTo({
        top: 1550,
        behavior: "smooth"
    })
}

const ParaTopo = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}