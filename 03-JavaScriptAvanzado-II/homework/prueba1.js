function counter() {
    let counter = 1;
    return function(){
      return counter ++
    }
  }
  
  const nuevoContador = counter()
  nuevoContador()
  console.log(nuevoContador())
  

