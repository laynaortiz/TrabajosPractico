// EJERCICIO 1

let ej1 = document.querySelector("#ej1")
let botonEj1 = document.querySelector("#botonEj1")
let inputEj1 = document.querySelector("#inputEj1")

let edad = 0

botonEj1.onclick = function(){

    edad = inputEj1.value

    if(edad >= 18){
        ej1.textContent = "Sos mayor de edad"
    }else{
        ej1.textContent = "Sos menor de edad"
    }
}


// EJERCICIO 2

let ej2 = document.querySelector("#ej2")
let botonEj2 = document.querySelector("#botonEj2")
let inputEj2 = document.querySelector("#inputEj2")

let nombreUsuario = ""

botonEj2.onclick = function(){

    nombreUsuario = inputEj2.value

    if(nombreUsuario == "Nahuel"){
        ej2.textContent = "Bienvenido Nahuel, ¿cómo estás?"
    }else{
        ej2.textContent = "Bienvenido usuario"
    }
}


// EJERCICIO 3

let ej3 = document.querySelector("#ej3")
let botonEj3 = document.querySelector("#botonEj3")
let inputEj3 = document.querySelector("#inputEj3")

let nombrePersona = ""

botonEj3.onclick = function(){

    nombrePersona = inputEj3.value

    if(nombrePersona == "Nahuel" || nombrePersona == "Marcos"){
        ej3.textContent = "Bienvenido " + nombrePersona + " ¿cómo estás?"
    }else{
        ej3.textContent = "Bienvenido " + nombrePersona
    }
}


// EJERCICIO 4

let ej4 = document.querySelector("#ej4")
let botonEj4 = document.querySelector("#botonEj4")
let inputEj4 = document.querySelector("#inputEj4")

let numero = 0

botonEj4.onclick = function(){

    numero = inputEj4.value

    if(numero > 0){
        ej4.textContent = "El número es positivo"
    }else if(numero < 0){
        ej4.textContent = "El número es negativo"
    }else{
        ej4.textContent = "El número es cero"
    }
}


// EJERCICIO 5

let ej5 = document.querySelector("#ej5")
let botonEj5 = document.querySelector("#botonEj5")
let inputEj5 = document.querySelector("#inputEj5")

let edadCategoria = 0

botonEj5.onclick = function(){

    edadCategoria = inputEj5.value

    if(edadCategoria >= 6 && edadCategoria <= 11){
        ej5.textContent = "Niño (6 a 11 años)"
    }else if(edadCategoria >= 12 && edadCategoria <= 18){
        ej5.textContent = "Adolescente (12 a 18 años)"
    }else if(edadCategoria >= 19 && edadCategoria <= 26){
        ej5.textContent = "Joven (19 a 26 años)"
    }else if(edadCategoria >= 27 && edadCategoria <= 59){
        ej5.textContent = "Adulto (27 a 59 años)"
    }else if(edadCategoria >= 60){
        ej5.textContent = "Anciano (60 años o más)"
    }
}


// EJERCICIO 6

let ej6 = document.querySelector("#ej6")
let botonEj6 = document.querySelector("#botonEj6")
let inputEj6 = document.querySelector("#inputEj6")

let diaSemana = ""

botonEj6.onclick = function(){

    diaSemana = inputEj6.value

    if(diaSemana == "lunes" || diaSemana == "martes" || diaSemana == "miercoles" || diaSemana == "jueves" || diaSemana == "viernes"){
        ej6.textContent = "Es un día laborable"
    }else if(diaSemana == "sabado" || diaSemana == "domingo"){
        ej6.textContent = "Es fin de semana"
    }
}


// EJERCICIO 7

let ej7 = document.querySelector("#ej7")
let botonEj7 = document.querySelector("#botonEj7")
let inputEj7 = document.querySelector("#inputEj7")

let contrasenia = ""

botonEj7.onclick = function(){

    contrasenia = inputEj7.value

    if(contrasenia == "secreto"){
        ej7.textContent = "Acceso concedido"
    }else{
        ej7.textContent = "Acceso denegado"
    }
}
