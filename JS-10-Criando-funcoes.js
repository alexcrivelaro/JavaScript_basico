function trocarDiv() {
    var area = document.getElementById("area");
    var texto = prompt("Digite o seu nome!"); 

    area.innerHTML = texto;
}

function colocaSobreNome(nome) {
    var area2 = document.getElementById("sobreNome");
    var texto2 = prompt("Digite o seu sobrenome!"); 

    area2.innerHTML = nome+" "+texto2;
}

function colocaIdade(nome, idade) {
    var area3 = document.getElementById("sobreIdade");
    var texto3 = prompt("Digite seu sobrenome!"); 

    area3.innerHTML = nome+" "+texto3+" tem "+idade+" anos";
}
