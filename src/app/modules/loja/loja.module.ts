import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaRoutingModule } from './loja-routing.module';
import { LojaComponent } from './loja/loja.component';
import { ListarLojasComponent } from './listar-lojas/listar-lojas.component';
import { CadastrarLojaComponent } from './cadastrar-loja/cadastrar-loja.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProdutoModule } from '../produto/produto.module';
import { ProdutosLojaComponent } from './produtos-loja/produtos-loja.component';

@NgModule({
  declarations: [
    LojaComponent,
    ListarLojasComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent,
    PerfilComponent,
    ProdutosLojaComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    LojaComponent,
    ListarLojasComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent,
    PerfilComponent,
    ProdutosLojaComponent
  ]
})
export class LojaModule { }
