// punto 1 mayor
function mayor(a, b){
    if(a > b){
        return a
    } else {
        return b
    }
}

// 2. menor 
function menor(x, y){
    if(x < y){
        return x;
    }else{
        return y
    }
}

// 3. iguales o distintos
function iguales(n1, n2){
    if(n1 == n2){
        return 'son iguales'
    }else{
        return 'son diferentes'
    }
}

// 4. iva 
function calcularIva(c){
    let res_iva = c * 0.21
    return res_iva
}

// 5. saludar
function saludar(nom){
    let msj = 'Hola ' + nom + ' como estas'
    return msj
}

// 6. modo oscuro
function modoOscuro(){
    let body = document.querySelector('body')
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
}

// 7. modo claro
function modoClaro(){
    let body = document.querySelector('body')
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
}


// BOTONES Y EVENTOS 

let b1 = document.querySelector('#btn1')
b1.onclick = function(){
    let i1 = document.querySelector('#num_1')
    let i2 = document.querySelector('#num_dos')
    let res = mayor(i1.value, i2.value)
    let p = document.querySelector('#p_1')
    p.textContent = res
}

let b2 = document.querySelector('#btn2')
b2.onclick = function(){
    let i1 = document.querySelector('#a1')
    let i2 = document.querySelector('#a2')
    let res = menor(i1.value, i2.value)
    let p = document.querySelector('#p_2')
    p.textContent = res
}

let boton3 = document.querySelector('#btn3')
boton3.onclick = function(){
    let v1 = document.querySelector('#val1')
    let v2 = document.querySelector('#val_dos')
    let res = iguales(v1.value, v2.value)
    let p = document.querySelector('#resultado3')
    p.textContent = res
}

let btn_4 = document.querySelector('#btn4')
btn_4.onclick = function(){
    let precio = document.querySelector('#precio_input')
    let res = calcularIva(precio.value)
    let p = document.querySelector('#p4')
    p.textContent = res
}

let boton5 = document.querySelector('#btn5')
boton5.onclick = function(){
    let n = document.querySelector('#nombre_txt')
    let res = saludar(n.value)
    let p = document.querySelector('#p_saludo')
    p.textContent = res
}

document.querySelector('#btnOscuro').onclick = modoOscuro
document.querySelector('#btnClaro').onclick = modoClaro