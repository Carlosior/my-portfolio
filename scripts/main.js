document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Efecto glitch mejorado
    const glitchText = document.querySelector(".glitch span");
    if (glitchText) {
        setInterval(() => {
            glitchText.classList.add("glitch-effect");
            setTimeout(() => {
                glitchText.classList.remove("glitch-effect");
            }, 200); // dura 200ms el efecto
        }, 1600); // cada 2 segundos
    }
});
