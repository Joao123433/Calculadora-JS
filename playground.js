const teclas = document.querySelectorAll(".teclasvalor")
const inputValue = document.querySelector("#valor")
const inputResultado = document.querySelector("#resultado")
const mudarTema = document.querySelector("#mudarTema")
const main = document.querySelector("main")
const copy = document.querySelector("#copiar")

const valores = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


inputValue.addEventListener("keydown", function(ev) {
    ev.preventDefault()

    if(valores.includes(ev.key)) {
        inputValue.value += ev.key
    }
    if(ev.key === "Backspace") {
        inputValue.value = inputValue.value.slice(0, -1)
    }
    if(ev.key === "Enter") {
        calculate()
    }
})

teclas.forEach(function(elemento) {
    elemento.addEventListener("click", function(ev) {
        const valor = ev.target.dataset.value
        if(valor === "C") {
            inputValue.value = ""
            inputValue.focus()
        } else if(valor === "=") {
            calculate()
        } else {
            inputValue.value += valor
        }
        
    })    
})

function calculate() {
    const resultado = eval(inputValue.value)
    inputResultado.value = resultado
    inputValue.value = resultado
}

mudarTema.addEventListener("click", function(ev) {
    ev.preventDefault()
    main.classList.toggle("isDark")
    main.classList.toggle("isWhite")

})

copy.addEventListener("click", function(ev) {
    ev.preventDefault()
    navigator.clipboard.writeText(inputResultado.value)
    alert("Valor passado para area de tranferencia")
})