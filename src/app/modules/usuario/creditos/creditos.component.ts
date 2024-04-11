import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit{
  usuario!:Usuario;
  creditosAdicionados!:number;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(): void {
      this.usuario = this.usuarioService.getUsuario();
      if(!this.usuario){
        this.router.navigate(['/loginUsuario', true]);
      }
  }
  adicionarCreditos(){
    if(this.creditosAdicionados){
      this.feedbackComponent.open("Aguarde enquanto validamos os dados.", false);
      this.usuarioService.adicionarCreditos(this.usuario.id, this.creditosAdicionados).subscribe({
        next: () => {
          this.router.navigate(['/carrinho']);
          this.usuarioService.atualizarCredito(this.creditosAdicionados);
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
    }
  }
}