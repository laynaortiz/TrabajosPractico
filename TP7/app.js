// Ejercicio 1: Mayor de edad

let edadPersona = 18
let resultadoEdad = document.querySelector("#resultadoEdad")
let botonEdad = document.querySelector("#botonEdad")

botonEdad.onclick = function(){
    if(edadPersona >= 18){
        resultadoEdad.textContent = "Eres mayor de edad"
    }
    else{
        resultadoEdad.textContent = "Eres menor de edad"
    }
}


// Ejercicio 2: Mensaje de bienvenida

let nombreUsuario = "Nahuel"
let mensajeUsuario = document.querySelector("#mensajeUsuario")
let botonUsuario = document.querySelector("#botonUsuario")

botonUsuario.onclick = function(){
    if(nombreUsuario == "Nahuel"){
        mensajeUsuario.textContent = "Bienvenido Nahuel, ¿cómo estás?"
    }
    else{
        mensajeUsuario.textContent = "Bienvenido usuario"
    }
}


// Ejercicio 3: Mensaje de bienvenida v2

let nombrePersona = "Marcos"
let textoBienvenida = document.querySelector("#textoBienvenida")
let botonBienvenida = document.querySelector("#botonBienvenida")

botonBienvenida.onclick = function(){
    if(nombrePersona == "Nahuel" || nombrePersona == "Marcos"){
        textoBienvenida.textContent = "Bienvenido " + nombrePersona + " ¿cómo estás?"
    }
    else{
        textoBienvenida.textContent = "Bienvenido " + nombrePersona
    }
}


// Ejercicio 4: Número positivo, negativo o cero

let numero = 45
let resultadoNumero = document.querySelector("#resultadoNumero")
let botonNumero = document.querySelector("#botonNumero")

botonNumero.onclick = function(){
    if(numero > 0){
        resultadoNumero.textContent = "El número es positivo"
    }
    else if(numero < 0){
        resultadoNumero.textContent = "El número es negativo"
    }
    else{
        resultadoNumero.textContent = "El número es cero"
    }
}


// Ejercicio 5: Categoría de edad

let edadCategoria = 46
let categoriaEdad = document.querySelector("#categoriaEdad")
let botonCategoria = document.querySelector("#botonCategoria")

botonCategoria.onclick = function(){
    if(edadCategoria >= 6 && edadCategoria <= 11){
        categoriaEdad.textContent = "Niño (6 a 11 años)"
    }
    else if(edadCategoria >= 12 && edadCategoria <= 18){
        categoriaEdad.textContent = "Adolescente (12 a 18 años)"
    }
    else if(edadCategoria >= 19 && edadCategoria <= 26){
        categoriaEdad.textContent = "Joven (19 a 26 años)"
    }
    else if(edadCategoria >= 27 && edadCategoria <= 59){
        categoriaEdad.textContent = "Adulto (27 a 59 años)"
    }
    else if(edadCategoria >= 60){
        categoriaEdad.textContent = "Anciano (60 años o más)"
    }
}


// Ejercicio 6: Día laborable o fin de semana

let diaSemana = "lunes"
let resultadoDia = document.querySelector("#resultadoDia")
let botonDia = document.querySelector("#botonDia")

botonDia.onclick = function(){
    if(diaSemana == "lunes" || diaSemana == "martes" || diaSemana == "miercoles" || diaSemana == "jueves" || diaSemana == "viernes"){
        resultadoDia.textContent = "Es un día laborable"
    }
    else if(diaSemana == "sabado" || diaSemana == "domingo"){
        resultadoDia.textContent = "Es fin de semana"
    }
}


// Ejercicio 7: Comprobar contraseña

let contrasenia = "secreto"
let resultadoClave = document.querySelector("#resultadoClave")
let botonClave = document.querySelector("#botonClave")

botonClave.onclick = function(){
    if(contrasenia == "secreto"){
        resultadoClave.textContent = "Acceso concedido"
    }
    else{
        resultadoClave.textContent = "Acceso denegado"
    }
}
