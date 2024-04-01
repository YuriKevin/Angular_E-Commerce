import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Loja } from 'src/app/interfaces/loja';
import { LojaService } from 'src/app/services/loja.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-login-loja',
  templateUrl: './login-loja.component.html',
  styleUrls: ['../../usuario/login-usuario/login-usuario.component.css', './login-loja.component.css']
})
export class LoginLojaComponent {
  codigoLogin!:number;
  senha!:string;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService, private router:Router){

  }
  
  login() {
    if(!this.codigoLogin || !this.senha){
      this.feedbackComponent.open("Preencha todos os campos", true);
      return;
    }
    this.feedbackComponent.open("Aguarde enquanto validamos seus dados.", false);
    this.lojaService.login(this.codigoLogin, this.senha).subscribe({
      next: (loja:Loja) => {
        this.lojaService.setLoja(loja);
        this.router.navigate(['']);
      },
      error: (error) => {
        this.feedbackComponent.open("Ocorreu um erro ao se conectar.", true)
      }
    });
  }

}
