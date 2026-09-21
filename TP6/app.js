let parrafo = document.querySelector("#parrafo")

let botonFondo = document.querySelector("#botonFondo")
let botonTexto = document.querySelector("#botonTexto")
let botonColor = document.querySelector("#botonColor")
let botonLetra = document.querySelector("#botonLetra")

let botonTamano = document.querySelector("#botonTamano")
let botonReiniciar = document.querySelector("#botonReiniciar")


botonFondo.onclick = function(){
    parrafo.style.backgroundColor = "yellow"
}


botonTexto.onclick = function(){
    parrafo.textContent = "El texto del párrafo cambió."
}


botonColor.onclick = function(){
    parrafo.style.color = "red"
}


botonLetra.onclick = function(){
    parrafo.style.fontFamily = "Impact"
}


botonTamano.onclick = function(){
    parrafo.style.fontSize = "30px"
}


botonReiniciar.onclick = function(){
    parrafo.textContent = "Este es el texto original del párrafo."
    parrafo.style.color = "black"
    parrafo.style.backgroundColor = "transparent"
    parrafo.style.fontFamily = "Arial"
    parrafo.style.fontSize = "20px"
}
