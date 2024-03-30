import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CreditosComponent } from './creditos/creditos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    CreditosComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CreditosComponent,
    ComprasComponent
  ]
})
export class UsuarioModule { }