import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  email!:string;
  senha!:string;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private usuarioService:UsuarioService, private router:Router){

  }
  
  login() {
    if(!this.email || !this.senha){
      this.feedbackComponent.open("Preencha todos os campos", true);
      return;
    }
    this.feedbackComponent.open("Aguarde enquanto validamos seus dados.", false);
    this.usuarioService.login(this.email, this.senha).subscribe({
      next: (usuario:Usuario) => {
        this.usuarioService.setUsuario(usuario);
        this.router.navigate(['']);
      },
      error: (error) => {
        this.feedbackComponent.open("Ocorreu um erro ao se conectar.", true)
      }
    });
  }
}
