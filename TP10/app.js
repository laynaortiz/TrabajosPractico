let utiles = ['lapiz','goma', 'regla', 'cuaderno', 'lapicera'];

console.log(utiles);
console.log("el primer elemento es:" +utiles[0]);
console.log("el tercer elemento es:" +utiles[4]);
console.log(utiles[utiles.length-1]);
console.log(utiles.length);
utiles.push ("mochila");
console.log(utiles);
utiles.unshift ("cartuchera");
console.log(utiles);
console.log(utiles.length);

let eliminado = utiles[utiles.length-1]
utiles.pop();
console.log (eliminado);
console.log(utiles);

eliminado = utiles[0]
utiles.shift();
console.log (eliminado);
console.log(utiles);  
console.log(utiles.length);

let productos = ['arroz', 'fideos', 'pan', 'azucar', 'sal'];

