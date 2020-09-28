import { Injectable } from '@angular/core';
import { Anime } from './models/Anime.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  animes: Anime[];
  constructor() {
    this.animes = [];
  }

  agregarAnime(pAnime: Anime) {
    this.animes.push(pAnime);
  }

  getAllAnimes(): Promise<Anime[]> {
    return new Promise((resolve, reject) => {
      resolve(this.animes);
    })
  }

  getCategoriasByAnime(pCategoria: string): Promise<Anime[]> {
    return new Promise((resolve, reject) => {
      let categoriasFiltrados = this.animes.filter(categoria => {
        return categoria.categoria === pCategoria
      })
      resolve(categoriasFiltrados);
    })
  }
}

