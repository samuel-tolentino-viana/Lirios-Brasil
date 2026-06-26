const fotos = document.querySelectorAll('.fotos');

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