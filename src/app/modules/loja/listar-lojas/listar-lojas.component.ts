import { Component, OnInit, ViewChild } from '@angular/core';
import { LojaDTO } from 'src/app/interfaces/loja-dto';
import { LojaService } from 'src/app/services/loja.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-listar-lojas',
  templateUrl: './listar-lojas.component.html',
  styleUrls: ['./listar-lojas.component.css']
})
export class ListarLojasComponent implements OnInit{
  lojas!:LojaDTO[];
  nomeLoja!:string;
  paginacao:number=0;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService){}

  ngAfterViewInit(): void {
    if (this.feedbackComponent) {
      this.feedbackComponent.open("Carregando.", false);
    }
  }

  ngOnInit(): void {
      this.lojaService.listarLojas(this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          this.feedbackComponent.close();
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
  }

  pesquisarLojas(){
    if(this.nomeLoja){
      this.feedbackComponent.open("Carregando", false);
      this.paginacao = 0;
      this.lojaService.pesquisarLojas(this.nomeLoja, this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          this.feedbackComponent.close();
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
    }
  }

  passarPagina(){
    if(this.lojas.length==18){
      this.feedbackComponent.open("Carregando", false);
      this.paginacao += 1;
      this.lojaService.pesquisarLojas(this.nomeLoja, this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          this.feedbackComponent.close();
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
    }
  }
  retrocederPagina(){
    if(this.paginacao>0){
      this.feedbackComponent.open("Carregando", false);
      this.paginacao -= 1;
      this.lojaService.pesquisarLojas(this.nomeLoja, this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          this.feedbackComponent.close();
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
    }
  }
}
