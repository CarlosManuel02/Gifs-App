import { Component } from '@angular/core';
import {GifService} from "../services/gif.service";

@Component({
  selector: 'app-g-resultaaados',
  templateUrl: './g-resultaaados.component.html',
})
export class GResultaaadosComponent {

  get resultados(){
    return this.gifService.resultados;
  }

  constructor(public gifService: GifService) { }


}
