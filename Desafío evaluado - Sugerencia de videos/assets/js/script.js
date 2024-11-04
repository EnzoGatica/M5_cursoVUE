// Patrón Módulo utilizando IIFE
const videoModule = (() => {
    const mostrarVideo = (url, id) => {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        }
    };

    return {
        insertarVideo: (url, id) => {
            mostrarVideo(url, id);
        }
    };
})();

class Multimedia {
    constructor(url) {
        this.#url = url; 

        this.getUrl = () => this.#url;

        this.setInicio = () => "Este método es para realizar un cambio en la URL del video";
    }
    #url; 
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.#id = id; 

        this.playMultimedia = () => {
            videoModule.insertarVideo(this.getUrl(), this.#id);
        };

        this.setInicio = (tiempo) => {
            const nuevaUrl = `${this.getUrl()}&start=${tiempo}`; 
            videoModule.insertarVideo(nuevaUrl, this.#id);
        };
    }

    #id; 
}

const sugerenciaMusica = new Reproductor("https://www.youtube.com/embed/o2W3jfvZU4w?si=SXshzXeZeaFbbhjM", "musica");
const sugerenciaPeliculas = new Reproductor("https://www.youtube.com/embed/5nWH2Pd-x-c?si=b9P9_JvUbz5lMVGo", "peliculas");
const sugerenciaSeries = new Reproductor("https://www.youtube.com/embed/IJ_AZCvCacw?si=ckLhI6yGZ6DdSHbt", "series");

sugerenciaMusica.playMultimedia();
sugerenciaPeliculas.playMultimedia();
sugerenciaSeries.playMultimedia();

sugerenciaMusica.setInicio(60); 
sugerenciaPeliculas.setInicio(32); 
sugerenciaSeries.setInicio(20); 
