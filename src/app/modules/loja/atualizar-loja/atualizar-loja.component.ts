import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Loja } from 'src/app/interfaces/loja';
import { LojaService } from 'src/app/services/loja.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-atualizar-loja',
  templateUrl: './atualizar-loja.component.html',
  styleUrls: ['../cadastrar-loja/cadastrar-loja.component.css', './atualizar-loja.component.css']
})
export class AtualizarLojaComponent implements OnInit{
  codigoLogin!:number;
  nome!:string;
  logo!:string;
  loja!: Loja;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService, private router:Router){}

  ngOnInit(): void {
      this.loja = this.lojaService.getLoja();
      if(!this.loja){
        this.router.navigate(['/loginLoja']);
      }
      this.codigoLogin = this.loja.codigoLogin;
      this.nome = this.loja.nome;
      this.logo = this.loja.logo;
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

  atualizar(){
    this.feedbackComponent.open("Aguarde enquanto validamos os dados.", false);
    const codigoLogin = this.codigoLogin;
    const nome = this.nome;
    const logo = this.logo;
      this.lojaService.atualizarDados(this.loja.id, this.codigoLogin, this.nome, this.logo).subscribe({
        next: () => {
          this.loja.codigoLogin = codigoLogin;
          this.loja.nome = nome;
          this.loja.logo = logo;
          this.router.navigate(['/perfilLoja']);
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
  }
}
