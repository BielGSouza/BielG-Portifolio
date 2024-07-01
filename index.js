function Verificar() {
    var botao = document.getElementById('btndarkmode')
    var mudar = document.getElementById('art-futuro-habilidades')
    var divvazio = document.getElementById('vazio')
    var txtfuturo = document.querySelectorAll('.txt-futuro-habilidades')
    if (botao.checked) {
        mudar.style.backgroundColor = "#171616"
        divvazio.style.backgroundColor = "#171616"
        mudar.style.transition = "1s"
        divvazio.style.transition = "1s"

        txtfuturo.forEach(elemento => {
            elemento.style.color= '#F2F1EB'
        })
    } else {
        mudar.style.backgroundColor = "#EBFDEF"
        divvazio.style.backgroundColor ="#EBFDEF"

        txtfuturo.forEach(elemento => {
            elemento.style.color = '#1B1A1A'
        })
    }
}