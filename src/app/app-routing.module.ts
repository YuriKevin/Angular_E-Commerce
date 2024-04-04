import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/produto/home/home.component';
import { ProdutoComponent } from './modules/produto/produto/produto.component';
import { HeaderComponent } from './shared/header/header.component';
import { SecaoComponent } from './modules/produto/secao/secao.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListarComponent } from './modules/produto/listar/listar.component';
import { EspecificacoesComponent } from './modules/produto/especificacoes/especificacoes.component';
import { ListarLojasComponent } from './modules/loja/listar-lojas/listar-lojas.component';
import { LojaComponent } from './modules/loja/loja/loja.component';
import { CadastrarLojaComponent } from './modules/loja/cadastrar-loja/cadastrar-loja.component';
import { CadastrarProdutoComponent } from './modules/loja/cadastrar-produto/cadastrar-produto.component';
import { PerfilComponent } from './modules/loja/perfil/perfil.component';
import { ProdutosLojaComponent } from './modules/loja/produtos-loja/produtos-loja.component';
import { AdicionarCategoriaComponent } from './modules/loja/adicionar-categoria/adicionar-categoria.component';
import { CarrinhoComponent } from './modules/produto/carrinho/carrinho.component';
import { CreditosComponent } from './modules/usuario/creditos/creditos.component';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ComprasComponent } from './modules/usuario/compras/compras.component';
import { VendasComponent } from './modules/loja/vendas/vendas.component';
import { PesquisarComponent } from './modules/produto/pesquisar/pesquisar.component';
import { LoginUsuarioComponent } from './modules/usuario/login-usuario/login-usuario.component';
import { LoginLojaComponent } from './modules/loja/login-loja/login-loja.component';
import { CadastroUsuarioComponent } from './modules/usuario/cadastro-usuario/cadastro-usuario.component';
import { AtualizarSenhaLojaComponent } from './modules/loja/atualizar-senha-loja/atualizar-senha-loja.component';
import { AtualizarSenhaUsuarioComponent } from './modules/usuario/atualizar-senha-usuario/atualizar-senha-usuario.component';
import { HistoricoComponent } from './modules/produto/historico/historico.component';
import { MaisVendidosComponent } from './modules/produto/mais-vendidos/mais-vendidos.component';
import { RecentesComponent } from './modules/produto/recentes/recentes.component';
import { ProdutosAmazingComponent } from './modules/produto/produtos-amazing/produtos-amazing.component';
import { PerfilUsuarioComponent } from './modules/usuario/perfil-usuario/perfil-usuario.component';
import { AtualizarDadosComponent } from './modules/usuario/atualizar-dados/atualizar-dados.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'card', component: ProdutoComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'secao', component: SecaoComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'listar', component: ListarComponent},
  { path: 'especificacoes/:id', component: EspecificacoesComponent},
  { path: 'loja', component: LojaComponent},
  { path: 'lojas', component: ListarLojasComponent},
  { path: 'cadastrarLoja', component: CadastrarLojaComponent},
  { path: 'cadastrarProduto', component: CadastrarProdutoComponent},
  { path: 'perfilLoja/:id', component: PerfilComponent},
  { path: 'produtosLoja', component: ProdutosLojaComponent},
  { path: 'adicionarCategoria', component: AdicionarCategoriaComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'creditos', component: CreditosComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'notFound', component: NotFoundComponent},
  { path: 'compras', component: ComprasComponent},
  { path: 'vendas', component: VendasComponent},
  { path: 'pesquisar/:palavra/:pagina', component: PesquisarComponent},
  { path: 'loginUsuario/:retornarAoCarrinho', component: LoginUsuarioComponent},
  { path: 'loginLoja', component: LoginLojaComponent},
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent},
  { path: 'atualizarSenhaLoja', component: AtualizarSenhaLojaComponent},
  { path: 'atualizarSenhaUsuario', component: AtualizarSenhaUsuarioComponent},
  { path: 'historico', component: HistoricoComponent},
  { path: 'maisVendidos', component: MaisVendidosComponent},
  { path: 'recentes', component: RecentesComponent},
  { path: 'amazing', component: ProdutosAmazingComponent},
  { path: 'perfilUsuario', component: PerfilUsuarioComponent},
  { path: 'atualizarDados', component: AtualizarDadosComponent},
  { path: '**', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
