var n=0
while (n<=99) {
    n=(n+1)
    document.write(n + "<br/>")
    console.log(n);
    document.getElementById('resultado').value= n
}

document.write("<br/>" + "<h1>" +"Ciclo for"+ "</h1>" + "<br/>")
for (let i = 1; i <= 100; i++) {
    document.write(i + "<br/>") 
}

document.write("<br/>" + "<h1>" +"Ciclo Do while"+ "</h1>" + "<br/>")

var m=0
do {
    m=(m+1)
} while (m ==100 );
console.log("Fin")
document.write(m + "</br>")