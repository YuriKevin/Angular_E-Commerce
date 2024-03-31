import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CreditosComponent } from './creditos/creditos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComprasComponent } from './compras/compras.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AtualizarSenhaUsuarioComponent } from './atualizar-senha-usuario/atualizar-senha-usuario.component';


@NgModule({
  declarations: [
    CreditosComponent,
    ComprasComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    AtualizarSenhaUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CreditosComponent,
    ComprasComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    AtualizarSenhaUsuarioComponent
  ]
})
export class UsuarioModule { }