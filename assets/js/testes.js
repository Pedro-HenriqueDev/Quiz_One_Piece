// Componentes do questionário
const paragrafo = document.querySelector('.paragrafo')
const buttons = document.querySelectorAll('.btn')

// style
const div_end = document.querySelector('.end')
const img_final = document.querySelector('.end_img')
const title_final = document.querySelector('.end_title')
const div_botoes = document.querySelector('.container_btn')

function escrever() {
    let questao = perguntas.at(0)
    
    return questao
}
console.log(escrever())
buttons[0].addEventListener('click', acertou)
// tela de acerto e perda 
function acertou() {
    this.style.background = '#00ff4c'
    this.style.color = '#000'

    setTimeout( () =>{
    this.style.background = '#121615'
    this.style.color = '#eeeeee'

    console.log(perguntas.splice(0,1))  
        
    escrever()
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