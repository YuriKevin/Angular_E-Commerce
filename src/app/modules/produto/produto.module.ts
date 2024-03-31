import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EspecificacoesComponent } from './especificacoes/especificacoes.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProdutoComponent,
    ListarComponent,
    EspecificacoesComponent,
    CarrinhoComponent,
    PesquisarComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProdutoComponent,
    ListarComponent,
    HomeComponent,
    EspecificacoesComponent,
    CarrinhoComponent,
    PesquisarComponent
  ]
})
export class ProdutoModule { }