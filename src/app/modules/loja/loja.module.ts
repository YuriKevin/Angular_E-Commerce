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
import { ProdutosLojaComponent } from './produtos-loja/produtos-loja.component';
import { AdicionarCategoriaComponent } from './adicionar-categoria/adicionar-categoria.component';
import { VendasComponent } from './vendas/vendas.component';
import { LoginLojaComponent } from './login-loja/login-loja.component';
import { AtualizarSenhaLojaComponent } from './atualizar-senha-loja/atualizar-senha-loja.component';

@NgModule({
  declarations: [
    LojaComponent,
    ListarLojasComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent,
    PerfilComponent,
    ProdutosLojaComponent,
    AdicionarCategoriaComponent,
    VendasComponent,
    LoginLojaComponent,
    AtualizarSenhaLojaComponent
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
    ProdutosLojaComponent,
    AdicionarCategoriaComponent,
    VendasComponent,
    LoginLojaComponent,
    AtualizarSenhaLojaComponent
  ]
})
export class LojaModule { }
