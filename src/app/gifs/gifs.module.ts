import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GBusquedaComponent } from './g-busqueda/g-busqueda.component';
import { GResultaaadosComponent } from './g-resultaaados/g-resultaaados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GBusquedaComponent,
    GResultaaadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
