import { inputResultado, inputValue } from "./calculate.js"

export function copyPast(ev) {
    ev.preventDefault()
    navigator.clipboard.writeText(inputResultado.value)
    alert("Valor passado para area de tranferencia")
    inputValue.value = ""
}
