const fotos = document.querySelectorAll('.fotos');

function crecer(evento) {
    evento.target.classList.toggle('aumenta');
}

for (let n = 0; n < fotos.length; n++) {
    fotos[n].addEventListener('click', crecer);
}