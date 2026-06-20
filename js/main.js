const canciones = [
    {
        title: "Viento",
        indice: 0,
        archivo: "Assets/viento.mp3",
        inicio: 93,
        duracion: 16
  },
    
  {
        title: "Heavenly",
        indice: 1,
        archivo: "Assets/heve.mp3",
        inicio: 55,
        duracion: 27
  },
  {
    title: "Los imanes",
    indice: 2,
    archivo: "Assets/odi.mp3",
    inicio: 102,
    duracion: 18
  },
  {
    title: "Follow me",
    indice: 3,
    archivo: "Assets/follow.mp3",
    inicio: 83,
    duracion: 25
  },
  {
    title: "Life eternal",
    indice: 4,
    archivo: "Assets/life.mp3",
    inicio: 54,
    duracion: 26
  },

  {
    title: "Mariposas",
    indice: 5,
    archivo: "Assets/mariposas.mp3",
    inicio: 74,
    duracion: 27
  },
  {
    title: "Just the way you are",
    indice: 6,
    archivo: "Assets/just.mp3",
    inicio: 52,
    duracion: 17
  }
];

let stopTimer;
const carousel = document.getElementById("carouselExample");
carousel.addEventListener("slid.bs.carousel", function(event) {

    const indice = event.to;
    const cancion = canciones[indice];

    clearTimeout(stopTimer);

    audio.pause();

    // Cambiar archivo
    audio.src = cancion.archivo;
    audio.load();

    // Esperar a que cargue
    audio.addEventListener("loadedmetadata", () => {

        audio.currentTime = cancion.inicio;

        audio.play();

        stopTimer = setTimeout(() => {
            audio.pause();
        }, cancion.duracion * 1000);

    }, { once: true });

});

const audio = document.getElementById("audio");
audio.src = canciones[0].archivo;
audio.addEventListener("loadedmetadata", () => {
    audio.currentTime = canciones[0].inicio;
    audio.play();

    stopTimer = setTimeout(() => {
        audio.pause();
    }, canciones[0].duracion * 1000);
}, { once: true });