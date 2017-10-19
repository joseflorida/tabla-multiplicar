var i=0;
var numero = parseInt(prompt('La tabla de multiplicar del:'));
  document.write("<table border='0'><tr><td>Número</td><td>Resultado</td></tr>")
while((numero>100) || (numero<1)){
 alert("ERROR");
 var numero=prompt('La tabla de multiplicar del:');
}
if((numero<=100) || (numero<1)){
 for(i=0; i<=10; i++){
document.write("<tr><td>"  + numero+" x " + i + "</td><td>" + numero * i + "</td></tr>");
}
document.write("</table>");
}
