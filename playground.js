import { eventKeys } from "./teclas.js"
import { eventClick} from "./click.js"
import { copyPast } from "./copy.js"
import { changeTheme } from "./theme.js"

document.querySelector("#valor").addEventListener("keydown", eventKeys)

document.querySelectorAll(".teclasvalor").forEach(eventClick)

document.querySelector("#mudarTema").addEventListener("click", changeTheme)

document.querySelector("#copiar").addEventListener("click", copyPast)
