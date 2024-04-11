import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Loja } from 'src/app/interfaces/loja';
import { LojaService } from 'src/app/services/loja.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-atualizar-senha-loja',
  templateUrl: './atualizar-senha-loja.component.html',
  styleUrls: ['../../usuario/login-usuario/login-usuario.component.css', './atualizar-senha-loja.component.css']
})
export class AtualizarSenhaLojaComponent {
  senha!:string;
  senhaAntiga!:string;
  loja!:Loja;
  confirmarSenha!:string;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService, private router:Router){}

  ngOnInit(): void {
      this.loja = this.lojaService.getLoja();
      if(!this.loja){
        this.router.navigate(['/loginLoja']);
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
    this.lojaService.atualizarSenha(this.loja.id, this.senha, this.senhaAntiga).subscribe({
      next: () => {
        this.feedbackComponent.open("Dados atualizados com sucesso.", true)
        this.router.navigate(['/perfilLoja']);
      },
      error: (error) => {
        console.log(error);
        this.feedbackComponent.open(error, true)
      }
    });
  }
  }
}
