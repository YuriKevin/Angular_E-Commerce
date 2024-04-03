import { Component, OnInit } from '@angular/core';
import { LojaDTO } from 'src/app/interfaces/loja-dto';
import { LojaService } from 'src/app/services/loja.service';

@Component({
  selector: 'app-listar-lojas',
  templateUrl: './listar-lojas.component.html',
  styleUrls: ['./listar-lojas.component.css']
})
export class ListarLojasComponent implements OnInit{
  lojas!:LojaDTO[];
  nomeLoja!:string;
  paginacao:number=0;

  constructor(private lojaService:LojaService){}

  ngOnInit(): void {
      this.lojaService.listarLojas(this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          console.log(lojas);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  pesquisarLojas(){
    if(this.nomeLoja){
      this.paginacao = 0;
      this.lojaService.pesquisarLojas(this.nomeLoja, this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          console.log(lojas);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  passarPagina(){
    if(this.lojas.length==18){
      this.paginacao += 1;
      this.lojaService.pesquisarLojas(this.nomeLoja, this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          console.log(lojas);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  retrocederPagina(){
    if(this.paginacao>0){
      this.paginacao -= 1;
      this.lojaService.pesquisarLojas(this.nomeLoja, this.paginacao).subscribe({
        next: (lojas:LojaDTO[]) => {
          this.lojas = lojas;
          console.log(lojas);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}
