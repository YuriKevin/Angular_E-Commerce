import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-secao',
  templateUrl: './secao.component.html',
  styleUrls: ['./secao.component.css']
})
export class SecaoComponent implements OnInit{
  @Input() titulo!: string;
  @Input() produtos!: Produto[];
  controleInicioIndices:number = 0;
  controleFinalIndices:number = 4;
  tamanhoArray!:number;
  indiceInicialSlice:number=0;
  indiceFinalSlice!:number;
  

  ngOnInit(): void {
    if (window.innerWidth < 650) {
      this.controleFinalIndices = 1;
    }
    else if (window.innerWidth < 915) {
      this.controleFinalIndices = 2;
    }
    else if (window.innerWidth < 1215) {
      this.controleFinalIndices = 3;
    }
    else{
      this.controleFinalIndices = 4;
    }
    
    this.indiceFinalSlice = this.controleFinalIndices;
    console.log(this.controleFinalIndices);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('produtos' in changes) {
      this.tamanhoArray = this.produtos.length;
    }
  }

  passarProdutos(lado:boolean){
    if(lado){
      if((this.controleInicioIndices+this.controleFinalIndices) < this.tamanhoArray){
        this.controleInicioIndices += 1;
        this.indiceFinalSlice += 1;
      }
    }
    else{
      if((this.controleInicioIndices-1) >= 0){
        this.controleInicioIndices -= 1;
        this.indiceFinalSlice -= 1;
      }
    }
  }
}
