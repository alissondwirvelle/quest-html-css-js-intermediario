// OBJETIVO: Validar o formulário com JS, ao clicar no botão enviar, caso algum input estiver vazio, a borda do input deverá ficar vermelha e uma mensagem de "input obrigatório" deve aparecer embaixo do input. Se todos os inputs estiverem preenchidos, as bordas dos inputs deverão ficar verdes.

const inputFormulario = document.querySelectorAll(".input")
const botao = document.getElementById("botao")

botao.addEventListener("click", function (event) {
    event.preventDefault()
    inputFormulario.forEach(function (input) {
        if (input.value == "") {
            input.nextElementSibling.classList.add("erro")
            input.classList.add("erro")
            input.classList.remove("ok")
        } else {
            input.classList.add("ok")
            input.classList.remove("erro")
            input.nextElementSibling.classList.remove("erro")
        }
    })
})

inputFormulario.forEach(function (item) {
    item.addEventListener('input', function (event) {
        const mudarCor = event.target
        if (mudarCor.value) {
            mudarCor.classList.remove('erro')
            mudarCor.nextElementSibling.classList.remove('erro')
            mudarCor.classList.remove('ok')
        } else {
            mudarCor.classList.add('ok')
        }
    })
})