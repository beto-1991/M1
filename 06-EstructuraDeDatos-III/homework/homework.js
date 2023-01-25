'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - insert: agrega un nodo en el lugar correspondiente
  - size: retorna la cantidad total de nodos del árbol
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.size = function (){
   let sum = 0;
   sum++
   if(this.left) {
      sum += this.left.size()
   } 
if(this.right) {
   sum += this.right.size()
} 
   return sum
}

BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      if(this.left) {
         this.left.insert(value)
      } else {
         this.left = new BinarySearchTree(value)
         return value
   } 
   }
   if(value > this.value){
      if(this.right){
         this.right.insert(value);
      } else {
         this.right = new BinarySearchTree(value);
         return value
      }
   }
   return false;  
}

BinarySearchTree.prototype.contains = function (value){
   if(this.value === value) return true
   if(value < this.value && this.left){
      if(this.left.contains(value)) return true;
   } 
   if(value > this.value && this.right){
      if(this.right.contains(value)) return true;
   }
   return false
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, type){
    switch (type) {
      case 'post-order':
         if(this.left) this.left.depthFirstForEach(cb, type);
         if(this.left) this.right.depthFirstForEach(cb,type);
         cb(this.value);
      case 'pre-order':
         cb(this.value);
         if(this.left) this.left.depthFirstForEach(cb,type);
         if(this.right) this.right.depthFirstForEach(cb,type);  
      default:
         if(this.left) this.left.depthFirstForEach(cb,type);
         cb(this.value);
         if(this.right) this.right.depthFirstForEach(cb,type); 
    }

}

BinarySearchTree.prototype.breadthFirstForEach = function (callback, array = []){
   //ver con JORGE VEGA
   if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  callback(this.value); // console log 1
​
  if (array.length > 0) {
    // si hay elementos a recorrer, llamo a la recursividad
    let element = array.shift(); // arbol{2}
    element.breadthFirstForEach(callback, array); // arbol{2}.breadthFirstForEach(callback, [ arbol{3} ])
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
