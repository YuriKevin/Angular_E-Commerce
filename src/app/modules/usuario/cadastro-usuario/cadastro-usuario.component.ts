import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['../login-usuario/login-usuario.component.css', './cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  email!:string;
  nome!:string;
  senha!:string;
  confirmarSenha!:string;

  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private usuarioService:UsuarioService, private router:Router){

  }
  cadastrar(){
    if(!this.email || !this.nome || !this.senha || !this.confirmarSenha){
      this.feedbackComponent.open("Preencha todos os campos", true);
      return;
    }
    else if(this.senha != this.confirmarSenha){
      this.feedbackComponent.open("Senhas não coincidem.", true);
      return;
    }
    this.feedbackComponent.open("Aguarde enquanto validamos seus dados.", false);
    this.usuarioService.cadastrar(this.email, this.nome, this.senha).subscribe({
      next: (usuario:Usuario) => {
        this.router.navigate(['/loginUsuario', false]);
      },
      error: (error) => {
        this.feedbackComponent.open("Ocorreu um erro ao se cadastrar.", true)
      }
    });
  }
}
