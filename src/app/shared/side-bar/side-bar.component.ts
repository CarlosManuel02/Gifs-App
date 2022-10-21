import {Component} from '@angular/core';
import {GifService} from "../../gifs/services/gif.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {


  constructor(public gifService: GifService) {
  }

  get historial(): string[] {
    return this.gifService.historial;
  }

  buscar(termino: string) {
    this.gifService.buscarGifs(termino);


  }
}
