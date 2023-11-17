import { inputResultado, inputValue, calculate } from "./calculate.js"

export function eventClick(elemento) {
  elemento.addEventListener("click", function(ev) {
    const valor = ev.target.dataset.value
    if(valor === "C") {
      inputValue.value = ""
      inputValue.focus()
      inputResultado.value = ""
    } else if(valor === "=") {
      calculate()
    } else {
      inputValue.value += valor
    }
  })    
}
