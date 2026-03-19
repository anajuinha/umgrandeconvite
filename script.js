const nao = document.getElementById("nao");
const sim = document.getElementById("sim");

let isAnimating = false;

function fugir() {
    if (isAnimating) return;

    isAnimating = true;

    const largura = window.innerWidth - nao.offsetWidth;
    const altura = window.innerHeight - nao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    nao.style.position = "fixed";
    nao.style.left = x + "px";
    nao.style.top = y + "px";
    nao.style.transition = "all 0.2s ease";

    setTimeout(() => {
        isAnimating = false;
    }, 200);
}

// eventos mais precisos
nao.addEventListener("mouseenter", fugir);
nao.addEventListener("click", fugir);

// botão SIM
sim.addEventListener("click", function () {
    window.open('video.html', '_blank');
});
