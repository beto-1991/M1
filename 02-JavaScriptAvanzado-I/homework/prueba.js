x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 2.la consola muestra 10, que es el valor de x en este scope
   console.log(a); // 3.la consola muestra 8 que es el valor de a como parametro en este scope
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 4.la consola muestra 8 porque se modifica el valor de a en este scope
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 5.la consola muestra 9 ya que en este contexto, b es un parametro de la funcion.
};
c(8, 9, 10); // 1.primero se ejecuta esto
console.log(b); // 6. la consola muestra 10 porque es el valor de b en el contexto global
console.log(x); // 7. la consola muestra 1 y undefined, porque es una expression en este contexto, pero no esta declarado

/////////////////////////////

console.log(bar); // 1. muestra undefined porque sabe que es una variable pero todavia no esta definida
console.log(baz);// 2. error porque el hoisting no la identifica y no sube la expresion baz
foo(); // 3. no se ejecuta por error en el codigo
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;


///////////////////////////////////

var instructor = 'Tony';

if (true) {
   var instructor = 'Franco';
}
console.log(instructor); ///// franco

/////////////////////////////////////

var instructor = 'Tony';
console.log(instructor); ////// tony
(function () {
   if (true) {
      var instructor = 'Franco'; /// si le saco el var, y la modifico sin re declarar se afecta el ultimo console.log
      console.log(instructor); /////  franco
   }
})();
console.log(instructor); /// tony


/////////////////////////////////////

var instructor = 'Tony';
let pm = 'Franco';
if (true) { // los controladores de flujo NO tienen su propio contexto de ejecucion, como si las funciones
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm); // imprime franco porque let solo tiene SCOPE de bloque

/////////////////////////////////////

6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN (es un numero, no se rompe el codigo)
7 / 0 // Inifinity (tambien es un numero)
{}[0] // [0] (navegador) - undefined en console VISUAL
parseInt("09") // 9
5 && 2 // 2 evalua el primero, es true, tiene que evaluar el segundo porque ambos tiene que se tru
2 && 5 // 5 lo devuelve
5 || 0 // 5 evalua el primero, es true entonces lo devuelve
0 || 5 // 5 evalua el primero, es false, entonces evalua el segundo y lo devulve al ser true
[3]+[3]-[10] // al estar adentro de un array, los concatena con el + y resuelve operacion con el -
             // te da 23 (string 33 - 10 = number 23)
3>2>1 // false (3>2 + true. true > 1 false, porque true == 1)
[] == ![] /// true [] es un string vacio, que es 0, y 0 == 

////////////////////


function test() {
   console.log(a); // 1. Busca la variable a en el contexto. Encuentra que hay una pero todavia no esta definida. por hoisting
                   //imprime undefined              
   console.log(foo()); // 2. imprime 2 en la consola segun devuelve la funcion foo()

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

/////////////////////////

var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack; // undefined, porque subio el var del IF por si daba true
}

getFood(false);

/////////////////////////

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // USADOC OMO METODO DEVUELVE LA PROPIEDAD DEL CONTEXTO

var test = obj.prop.getFullname; // ACA SE ALMACENA LA FUNCION EN UNA VARIABLE QUE TOMA EL CONTEXTO GLOBAL

console.log(test());


/////////////////////////////

function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();


////////////////////////////

