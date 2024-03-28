import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/produto/home/home.component';
import { ProdutoComponent } from './modules/produto/produto/produto.component';
import { HeaderComponent } from './shared/header/header.component';
import { SecaoComponent } from './shared/secao/secao.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListarComponent } from './modules/produto/listar/listar.component';
import { EspecificacoesComponent } from './modules/produto/especificacoes/especificacoes.component';
import { ListarLojasComponent } from './modules/loja/listar-lojas/listar-lojas.component';
import { LojaComponent } from './modules/loja/loja/loja.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'card', component: ProdutoComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'secao', component: SecaoComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'listar', component: ListarComponent},
  { path: 'especificacoes', component: EspecificacoesComponent},
  { path: 'loja', component: LojaComponent},
  { path: 'listarLojas', component: ListarLojasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
