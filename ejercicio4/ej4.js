let i;
let numero;
i=1

function ciclofor(){
    for(i=1;i<=10;i++){
        numero=prompt("ingresa un número")
        if(numero>0){
            document.write(numero + "</br>")}
            else{
                alert("el número es negativo")
            }
        }
    }

    function ciclowhile(){
        while(i<=10){
            numero=prompt("ingresa un número")
            if(numero>0){
                document.write(numero + "</br>")
            }
            else{alert("el número es negativo")}
            i++
        }
    }