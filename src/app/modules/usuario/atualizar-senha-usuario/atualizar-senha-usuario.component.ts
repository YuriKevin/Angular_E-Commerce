import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-atualizar-senha-usuario',
  templateUrl: './atualizar-senha-usuario.component.html',
  styleUrls: ['../login-usuario/login-usuario.component.css','./atualizar-senha-usuario.component.css']
})
export class AtualizarSenhaUsuarioComponent implements OnInit{
  senha!:string;
  senhaAntiga!:string;
  usuario!:Usuario;
  confirmarSenha!:string;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private usuarioService:UsuarioService, private router:Router){}

  ngOnInit(): void {
      this.usuario = this.usuarioService.getUsuario();
      console.log(this.usuario);
      if(!this.usuario){
        this.router.navigate(['/loginUsuario', false]);
      }
  }

  atualizarSenha(){
    if(!this.senha || !this.confirmarSenha || !this.senhaAntiga){
      this.feedbackComponent.open("preencha todos os campos.", true)
    }
    else if(this.senha != this.confirmarSenha){
      this.feedbackComponent.open("senhas não coincidem.", true)
    }
    else{
    this.usuarioService.atualizarSenha(this.usuario.id, this.senha, this.senhaAntiga).subscribe({
      next: () => {
        this.feedbackComponent.open("Dados atualizados com sucesso.", true)
        this.router.navigate(['/perfilUsuario']);
      },
      error: (error) => {
        console.log(error);
        this.feedbackComponent.open("Ocorreu um erro ao se conectar.", true)
      }
    });
  }
  }
}
