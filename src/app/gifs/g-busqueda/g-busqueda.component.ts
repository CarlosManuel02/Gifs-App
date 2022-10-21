import {Component, ElementRef, ViewChild} from '@angular/core';

import {GifService} from "../services/gif.service";

@Component({
  selector: 'app-g-busqueda',
  templateUrl: './g-busqueda.component.html',
})
export class GBusquedaComponent {

  constructor(public GifService: GifService) {
  }

  @ViewChild('buscarGif') buscarGif!:ElementRef<HTMLInputElement>;

  buscar(gif: string) {
    // console.log(gif )
    // const valor = this.buscarGif.nativeElement.value;
    // console.log(valor);
    // this.buscarGif.nativeElement.value = '';
    this.GifService.buscarGifs(gif)
  }


}
