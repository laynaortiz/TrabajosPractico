let edad1 = document.querySelector("#pedad1")
let bedad1 = document.querySelector("#btnedad1")
let edad1 = 18


bedad1.onclick = function(){
    if(edad1 >= 18)
    {
        edad1.textContent = "Eres mayor de edad"
    }else{
        edad1.textContent = "Eres menor de edad"
    }
}



let nombreUsuario = "Marcos"
let bnombre = document.querySelector("#btnnombre")
let nombre = document.querySelector("#pnombre")


bnombre.onclick = function(){
    if(nombreUsuario == "Nahuel" || nombreUsuario == "Marcos")
    {
        nombre.textContent = "Bienvenido/a " + nombreUsuario + " ¿Cómo andas?"
    }   
    else{
        nombre.textContent = "Bienvenido/a " + nombreUsuario
    }
}




let numero1 = 45
let resultado = document.querySelector("#presultado")
let bresultado = document.querySelector("#btnresultado")


bresultado.onclick = function(){
if(numero1 > 0){
    resultado.textContent = "El número es positivo"
} 
else if(numero1 == 0){
    resultado.textContent = "El número es cero"
}
else if(numero1 < 0){
    resultado.textContent = "El número es negativo"
}

}


let edad2 = 46
let pedad2 = document.querySelector("#pedad2")
let bedad2 = document.querySelector("#btnedad2")
  
bedad2.onclick = function(){
if((edad2 >= 6) && (edad2 <= 11)){
    pedad2.textContent = "Niño (6 a 11 años)"
}
else if((edad2 >= 12) && (edad2 <= 18)){
    pedad2.textContent = "Adolescente (12 a 18 años)"
}
else if((edad2 >= 19) && (edad2 <= 26)){
    pedad2.textContent = "Joven (19 a 26 años)"
}
else if((edad2 >= 27) && (edad2 <= 59)){
    pedad2.textContent = "Adulto (27 a 59 años)"
} 
else if(edad2 > 60){
    pedad2.textContent = "Abuelo (60 años o más)"
}}


let dia = "lunes"
let pdia = document.querySelector("#pdia")
let bdia = document.querySelector("#btndia")


btndia.onclick = function(){
    if(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes"){
        pdia.textContent = "Es un día laboral"
    }
    else if(dia == "sabado" || dia == "domingo"){
        pdia.textContent = "Es el finde"
    }
}




let btncontrasenia = document.querySelector("#btncontrasenia")
let pcontrasenia = document.querySelector("#pcontrasenia")
let contrasenia = "ñoquis"


btncontrasenia.onclick = function(){
    if (contrasenia == "ñoquis"){
        pcontrasenia.textContent = "Acceso concedido"
    }
    else{
        pcontrasenia.textContent = "Acceso denegado"
    }
}
