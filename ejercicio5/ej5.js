let num;
let cont;
let acum;

cont=1
function ciclofor(){
    for(cont=1;cont<=10;cont++){
        num=prompt("ingrese un múmero")
        if(num>0){
            document.getElementById("positivos").value+=num+(",")
        }
        else if(num<0){
        document.getElementById("negativos").value+=num+(",")}
        else if(num==0){
            document.getElementById("ceros").value+=num+(",")
        }
}}

function ciclowhile(){
    while(cont<=10){
        num=prompt("ingrese un número")
        if(num>0){
            document.getElementById("positivos").value+=num+(",")
        }
        else if(num<0){
        document.getElementById("negativos").value+=num+(",")}
        else if(num==0){
            document.getElementById("ceros").value+=num+(",")
        }
        cont++
    }
}