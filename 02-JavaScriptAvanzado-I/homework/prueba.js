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
   console.log(b); // 5.la consola muestra 9 ya que en este scope, b es un parametro de la funcion.
};
c(8, 9, 10); // 1.primero se ejecuta esto
console.log(b); // 6. la consola muestra 10 porque es el valor de b en el contexto global
console.log(x); // 7. la consola muestra 1 y undefined, porque es una expression en este contexto, pero no esta declarado

/////////////////////////////

console.log(bar); // 1. muestra undefined porque sabe que es una variable pero todavia no esta definida
console.log(baz); // 2. error porque para mostrar la expression tiene que llamarse despues
foo(); // 3. no se ejecuta por error en el codigo
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;

///////////////////////////////////

var instructor = 'Tony';
console.log(instructor);
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); ///????????????????????????????

/////////////////////////////////////

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);

/////////////////////////////////////

6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Inifinity
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10]
3>2>1
[] == ![]

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
   return snack;
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

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

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

