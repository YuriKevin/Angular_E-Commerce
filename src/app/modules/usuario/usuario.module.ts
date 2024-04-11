import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { CreditosComponent } from './creditos/creditos.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AtualizarSenhaUsuarioComponent } from './atualizar-senha-usuario/atualizar-senha-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { AtualizarDadosComponent } from './atualizar-dados/atualizar-dados.component';


@NgModule({
  declarations: [
    CreditosComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    AtualizarSenhaUsuarioComponent,
    PerfilUsuarioComponent,
    AtualizarDadosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CreditosComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    AtualizarSenhaUsuarioComponent
  ]
})
export class UsuarioModule { }