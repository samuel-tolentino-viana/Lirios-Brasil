const fotos = document.querySelectorAll('.fotos');

function crecer(evento) {
    evento.target.classList.add('aumenta');
}

function diminuir(evento) {
    evento.target.classList.remove('aumenta');
}

for (let n = 0; n < fotos.length; n++) {
    fotos[n].addEventListener('click', crecer);
    fotos[n].addEventListener('mouseout', diminuir)
}