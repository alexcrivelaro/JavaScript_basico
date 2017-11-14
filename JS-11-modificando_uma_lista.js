function adicionarIngrediente() {
    var ingred = document.getElementById("ingrediente").value; 
    
    var listaHTML = document.getElementById("lista").innerHTML; // = pega o conteúdo do elemento atual

    listaHTML = listaHTML + "<li>"+ingred+"</li>"; // = adiciona mais conteúdo atual

    document.getElementById("lista").innerHTML = listaHTML; // = substitui por essa nova lista
    
}

//value = pego o valor digitado pelo usuário

/* linha 4 - document.getElementById("lista").innerHTML 
             = pega o conteúdo do elemento atual

   linha 6 - listaHTML + "<li>"+ingred+"</li>";         
            = adiciona mais conteúdo atual

   linha 8 - document.getElementById("lista").innerHTML
            = substitui por essa nova lista
*/