let listaAmigos = [];

function adicionarAmigo() {
  let amigo = document.querySelector("input").value;
  if (amigo == "") {
    alert("O campo está vazio");
  } else {
    listaAmigos.push(amigo);
  }
}
