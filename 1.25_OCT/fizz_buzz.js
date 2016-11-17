//Si es multiplo de 3, imprime fizz y si es multiplo de 5 imprime buzz
var aux = "";
var cadena_numerica = "";

for (var i = 1; i < 16; i++) {
  if ((i % 3) == 0 && (i%5) == 0){
    aux = "fizzbuzz"
  }
  else if ((i % 3) == 0){
    aux = "fizz";
  }
  else if ((i%5) == 0) {
    aux = "buzz";
  }
  else {
    aux = i;
  }
  cadena_numerica = cadena_numerica + " " + aux;
}

console.log(cadena_numerica);
