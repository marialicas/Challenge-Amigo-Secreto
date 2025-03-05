let listaAmigos = [];

function adicionarAmigo() {
  let amigo = document.querySelector("input").value;
  if (amigo == "") {
    alert("O campo está vazio");
  } else {
    listaAmigos.push(amigo);
    listarAmigos(amigo);
  }
}

function listarAmigos(amigo) {
  let elementoPai = document.querySelector("#listaAmigos");
  let elementoFilho = document.createElement("li");

  elementoFilho.innerHTML = amigo;
  elementoPai.appendChild(elementoFilho);
}
