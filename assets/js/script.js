// Selecionar as variaveis
const paragrafo = document.querySelector('.paragrafo')
let buttons = document.querySelectorAll('.btn')
const div_title = document.querySelector('.div-title')

// style
const div_end = document.querySelector('.end')
const img_final = document.querySelector('.end_img')
const title_final = document.querySelector('.end_title')
const div_botoes = document.querySelector('.container_btn')

function escreverQuestoes() {
    
    let questao = perguntas.at(0)

    paragrafo.innerHTML = questao.pergunta

    buttons[0].innerHTML = questao.a
    buttons[1].innerHTML = questao.b
    buttons[2].innerHTML = questao.c
    buttons[3].innerHTML = questao.d

    return questao
}
verificaBotoes(escreverQuestoes())

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

// escreve a pergunta

//verifica as respostas nos botões

function acertou() {
    this.style.background = '#00ff4c'
    this.style.color = '#000'

    setTimeout( () =>{
    this.style.background = '#121615'
    this.style.color = '#eeeeee'
    
    perguntas.splice(0,1)    

    if(perguntas.length === 0){
        terminou()
    }
        
    verificaBotoes(escreverQuestoes())
    }, 1000)
}
function errou() {
    this.style.background = '#8a0808'

    setTimeout( () =>{
            div_botoes.style.display = 'none'
            paragrafo.style.display = 'none'
            div_end.style.display = 'flex'

            img_final.style.width = '250px'
            title_final.innerHTML = 'Você perdeu!'
            img_final.src = './assets/img/luffy_sad.png'
    }, 1000)
    
}  
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