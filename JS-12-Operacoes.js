function somar() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);

    var soma = campo1 + campo2;

    alert("A soma de "+" "+campo1+" + "+campo2+" = "+soma);
}

function multiplicar() {
    var campo3 = parseInt(document.getElementById("campo3").value);
    var campo4 = parseInt(document.getElementById("campo4").value);

    var multiplica = campo3 * campo4;

    alert("A multiplicação de "+" "+campo3+" * "+campo4+" = "+multiplica);
}

