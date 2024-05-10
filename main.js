import home from './src/pages/home/index.js'
import login from './src/pages/login/index.js'
import termo from './src/pages/termo/index.js'
import questionario from './src/pages/questionario/index.js'
import questionario_preenchido from './src/pages/questionario_preenchido/index.js'
import agradecimento from './src/pages/agradecimento/index.js'

const main = document.querySelector('#app')

window.addEventListener('hashchange', () => {
    main.innerHTML = ''

    switch(window.location.hash){
        case '':
            main.append(home())
            break
        case '#login':
            setTimeout(() => {   
                btnLoginDisabled()             
                scrollTop()
            }, 1) 
            main.append(login())
            break
        case '#termo':
            setTimeout(() => {
                btnTermoDisabled()
                scrollTop()
            }, 1)            
            main.append(termo())
            break
        case '#questionario':
            setTimeout(() => {
                inputsQuestDisabled()
                scrollTop()
            }, 1)   
            main.append(questionario())
            break
        case '#questionario_preenchido':
            setTimeout(() => {                
                scrollTop()
            }, 1) 
            main.append(questionario_preenchido())
            break
        case '#agradecimento':
            setTimeout(() => {                
                scrollTop()
            }, 1) 
            main.append(agradecimento())
            break
        default:
            main.append(home())
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const hashchangeEvent = new Event('hashchange')
    window.dispatchEvent(hashchangeEvent)
})

const btnTermoDisabled = () => {
    const btnTermo = document.querySelector('#component_termo .btn')    
    btnTermo.setAttribute('disabled', 'disabled')

    document.querySelector('#aceita_termo').addEventListener('change', () => {
        if (document.querySelector('#aceita_termo').checked) {
            btnTermo.removeAttribute('disabled')
        } else {
            btnTermo.setAttribute('disabled', 'disabled')
        }
    })
}

const btnLoginDisabled = () => {
    const btnTermo = document.querySelector('#btn_comecar_login')        
    btnTermo.setAttribute('disabled', 'disabled')

    document.querySelector('#login_email').addEventListener('input', () => {
        if (document.querySelector('#login_email').value.length == 0 
            || document.querySelector('#login_senha').value.length == 0) {
            btnTermo.setAttribute('disabled', 'disabled')
        } else {
            btnTermo.removeAttribute('disabled')
        }
    })     

    document.querySelector('#login_senha').addEventListener('input', () => {
        if (document.querySelector('#login_email').value.length == 0 
            || document.querySelector('#login_senha').value.length == 0) {
            btnTermo.setAttribute('disabled', 'disabled')
        } else {
            btnTermo.removeAttribute('disabled')
        }
    })     
}

const inputsQuestDisabled = () => {
    document.querySelectorAll('input').forEach((item) => {
        item.setAttribute('disabled', 'disabled')
    })
}

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
