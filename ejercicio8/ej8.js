let usuario;
let contraseña;

function ciclo(){
    usuario=prompt("ingrese su número de usuario")
    contraseña=prompt("ingrese la contraseña")
    while(usuario!=1 || contraseña!=1234){
        usuario=prompt("ingrese su número de usuario")
        contraseña=prompt("ingrese la contraseña") 
    }
}