import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/produto/home/home.component';
import { ProdutoComponent } from './modules/produto/produto/produto.component';
import { HeaderComponent } from './shared/header/header.component';
import { SecaoComponent } from './shared/secao/secao.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'card', component: ProdutoComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'secao', component: SecaoComponent},
  { path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
