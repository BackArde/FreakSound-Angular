import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RegisterComponent } from './register/register.component';
import { AnimesComponent } from './animes/animes.component';


const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo: '/pagina-principal',
  },
  {
    path:'pagina-principal', component: PaginaPrincipalComponent
      
  },
  {
    path:'pagina-principal/animes', component: AnimesComponent
    
  },
  {
    path:'pagina-principal/animes/:categoria', component: AnimesComponent
  },
  {
    path: 'register', component: RegisterComponent, pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/pagina-principal'
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
