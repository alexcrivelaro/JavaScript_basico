function loopWhile() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    document.write("Laço while - a tabuada do "+campo1+"<br><br>");

    var x = 1;
    while(x <= 10) {
        document.write(campo1+" X "+x+" = "+campo1*x+"<br>");
        x++;
    }
}

function loopFor() {
    var campo1 = parseInt(document.getElementById("campo2").value);
    
    document.write("Laço for - a tabuada do "+campo1+"<br><br>");

    for(x = 1; x <= 10; x++)
        document.write(campo1+" X "+x+" = "+campo1*x+"<br>");
        x++;
}

