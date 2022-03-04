import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import { SpotiService } from 'src/app/services/spoti-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  albums: Album[] = [];
  cargado: boolean;
  
  constructor(private spotiService: SpotiService, private router: Router) {
    this.cargado = false;
   }

  ngOnInit() {
    this.showNewReleases();
  }

  showNewReleases(){
    this.cargado = false;
    
    this.spotiService.getNewReleases().subscribe({ 
      next: resp => { this.albums = resp.albums.items },
      error: error => { console.log(error) },
      complete: () => { this.cargado = true }
    });
  }

  artista(id:string){
    this.router.navigate(["Artista", id]);
  }
}
