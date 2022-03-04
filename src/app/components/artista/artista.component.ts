import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArtistaService } from 'src/app/services/artista.service';
import { TopTracksService } from 'src/app/services/top-tracks.service';
import { Artista } from 'src/app/interfaces/artista';
import { Track } from 'src/app/interfaces/track';

@Component({
  selector: 'artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
  artista!:Artista;
  tracks!:Track[];

  constructor(private route: ActivatedRoute,
    private artistaService: ArtistaService,
    private topTracks: TopTracksService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];

      this.artistaService.getArtistDetails(id).subscribe({
          next: resp => { 
            this.artista = resp; 
          },
          error: error => { console.log(error) }
      });

      this.topTracks.getTracks(id).subscribe({
        next: resp => { 
          this.tracks = resp.tracks; 
        },
        error: error => { console.log(error) }
      });
    });
    
    
  }

  volver(){
    this.router.navigate(['Inicio']);
  }

}
