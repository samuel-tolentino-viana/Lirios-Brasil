const botao = document.getElementById('barra-lateral');
const menu = document.getElementById("ativo");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});