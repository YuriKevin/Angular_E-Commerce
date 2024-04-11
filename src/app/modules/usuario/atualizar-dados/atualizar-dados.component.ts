import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-atualizar-dados',
  templateUrl: './atualizar-dados.component.html',
  styleUrls: ['../login-usuario/login-usuario.component.css', './atualizar-dados.component.css']
})
export class AtualizarDadosComponent implements OnInit{
  usuario!: Usuario;
  email!:string;
  nome!:string;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private usuarioService:UsuarioService, private router:Router){}

  ngOnInit(): void {
      this.usuario = this.usuarioService.getUsuario();
      if(!this.usuario){
        this.router.navigate(['/loginUsuario', false]);
      }
      this.nome = this.usuario.nome;
      this.email = this.usuario.email;
  }

  atualizarDados(){
    this.feedbackComponent.open("Aguarde enquanto validamos seus dados.", false);
    const email = this.email;
    const nome = this.nome;
      this.usuarioService.atualizarDados(this.usuario.id, this.nome, this.email).subscribe({
        next: () => {
          this.usuario.nome = nome;
          this.usuario.email = email;
          this.router.navigate(['/perfilUsuario']);
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
  }

}
