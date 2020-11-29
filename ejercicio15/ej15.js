let num;
let suma;
let i;
suma=0
i=1
function ciclo(){
do{
  num=Number(prompt("ingrese número" ))
  if(num<0){
    suma=suma+num
    document.write( num + ",")}
  i++
  }
  while(i<=10)
  document.write("<br>"+"la suma de los números negativos es " + suma)
  }