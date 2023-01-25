'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:\
  const divisores = [1]
  let div = 2;
  while(num > 1){
    if(num % div === 0) {
    divisores.push(div)
    num = num / div;
    } else{
      div++
  } 
  }
  return divisores

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let desordenado = true;
  while(desordenado){
    desordenado = false; // le digo que desordenado es false, para darle un final
    for(let i = 0; i < array.length -1; i++){
      if(array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1]
        array[i+1] = aux;
        desordenado = true; // cambio de nuevo desordenado a true asi sigue entrando en el while. hasta que quede ordenado y ningun numero sea mayor que sel siguiente.
                            // por ende no entra en el for
      }
    }
  }
  
  return array;
}
console.log(bubbleSort([5,2,4,3,7,8]))


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let desordenado = true;
  while(desordenado){
    desordenado= false
    for(let i = 0; i < array.length; i++){
      if(array[i+1] < array[i]){
        let aux = array[i];
        array[i]= array[i+1];
        array[i+1] = aux;
        desordenado = true;
      }

    }
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
