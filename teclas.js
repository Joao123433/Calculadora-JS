import { inputResultado, calculate } from "./calculate.js"

const valores = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export function eventKeys(ev) {
    ev.preventDefault()

    if(valores.includes(ev.key)) {
        this.value += ev.key
    }
    if(ev.key === "Backspace") {
        this.value = this.value.slice(0, -1)
    }
    if(ev.key === "Enter" || ev.key === "=") {
        calculate()
    }
    if(ev.key === "c") {
      this.value = ""
      this.focus()
      inputResultado.value = ""
    }
    
}
