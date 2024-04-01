import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/produto/home/home.component';
import { ProdutoComponent } from './modules/produto/produto/produto.component';
import { SharedModule } from './shared/shared.module';
import { ListarComponent } from './modules/produto/listar/listar.component';
import { EspecificacoesComponent } from './modules/produto/especificacoes/especificacoes.component';
import { ListarLojasComponent } from './modules/loja/listar-lojas/listar-lojas.component';
import { LojaComponent } from './modules/loja/loja/loja.component';
import { CadastrarLojaComponent } from './modules/loja/cadastrar-loja/cadastrar-loja.component';
import { CadastrarProdutoComponent } from './modules/loja/cadastrar-produto/cadastrar-produto.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './modules/loja/perfil/perfil.component';
import { ProdutosLojaComponent } from './modules/loja/produtos-loja/produtos-loja.component';
import { AdicionarCategoriaComponent } from './modules/loja/adicionar-categoria/adicionar-categoria.component';
import { CarrinhoComponent } from './modules/produto/carrinho/carrinho.component';
import { CreditosComponent } from './modules/usuario/creditos/creditos.component';
import { ComprasComponent } from './modules/usuario/compras/compras.component';
import { VendasComponent } from './modules/loja/vendas/vendas.component';
import { PesquisarComponent } from './modules/produto/pesquisar/pesquisar.component';
import { LoginLojaComponent } from './modules/loja/login-loja/login-loja.component';
import { LoginUsuarioComponent } from './modules/usuario/login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './modules/usuario/cadastro-usuario/cadastro-usuario.component';
import { AtualizarSenhaLojaComponent } from './modules/loja/atualizar-senha-loja/atualizar-senha-loja.component';
import { AtualizarSenhaUsuarioComponent } from './modules/usuario/atualizar-senha-usuario/atualizar-senha-usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent,
    ListarComponent,
    EspecificacoesComponent,
    ListarLojasComponent,
    LojaComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent,
    PerfilComponent,
    ProdutosLojaComponent,
    AdicionarCategoriaComponent,
    CarrinhoComponent,
    CreditosComponent,
    ComprasComponent,
    VendasComponent,
    PesquisarComponent,
    LoginLojaComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    AtualizarSenhaLojaComponent,
    AtualizarSenhaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }