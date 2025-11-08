const prompt = require("prompt-sync")();

const n1 = Number(prompt("Ingresa tu numero: "));
const n2 = Number(prompt("Ingresa tu numero: "));
const n3 = Number(prompt("Ingresa tu numero: "));

const listaNumero = [n1, n2, n3]

let mayor = listaNumero[0];
let menor = listaNumero[0];

if (n1 === n2 && n2 === n3){
    console.log("Todos son iguales:  ", n1)

//* comparacion para ver si son  iguales con operador or ||
}else if (n1 === n2 || n1 === n3 || n2 === n3) { 
    if (n1 === n2) console.log(`El numero ${n1} y El numero ${n2} son iguales`);
    if (n1 === n3 ) console.log(`El numero ${n1} y El numero ${n3} son iguales`);
    if (n2 === n3) console.log(`El numero ${n2} y El numero ${n3} son iguales`)
       
    }
    
// *aqui calculamos cual es el mayor y menor 
 for(let n of listaNumero){
        if (n > mayor) mayor = n;   //si es mayor actualizamos mayor con mayor = n
        if (n < menor) menor = n;  
 }

 // * aqui hacemo una operacio para calcular el del centro
 let medio  = n1 + n2 + n3 - mayor - menor;    

console.log("Soy el numero mayor: " , mayor)
console.log("Soy el numero menor: ", menor)
console.log("Soy el nuemero del medio: " , medio)



const ascendente =  [...listaNumero].sort((a, b) => a - b);    // orden ascendente a y b  (... los puntos crean una copia para que no sobreescriba la lista original)
const descendente = [...listaNumero].sort((a, b) => b - a);   // orden descendente b y a
console.log("Lista original de numeros : ", listaNumero)
console.log("Lista de numeros descendente: ", descendente)
console.log("Lista de numeros ascendente : ", ascendente)
