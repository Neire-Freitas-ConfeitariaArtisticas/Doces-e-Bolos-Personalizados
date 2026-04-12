const lupa = document.querySelector(".icons-1");
const searchBox = document.querySelector(".search-box");
const input = document.getElementById("searchInput");

// abrir ao clicar na lupa
lupa.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    input.focus();
});

// ao apertar ENTER
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let valor = input.value.toLowerCase();

        if (valor.includes("bolo") || valor.includes("doce") || valor.includes("menu") || valor.includes("mesversario") || valor.includes("Mêsversario")) {
            document.getElementById("Menu").scrollIntoView({
                behavior: "smooth"
            });
        } else if (valor.includes("sobre") || valor.includes("nós") || valor.includes("sobrenos") || valor.includes("nos")) {
            document.getElementById("Sobre").scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});