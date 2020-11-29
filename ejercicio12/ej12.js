let num;
let suma;
let cantidad;
let promedio;
function ciclo(){
    suma=0
    cantidad=0
    num=Number(prompt("ingrese un número natural"))
    while(num!=-1){
    suma=Number (suma)+Number(num);
    cantidad++
    num=prompt("ingrese un número natural")
    }
   promedio=suma/cantidad
    alert("la cantidad de números digitados es " + cantidad)
    alert("la suma de los números es " + suma)
    alert("el promedio es " + promedio)
}