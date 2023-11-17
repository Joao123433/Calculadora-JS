let inputResultado = document.querySelector("#resultado")
let inputValue = document.querySelector("#valor")

export function calculate() {
    const resultado = eval(inputValue.value)
    inputResultado.value = resultado
    inputValue.value = resultado
}

export { inputResultado, inputValue }
