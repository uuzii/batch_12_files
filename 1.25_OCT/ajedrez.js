var linea1 = "#  #  #  #  #  #  #  #";
var linea2 = "  #  #  #  #  #  #  # ";
var contador = 0;

for (i = 1; i < 9; i++){
  contador = i % 2;
  if (contador == 1){
    console.log(linea1);
  }
  else {
    console.log(linea2);
  }
}
