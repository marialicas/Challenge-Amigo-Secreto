let listaAmigos = [];
let botao = document.querySelector(".button-draw");
botao.style.backgroundColor = "#444444";

function enter(evento) {
  if (evento.keyCode == 13) {
    adicionarAmigo();
    limparInput();
  }
}

function adicionarAmigo() {
  let amigo = document.querySelector("input").value;
  let resultado = document.querySelector("#resultado");
  if (amigo == "") {
    alert("O campo está vazio");
  } else {
    botao.style.backgroundColor = "#fe652b";
    botao.toggleAttribute("disabled", false);
    listaAmigos.push(amigo);
    listarAmigos(amigo);
    resultado.innerHTML = " ";
  }
}

function listarAmigos(amigo) {
  let elementoPai = document.querySelector("#listaAmigos");
  let elementoFilho = document.createElement("li");

  elementoFilho.innerHTML = amigo;
  elementoPai.appendChild(elementoFilho);
}

function sortearAmigo() {
  let qtdeAmigos = listaAmigos.length;
  let amigoSorteado = parseInt(Math.random() * qtdeAmigos);
  let resultado = document.querySelector("#resultado");

  resultado.innerHTML = `O seu amigo secreto é: ${listaAmigos[amigoSorteado]}!!`;

  document.querySelectorAll("ul#listaAmigos li").forEach((elemento) => {
    elemento.remove();
  });

  botao.toggleAttribute("disabled");
  botao.style.backgroundColor = "#444444";
  listaAmigos = [];
}

function limparInput() {
  let input = document.querySelector("#amigo");
  input.value = "";
}
