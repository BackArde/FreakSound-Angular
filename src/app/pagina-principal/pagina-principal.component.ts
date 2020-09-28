import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Anime } from '../models/Anime.model';
import { AnimesComponent } from '../animes/animes.component';
import { AnimesService } from '../animes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  animes: Anime[];
  todos: Anime [];
  shonen: string;
  shojo: string;
  seinen: string;
  josei:string;

  constructor(
    private animesService: AnimesService,
    private router : Router,
    private usuarioService: UsuarioService
    )
     { }

  ngOnInit(): void {
    this.animesService.getAll()
      .then(arranimes => {
        this.animes = arranimes;
      }).catch(err => console.log(err));
  }

  async onChange($event) {
    if ($event.target.value){
      if ($event.target.value ==='todos') {
        this.router.navigate(["/pagina-principal/animes"])
      } else {
        this.router.navigate(["/pagina-principal/animes/" + $event.target.value])
      }
    }
  };

  async login($event) {
    if ($event.target.value){
      if ($event.target.value ==='btn') {
        this.router.navigate(["/register"])
      } else {
        this.router.navigate(["/register" + $event.target.value])
      }
    }
  };
}
