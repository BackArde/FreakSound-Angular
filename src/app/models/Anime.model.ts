export class Anime {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    categoria: string;
    url: string;

    constructor(
        pTitulo: string,
        pTexto: string,
        pAutor: string,
        pImagen: string,
        pCategoria: string,
        pUrl:string)
         {
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.categoria = pCategoria;
        this.url = pUrl;
    }
}