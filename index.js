/*Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2               4, 2, 4.*/




const prompt = require("prompt-sync")();


const n1 = Number(prompt("Ingresa tu numero: "));
const n2 = Number(prompt("Ingresa tu numero: "));
const n3 = Number(prompt("Ingresa tu numero: "));

const listaNumero = [n1, n2, n3]




const ascendente =  [...listaNumero].sort((a, b) => a - b);    // orden ascendente a y b  (... los puntos crean una copia para que no sobreescriba la lista original)
const descendente = [...listaNumero].sort((a, b) => b - a);   // orden descendente b y a
console.log("Lista original de numeros : ", ascendente)
console.log("Lista de numeros ascendente : ", ascendente)
console.log("Lista de numeros descendente: ", descendente)