window.addEventListener('load', function() {
    console.log('el contenido ha cargado!');

    var imagenes = [];

    imagenes[0] = '../IMGS/guitarrista_three.jpg';
    imagenes[1] = '../IMGS/guitarrista.jpg';
    imagenes[2] = '../IMGS/guitarrista_four.jpg';

    var indiceImagenes = 0;
    var tiempo = 7000;

    function cambiarImagenes() {
        document.slider.src = imagenes[indiceImagenes];

        if (indiceImagenes < 2) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, tiempo)
});