const main = document.querySelector("main")

export function changeTheme(ev) {
    ev.preventDefault()
    main.classList.toggle("isDark")
    main.classList.toggle("isWhite")
}
