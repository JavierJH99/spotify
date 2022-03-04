import { Pipe, PipeTransform } from '@angular/core';
import { Images } from '../interfaces/images';

@Pipe({
  name: 'noImage'
})

export class NoImagePipe implements PipeTransform {

  transform(value: Images[]): string{
    if(value.length == 0){
      //Si no existen imágenes del Album, artista, track... se devuelve la imagen noimage.png
      return 'assets/img/noimage.png';
    }
    else{
      return value[0].url;
    }
    
    //Con los pipes no carga las imagenes aleatorias correctamente
    // else{
    //   //Si existen imagenes del Album, artista, track... se elige una aleatoria
    //   return value[ Math.floor(Math.random() * value.length) ].url;
    // }
  }

}
