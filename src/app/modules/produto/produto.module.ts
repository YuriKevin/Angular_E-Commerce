import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EspecificacoesComponent } from './especificacoes/especificacoes.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProdutoComponent,
    ListarComponent,
    EspecificacoesComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule
  ],
  exports: [
    ProdutoComponent,
    ListarComponent,
    HomeComponent,
    EspecificacoesComponent
  ]
})
export class ProdutoModule { }
