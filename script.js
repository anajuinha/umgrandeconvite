const nao = document.getElementById("nao");
const sim = document.getElementById("sim");

function fugir() {
  const largura = window.innerWidth - nao.offsetWidth;
  const altura = window.innerHeight - nao.offsetHeight;

  const x = Math.random() * largura;
  const y = Math.random() * altura;

  nao.style.position = "fixed";
  nao.style.left = x + "px";
  nao.style.top = y + "px";
}

nao.addEventListener("mouseenter", fugir);
nao.addEventListener("click", fugir);

// SIM só redireciona (NADA de mexer posição)
sim.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
