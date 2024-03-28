import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LojaRoutingModule } from './loja-routing.module';
import { LojaComponent } from './loja/loja.component';
import { ListarLojasComponent } from './listar-lojas/listar-lojas.component';


@NgModule({
  declarations: [
    LojaComponent,
    ListarLojasComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule
  ],
  exports: [
    LojaComponent,
    ListarLojasComponent
  ]
})
export class LojaModule { }
