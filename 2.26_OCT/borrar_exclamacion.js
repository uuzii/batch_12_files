var cadena = "hello!!!! world!!!!!";
var separador = "";
var arreglo = cadena.split(separador);
var aux = 0;
var i = 0;

len = arreglo.length;

for (i = 0; i < len; i++){
  arreglo[i] = arreglo[i].replace("!", "");
}

arreglo = arreglo.toString();

aux = arreglo.search(",") + 1;
arreglo = arreglo.replace("," , "")

console.log(aux);
console.log(arreglo);
