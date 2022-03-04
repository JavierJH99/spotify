import { Component } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { Artista } from 'src/app/interfaces/artista';
import { Router } from '@angular/router';

@Component({
  selector: 'busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})

export class BusquedaComponent{
  nombreArtista!:string;
  artistas!:Artista[];

  constructor(private busquedaService: BusquedaService, private router: Router) { }

  buscarArtista(nombre:string){
    if(nombre != ''){
      this.busquedaService.getSearch(nombre).subscribe({
        next: resp => { 
          this.artistas = resp.artists.items;
          console.log(this.artistas);
          console.log(this.artistas[2].images[0].url); 
        },
        error: error => { console.log(error) }
      });
    }
    else{
      this.artistas = [];
    }
  }

  getArtista(id:string){
    this.router.navigate(["Artista", id]);
  }
}
