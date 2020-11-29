let i;
let suma;
suma=0;
i=1;


for(let i =1;i<=5;i++){
    suma +=i
}document.write("<h1>"+ "ciclo for " + "</h1>")
document.write("la suma de los 5 primeros números naturales es "  +suma)


document.write("<h1>"+ "ciclo while " + "</h1>")

    i=1;
    suma=0;
    
    while(i<=5){
        suma=suma+i;
        i++;
    }
    
    document.write("la suma de los 5 primeros números naturales es "  +suma)
