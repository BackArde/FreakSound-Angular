import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { Anime } from 'src/app/models/Anime.model';
import { Router, ActivatedRoute } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';
 
@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  animes: Anime[];
  enlazar: URL;

  constructor(
    private animesService : AnimesService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe((params) => {
      if ( params.categoria) {
        this.animesService.getByCategoria(params.categoria)
        .then(response => {
          this.animes = response;
        })
        .catch(error => console.log(error));
      }else {
        this.animesService.getAll()
      .then(response => {
        this.animes = response;
      })
      .catch(error => console.log(error));
      }
      
    })

    
    }

    async onChange($event) {
      if ($event.target.value){
        if ($event.target.value ==='todos') {
          this.router.navigate(["/pagina-principal/animes"])
        } else {
          this.router.navigate(["/pagina-principal/animes/" + $event.target.value])
        }
      }
    }
  
  

}

