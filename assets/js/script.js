// Variáveis Construtoras
const paragrafo = document.querySelector('.paragrafo')
let buttons = document.querySelectorAll('.btn')
const div_title = document.querySelector('.div-title')

const div_end = document.querySelector('.end')
const img_final = document.querySelector('.end_img')
const title_final = document.querySelector('.end_title')
const div_botoes = document.querySelector('.container_btn')

// Loop De perguntas
function escolheQuestao() {
    let contador = perguntas.length - 1
    let aleat = Math.round(Math.random() * contador)
    let questao = perguntas.at(aleat)
    escreverQuestoes(questao)
}
escolheQuestao()
function escreverQuestoes(questao) {
    
    paragrafo.innerHTML = questao.pergunta

    buttons[0].innerHTML = questao.a
    buttons[1].innerHTML = questao.b
    buttons[2].innerHTML = questao.c
    buttons[3].innerHTML = questao.d

    verificaBotoes(questao)
}
function verificaBotoes(questao) {
        limparBotoes()
        if(buttons[0].innerHTML === questao.correto) {
            buttons[0].removeEventListener('click', errou)
            buttons[0].addEventListener('click', acertou)
        } else if(buttons[1].innerHTML === questao.correto) {
            buttons[1].removeEventListener('click', errou)
            buttons[1].addEventListener('click', acertou)
        } else if(buttons[2].innerHTML === questao.correto) {
            buttons[2].removeEventListener('click', errou)
            buttons[2].addEventListener('click', acertou)
        } else if(buttons[3].innerHTML === questao.correto) {
            buttons[3].removeEventListener('click', errou)
            buttons[3].addEventListener('click', acertou)
        }
        
}
// Fim do Loop

// Funções Corretoras
function limparBotoes() {
        buttons[0].removeEventListener('click', acertou)
        buttons[1].removeEventListener('click', acertou)
        buttons[2].removeEventListener('click', acertou)
        buttons[3].removeEventListener('click', acertou)

        buttons[0].addEventListener('click', errou)
        buttons[1].addEventListener('click', errou)
        buttons[2].addEventListener('click', errou)
        buttons[3].addEventListener('click', errou)
}

function bloqueiaBotoes() {
    buttons[0].removeEventListener('click', errou)
    buttons[1].removeEventListener('click', errou)
    buttons[2].removeEventListener('click', errou)
    buttons[3].removeEventListener('click', errou)
}

// Funçoes addEventListener
function acertou() {
    this.style.background = '#00ff4c'
    this.style.color = '#000'

    let par = this.textContent
    console.log(perguntas)
    bloqueiaBotoes()
    setTimeout( () =>{
    this.style.background = '#121615'
    this.style.color = '#eeeeee'
    
      
    let questaoRemovida = perguntas.findIndex(elem => elem.correto == par)

    perguntas.splice(questaoRemovida, 1)

    if(perguntas.length === 0){
        terminou()
    }
        
    escolheQuestao()
    }, 1000)
}
function errou() {
    this.style.background = '#8a0808'
    
    limparBotoes()
    setTimeout( () =>{
            div_botoes.style.display = 'none'
            paragrafo.style.display = 'none'
            div_end.style.display = 'flex'

            img_final.style.width = '250px'
            title_final.innerHTML = 'Você perdeu!'
            img_final.src = './assets/img/luffy_sad.png'
    }, 1000)
    
}  

// Fim de Jogo
function terminou() {
    div_botoes.style.display = 'none'
    paragrafo.style.display = 'none'
    div_end.style.display = 'flex'

    div_title.style.display = 'none'
    img_final.style.margin = '50px'
    img_final.style.width = '150px'
    title_final.innerHTML = 'Você será o Rei dos Piratas!'
    title_final.style.margin = '30px'
    img_final.src = './assets/img/luffy.png' 
}