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

