const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultado = document.getElementById('resultado')

input.focus()

const botões = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.btn-valor').forEach(function (btn){
    btn.addEventListener('click', function(){
        const value = btn.dataset.value
        input.value += value
    })
})

document.getElementById('limpar').addEventListener('click', function(){
    input.value = ''
    input.focus()

    resultado.value = ''
    resultado.classList.remove('error')
})

input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if(botões.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calcular()
    }
})

document.getElementById('copy').addEventListener('click', function(ev){
    const button = ev.currentTarget //botão acionou o evento

    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('sucesso')
        navigator.clipboard.writeText(resultado.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('sucesso')
    }
})

document.getElementById('igual').addEventListener('click', calcular)

function calcular(){
    resultado.value = 'ERROR'
    resultado.classList.add('error')

    const result = eval(input.value)
    resultado.value = result
    resultado.classList.remove('error')
}

document.getElementById('mudarTema').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#ededed')
        root.style.setProperty('--font-color', '#D58BDD')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--primary-color', '#905E96')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#ff8787')
        root.style.setProperty('--font-color', '#ededed')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--primary-color', '#b73e3e')
        main.dataset.theme = 'dark'
    }
})