
// *boton para ingresar la captura de numeros
const ButonIngresar = document.getElementById('ingresar');


ButonIngresar.addEventListener('click', () => {

// *el usuario ingresa sus numeros
let input1 = prompt("Ingresa tu numero: ");
if (input1 === null) return;  // Se cancela inmediatamente

let input2 = prompt("Ingresa tu numero: ");
if (input2 === null) return;  // Se cancela inmediatamente

let input3 = prompt("Ingresa tu numero: ");
if (input3 === null) return;  // Se cancela inmediatamente


// *verifica campo vacío (espacios vacíos)
    if (input1.trim() === "" || input2.trim() === "" || input3.trim() === "") {
        alert("No puedes dejar ningún campo vacío");
        return;
    }

// *Convertimos a Number 
    const n1 = Number(input1);
    const n2 = Number(input2);
    const n3 = Number(input3);


// *Verifica que el usuario haya ingresado un valor valido (isNan: no es un numero)
if ([n1, n2, n3].some(isNaN)) {
    alert("Ingresa un numero valido");
    return;
}

// *Seleccionamo el input por su ID y le asigna el valor del prompt
  document.getElementById('n1').value = n1;
  document.getElementById('n2').value = n2;
  document.getElementById('n3').value = n3;


// *creamos la lista que vamos a mandar a App.js
const listaNumero = [n1, n2, n3];


// *aqui llamaremos a las funciones de App.js
//Todas las variables y funciones que se definen globalmente pueden ser accedidas como (window.algo)
// Verifica si todos los números ingresados son iguales

// *Mostrar la lista original ingresada por el usuario
document.getElementById('listaOriginal').textContent = `Entrada:    ${listaNumero.join(", ")}`;

if(window.todosIguales(listaNumero)) {
    document.querySelector('.mensaje').textContent = "Todos los numeros son iguales";
    document.getElementById('listaOrdenada').textContent = "";
}else{
    const {ascendente, descendente} = window.ordenarNumeros(listaNumero); //Ordena los números y guarda las listas ascendente y descendente (destructuring de objetos.)
    document.getElementById('listaOrdenada').textContent = `descendente: ${descendente.join(", ")}  ascendente: ${ascendente.join(", ")}`;   //join(", ") → convierte un array en una cadena de texto separada por comas.
   

    const {mayor, menor, medio} = window.calularMMM(listaNumero);
    document.getElementById('mayor').textContent = `Mayor:  ${mayor}`;
    document.getElementById('medio').textContent = `Centro:  ${medio}`;
    document.getElementById('menor').textContent = `Menor: ${menor}`;
    
}

});



