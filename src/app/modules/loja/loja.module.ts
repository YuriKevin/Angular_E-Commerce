import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaRoutingModule } from './loja-routing.module';
import { LojaComponent } from './loja/loja.component';
import { ListarLojasComponent } from './listar-lojas/listar-lojas.component';
import { CadastrarLojaComponent } from './cadastrar-loja/cadastrar-loja.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';

@NgModule({
  declarations: [
    LojaComponent,
    ListarLojasComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule
  ],
  exports: [
    LojaComponent,
    ListarLojasComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent
  ]
})
export class LojaModule { }
