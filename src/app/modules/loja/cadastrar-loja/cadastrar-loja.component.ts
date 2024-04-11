import { Component, ViewChild } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';
import { Router } from '@angular/router';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';
import { Loja } from 'src/app/interfaces/loja';

@Component({
  selector: 'app-cadastrar-loja',
  templateUrl: './cadastrar-loja.component.html',
  styleUrls: ['./cadastrar-loja.component.css']
})

export class CadastrarLojaComponent {
  codigoLogin!:number;
  nome!:string;
  senha!:string;
  confirmarSenha!:string;
  logo!:string;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService, private router:Router){

  }

  transformarLogoStringBase64(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (this.verificarSeContemImagem(file)) {
        this.transformarParaBase64String(file);
      } else {
        console.log("O arquivo selecionado não é uma imagem.");
      }
    }
  }

  verificarSeContemImagem(file: File): boolean {
    return file.type.startsWith('image/');
  }

  transformarParaBase64String(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.logo = reader.result as string;
      console.log(this.logo);
    };
    reader.readAsDataURL(file);
  }

  cadastrar(){
    if(!this.codigoLogin || !this.nome || !this.senha || !this.confirmarSenha || !this.logo){
      console.log("erro");
      this.feedbackComponent.open("Preencha todos os campos", true);
      return;
    }
    else if(this.senha != this.confirmarSenha){
      this.feedbackComponent.open("Senhas não coincidem.", true);
      return;
    }
    this.feedbackComponent.open("Aguarde enquanto validamos seus dados.", false);
    this.lojaService.cadastrar(this.codigoLogin, this.nome, this.senha, this.logo).subscribe({
      next: (loja:Loja) => {
        this.lojaService.setLoja(loja);
        this.router.navigate(['/loginLoja']);
      },
      error: (error) => {
        this.feedbackComponent.open(error, true)
      }
    });
  }

}
