
// *verificamos si todos los numeros son iguales
function todosIguales(lista) {
  if (lista[0] === lista[1] && lista[1] === lista[2]) {
    return true;
  } else {
    return false;
  }

}

// * Ordenamos numeros Descendentes y Ascendentes (Mayor a Menor y Menor a Mayor)
function ordenarNumeros(lista) {
  const ascendente = [...lista].sort((a, b) => a - b);    // orden ascendente a y b  (... los puntos crean una copia para que no sobreescriba la lista original)
  const descendente = [...lista].sort((a, b) => b - a);   // orden descendente b y a
  return { descendente, ascendente }
}


// *aqui calculamos cual es el mayor, menor y centro
function calularMMM(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let n of lista) {
    if (n > mayor) mayor = n;   //si es mayor actualizamos mayor, con mayor = n
    if (n < menor) menor = n;
  }
  // * aqui hacemos una operacion para calcular el del centro 
  let medio = lista.reduce((acu, b) => acu + b, 0) - mayor - menor;
  return { mayor, medio, menor };

}


// hacemos  que estas funciones sean accesibles desde script.js
window.todosIguales = todosIguales;
window.ordenarNumeros = ordenarNumeros;
window.calularMMM = calularMMM;


