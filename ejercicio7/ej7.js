let nombre1;
let nombre2;
let nombre3;
let edad1;
let edad2;
let edad3;
i = 0
function ciclo() {
    nombre1 = prompt("ingrese el primer nombre");

    nombre2 = prompt("ingrese el segundo nombre");

    nombre3 = prompt("ingrese el tercer nombre");
    while (i < 1) {
        edad1 = prompt("ingrese la edad de " + nombre1)
        edad2 = prompt("ingrese la edad de " + nombre2)
        edad2 = prompt("ingrese la edad  " + nombre3)
        if (edad1 < 18) {
            document.write("se ha encontrado un menor de edad, y su nombre es " + nombre1)
            break
        }

        else if (edad2 < 18) {
            document.write("se ha encontrado un menor de edad, y su nombre es " + nombre2)
            break
        }
        else if (edad3 < 18) {
            document.write("se ha encontrado un menor de edad, y su nombre es " + nombre3)
        }
        else {

            document.write("no hay menores de edad")
            break
        }
    }


}
