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

        if (valor.includes("bolo") || valor.includes("doce") || valor.includes("menu") || valor.includes("mesversario")) {
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

//  FUNÇÃO PRA ESCONDER TUDO
function esconderTudo() {
    document.getElementById("site").style.display = "none";
    document.getElementById("pagina-doces").style.display = "none";
    document.getElementById("pagina-3").style.display = "none";
    
    // se tiver tela 4 no HTML
    const tela4 = document.getElementById("pagina-4");
    if (tela4) tela4.style.display = "none";
}

//  IR PRA DOCES
function trocarPagina() {
    esconderTudo();
    document.getElementById("pagina-doces").style.display = "block";
    window.scrollTo(0, 0);
}

//  VOLTAR PRA HOME
function voltarSite() {
    esconderTudo();
    document.getElementById("site").style.display = "block";
    window.scrollTo(0, 0);
}

//  IR PRA TELA 3
function irParaTela3() {
    esconderTudo();
    document.getElementById("pagina-3").style.display = "block";
    window.scrollTo(0, 0);
}

//  VOLTAR DA TELA 3 (pra home)
function voltarTela3() {
    esconderTudo();
    document.getElementById("site").style.display = "block";
    window.scrollTo(0, 0);
}

//  IR PRA TELA 4
function irParaTela4() {
    esconderTudo();
    const tela4 = document.getElementById("pagina-4");
    if (tela4) {
        tela4.style.display = "block";
        window.scrollTo(0, 0);
    }
}

//  VOLTAR DA TELA 4
function voltarTela4() {
    esconderTudo();
    document.getElementById("site").style.display = "block";
    window.scrollTo(0, 0);
}
