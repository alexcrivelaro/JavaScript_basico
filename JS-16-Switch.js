function qualNumero() {
    var x = parseInt(document.getElementById("campo1").value);
    
    switch(x) {
        case 0:
            alert("O número é o 0");
            break;
        case 1:
            alert("O número é o 1");
            break;
        case 2:
            alert("O número vai ser 2");
            break;
        default:
            alert("Ninguém foi satisfeito");
            break;
    }       

}


