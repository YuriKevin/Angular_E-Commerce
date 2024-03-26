import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
