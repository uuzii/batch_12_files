var palabra = "Anita lava la tina";
var palabra2 = "anitalavalatina"
var minusculas = "";
var nospace = "";

minusculas = palabra.toLowerCase();
nospace = minusculas.replace(" ", "");
nospace = nospace.replace(" ", "");
nospace = nospace.replace(" ", "");

console.log(nospace);

if (nospace == palabra2) {
  console.log(true);
}

else {
  console.log(false);
}
