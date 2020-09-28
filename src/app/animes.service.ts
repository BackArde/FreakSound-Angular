import { Injectable } from '@angular/core';
import { Anime } from './models/Anime.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://localhost:3000/api/animes'
  }


//   getAll(pPage = 1) {
//     return this.httpClient.get(`${this.baseUrl}?page=${pPage}`).toPromise();
//   }
// }
  getAll():Promise<Anime[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    return this.httpClient.get<Anime[]>(this.baseUrl, httpOptions).toPromise();
  }

  getByCategoria(pCategoria): Promise<Anime[]> {
    return this.httpClient.get<Anime[]>(this.baseUrl + "/categoria/" + pCategoria).toPromise();

  }
   

}
