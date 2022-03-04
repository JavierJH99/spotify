import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArtistaComponent } from './components/artista/artista.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent},
  { path: 'Busqueda', component: BusquedaComponent},
  { path: 'Artista/:id', component: ArtistaComponent},
  { path: '',   redirectTo: '/Inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
