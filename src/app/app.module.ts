import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ListarLojasComponent } from './modules/loja/listar-lojas/listar-lojas.component';
import { LojaComponent } from './modules/loja/loja/loja.component';
import { CadastrarLojaComponent } from './modules/loja/cadastrar-loja/cadastrar-loja.component';
import { CadastrarProdutoComponent } from './modules/loja/cadastrar-produto/cadastrar-produto.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './modules/loja/perfil/perfil.component';
import { ProdutosLojaComponent } from './modules/loja/produtos-loja/produtos-loja.component';
import { AdicionarCategoriaComponent } from './modules/loja/adicionar-categoria/adicionar-categoria.component';
import { CreditosComponent } from './modules/usuario/creditos/creditos.component';
import { VendasComponent } from './modules/loja/vendas/vendas.component';
import { LoginLojaComponent } from './modules/loja/login-loja/login-loja.component';
import { LoginUsuarioComponent } from './modules/usuario/login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './modules/usuario/cadastro-usuario/cadastro-usuario.component';
import { AtualizarSenhaLojaComponent } from './modules/loja/atualizar-senha-loja/atualizar-senha-loja.component';
import { AtualizarSenhaUsuarioComponent } from './modules/usuario/atualizar-senha-usuario/atualizar-senha-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoModule } from './modules/produto/produto.module';
import { PerfilUsuarioComponent } from './modules/usuario/perfil-usuario/perfil-usuario.component';
import { AtualizarDadosComponent } from './modules/usuario/atualizar-dados/atualizar-dados.component';
import { PerfilLojaComponent } from './modules/loja/perfil-loja/perfil-loja.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLojasComponent,
    LojaComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent,
    PerfilComponent,
    ProdutosLojaComponent,
    AdicionarCategoriaComponent,
    CreditosComponent,
    VendasComponent,
    LoginLojaComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    AtualizarSenhaLojaComponent,
    AtualizarSenhaUsuarioComponent,
    PerfilUsuarioComponent,
    AtualizarDadosComponent,
    PerfilLojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }