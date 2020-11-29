 "use strict"
 let pregunta;
 let notas;
let promedio;
let cantidad;
let suma;
function ciclo(){
    suma=0
    cantidad=0
  do{
    notas=Number(prompt("ingrese las notas"))
    cantidad++
    suma= suma + notas;
    promedio= suma/cantidad
    alert("el promedio es " + promedio)
    pregunta=prompt("¿ desea ingresar más notas? S/N")
  }
  while(pregunta!="N" && pregunta!="n")
}

