let numero;
let resultado;

function ciclo(){
    numero=prompt("ingrese un número")
    resultado=numero
    for(let i=1;i<numero; i++){
        resultado=resultado*i
    }
    alert("el factorial de " +numero + " es " +resultado )
}