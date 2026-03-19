const nao = document.getElementById("nao");
const sim = document.getElementById("sim");

function fugir(e) {
    const largura = window.innerWidth - nao.offsetWidth;
    const altura = window.innerHeight - nao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    nao.style.position = "fixed";
    nao.style.left = x + "px";
    nao.style.top = y + "px";
}

// foge antes de clicar
nao.addEventListener("mouseenter", fugir);

// segurança extra
nao.addEventListener("click", fugir);

sim.addEventListener("click", () => {
    window.location.href = "video.html";
});
