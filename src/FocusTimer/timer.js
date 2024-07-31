import state from "./state.js"
import * as el from './elements.js'
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown() {

    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--
    if(seconds < 0){
        seconds = 59
        minutes--
    }  
    if (minutes < 0){
        reset()
        kitchenTimer.play()
        return
    }
    
    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout(() => countdown(),1000)
} 

    /*Recursao, quando uma funcao chama ela mesmo em algum momento,
     tem que pensar qual o momento exato de parar ela pois do contrario ela ficara sendo
     executada para sempre e isso pode gerar um problema na aplicacao 
     
     Callback e uma funcao passada como argumento para outra funcao para ser executada mais tarde
     */


export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}




/* nullish coalesing operation*/