let ahorro;

ahorro=1
for(let i=1;i<=365;i++){
    ahorro=(ahorro*3)
    document.write("el dia "+ i + " el ahorro fue de " + ahorro + "<br>")
}
alert ("el ahorro total es " +ahorro)