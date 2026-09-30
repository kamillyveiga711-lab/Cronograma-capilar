document.addEventListener("DOMContentLoaded", () => {
    const btnCronograma = document.getElementById("btnCronograma");
    const tabelaCronograma = document.getElementById("tabelaCronograma");

    if (btnCronograma && tabelaCronograma) {
        btnCronograma.addEventListener("click", () => {
            tabelaCronograma.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });

            tabelaCronograma.style.transform = "scale(1.01)";
            tabelaCronograma.style.transition = "transform 0.3s ease";
            
            setTimeout(() => {
                tabelaCronograma.style.transform = "scale(1)";
            }, 300);
        });
    }

    const infoBox = document.getElementById("infoBox");
    const infoTitle = document.getElementById("infoTitle");
    const infoText = document.getElementById("infoText");
    const categoryButtons = document.querySelectorAll(".btn-category");

    const hairInfoData = {
        cacheado: {
            title: "Cabelo Cacheado (Curvatura 3A, 3B e 3C)",
            text: "O cabelo cacheado forma cachos definidos em 'mola' ou 'S' desde a raiz ou comprimento. Costuma ser mais seco nas pontas porque a oleosidade natural tem dificuldade em percorrer todo o espiral. Beneficia-se muito de hidratação e nutrição frequentes."
        },
        liso: {
            title: "Cabelo Liso (Curvatura 1A, 1B e 1C)",
            text: "O cabelo liso não apresenta curvatura, sendo escorrido da raiz às pontas. A oleosidade natural desliza facilmente, o que traz brilho, mas pode exigir atenção para não pesar. Necessita de cuidados leves e equilibrados."
        },
        ondulado: {
            title: "Cabelo Ondulado (Curvatura 2A, 2B e 2C)",
            text: "O cabelo ondulado fica entre o liso e o cacheado, formando ondas suaves em 'S'. É mais liso na raiz e ganha ondulações no comprimento. Tem tendência a frizz e exige finalizações leves com cremes texturizadores."
        }
    };

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            const data = hairInfoData[category];

            if (data) {
                infoTitle.textContent = data.title;
                infoText.textContent = data.text;
                infoBox.classList.remove("hidden");
                infoBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    });
});