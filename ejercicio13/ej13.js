let notas;
let notaAlta;
let notaBaja;
let promedio;
let suma;
function ciclo(){
notaAlta=0
notaBaja=5
suma=0
for(let i=1;i<=20;i++){
    notas=Number(prompt("ingrese notas de los alumnos"))
    if (notas>notaAlta){
        notaAlta=notas
    }
    else if(notas<notaBaja){
        notaBaja=notas
    }
   
    suma=suma+notas
    promedio=suma/i
}
document.write("la mejor nota es " + notaAlta+ "<br>")
document.write("la nota más baja es " + notaBaja+ "<br>")
document.write("el promedio es " + promedio+ "<br>")
}