"use strict"
let i;
let notas;
let promedio = 0;
i=1
function ciclofor(){
for(let i=1; i<=7; i++){
    notas=Number(prompt("ingrese notas"))
    promedio += notas;
}
alert( "el promedio es " + promedio/7)
}

function ciclowhile(){
    while(i<=7){
notas=Number(prompt("ingrese notas"))
promedio +=notas;
i++
    }
    alert( "el promedio es " + promedio/7)
}