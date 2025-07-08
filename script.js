function gerarNumeroDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function criarDado(valor) {
  const dado = document.createElement("div");
  dado.classList.add("dado");
  dado.textContent = valor;
  return dado;
}

async function lancarIndividualmente(qtd) {
  const container = document.getElementById("resultado");
  container.innerHTML = "";
  for (let i = 0; i < qtd; i++) {
    const valor = gerarNumeroDado();
    const dado = criarDado(valor);
    container.appendChild(dado);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

function lancarSimultaneamente(qtd) {
  const container = document.getElementById("resultado");
  container.innerHTML = "";
  for (let i = 0; i < qtd; i++) {
    const valor = gerarNumeroDado();
    const dado = criarDado(valor);
    container.appendChild(dado);
  }
}

document.getElementById("lancarBtn").addEventListener("click", () => {
  const qtd = parseInt(document.getElementById("quantidade").value);
  const modo = document.getElementById("modo").value;

  if (modo === "simultaneo") {
    lancarSimultaneamente(qtd);
  } else {
    lancarIndividualmente(qtd);
  }
});
