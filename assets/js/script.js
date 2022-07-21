// Variáveis Construtoras
const paragrafo = document.querySelector('.paragrafo')
let buttons = document.querySelectorAll('.btn')
const div_title = document.querySelector('.div-title')

const div_end = document.querySelector('.end')
const img_final = document.querySelector('.end_img')
const title_final = document.querySelector('.end_title')
const div_botoes = document.querySelector('.container_btn')
const bar_time = document.querySelector('.bar_time')
const timer = document.querySelector('.countdown')

// timer
let time = 16
    
    setInterval(function tempo() {
        if(perguntas.length == 0){
            timer.innerHTML = 'Acabou!'
        } else if(time == 0) {
            perdeu()
        } else {
            time--
            bar_time.style.animationName = 'timer'
        }
    }, 1000)

// Loop De perguntas
function escolheQuestao() {
    let contador = perguntas.length - 1
    let aleat = Math.round(Math.random() * contador)
    let questao = perguntas.at(aleat)
    escreverQuestoes(questao)

    // tempo()
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
    buttons.forEach(elem => {

        elem.removeEventListener('click', acertou)
        elem.addEventListener('click', errou)
    })
}

function bloqueiaBotoes() {
    buttons.forEach(elem => {
        elem.removeEventListener('click', errou)
    })
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

    if(questaoRemovida === -1) {
        perguntas.splice(0, 0)
    } else {
        perguntas.splice(questaoRemovida, 1)
    }    

    time = 16
    bar_time.style.animationName = ''
    if(perguntas.length == 0){
        terminou()
    }
    escolheQuestao()
    }, 1000)
}
function errou() {
    this.style.background = '#8a0808'
    
    limparBotoes()
    setTimeout(perdeu, 1000)
}  
function perdeu() {
    div_botoes.style.display = 'none'
    paragrafo.style.display = 'none'
    div_end.style.display = 'flex'

    img_final.style.width = '250px'
    img_final.style.marginBottom = '10px'
    title_final.innerHTML = 'Você perdeu!'
    title_final.style.marginBottom = '10px'
    img_final.src = './assets/img/luffy_sad.png'
    bar_time.style.display = 'none'
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