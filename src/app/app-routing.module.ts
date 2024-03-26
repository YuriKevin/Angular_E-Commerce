import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/produto/home/home.component';
import { ProdutoComponent } from './modules/produto/produto/produto.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'card', component: ProdutoComponent},
  { path: 'header', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
