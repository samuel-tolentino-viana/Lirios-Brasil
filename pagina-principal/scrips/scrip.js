const fotos = document.querySelectorAll('.fotos');
const botao = document.getElementById('barra-lateral');
const menu = document.getElementById("ativo");

function toggleZoom(event) {
    const image = event.currentTarget;
    const isZoomed = image.classList.contains('aumenta');
    if (isZoomed) {

        image.classList.remove('aumenta');
        document.body.classList.remove('zoomed');
    } else {
        fotos.forEach(photo => photo.classList.remove('aumenta'));
        image.classList.add('aumenta');
        document.body.classList.add('zoomed');
    }
}

fotos.forEach(photo => {
    photo.addEventListener('click', toggleZoom);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        fotos.forEach(photo => photo.classList.remove('aumenta'));
        document.body.classList.remove('zoomed');
    }
});

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

// PARTES DO SITE NÃO CRIADAS

const emDesenvolvimento = document.querySelectorAll('.desenvolvimento');

for(let percorre of emDesenvolvimento) { // PERCORRE TODOS OS ITENS DO ARRAY (EMDESENVOLVIMENTO)
    percorre.addEventListener('click', () => { //ADICIONA O EVENTO ENQUANTO PERCORRE
        alert('Ainda em desenvolvimento! Volte depois.'); //VOLTA O ALERT
    })
}