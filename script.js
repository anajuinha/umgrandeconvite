const nao = document.getElementById("nao");
const sim = document.getElementById("sim");
var isAnimating = false;

nao.addEventListener("mouseover", animateNao);
nao.addEventListener("click", animateNao);

function animateNao(){
    if (!isAnimating) {
        isAnimating = true;
        
        // Movimento aleatório em X e Y (-200px a 200px)
        const moveX = Math.floor(Math.random() * 401) - 200;
        const moveY = Math.floor(Math.random() * 401) - 200;
        
        nao.style.transform = `translate(${moveX}px, ${moveY}px)`;
        nao.style.transition = "all 0.3s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 300);
    }
}

sim.addEventListener("click", function(){
    window.open('video.html', '_blank');
});