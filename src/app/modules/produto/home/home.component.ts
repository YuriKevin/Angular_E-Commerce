import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  maisVendidos:Produto[] = [];
  produtosEvidencia!:Produto[];

  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private produtoService:ProdutoService, private router:Router, private usuarioService: UsuarioService){

  }

  ngOnInit(): void {
    this.produtoService.maisVendidos().subscribe({
      next: (produtos:Produto[]) => {
        this.maisVendidos = produtos;
        console.log(this.maisVendidos);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.produtoService.produtosDestaque().subscribe({
      next: (produtos:Produto[]) => {
        this.produtosEvidencia = produtos;
        console.log(this.produtosEvidencia);
      },
      error: (error) => {
        console.log(error);
      }
    });
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
    this.categoriasFinalSlice= this.controleFinalIndices;
  }

  controleInicioIndices:number = 0;
  controleFinalIndices:number = 4;
  
  indexArrayEvidencia:number = 0;
  arrayEvidencia: { imagem: string, texto: string }[] = [
    {
      imagem: '../../../assets/echodot_home.png',
      texto: '"Alexa, timer de 10 minutos para o macarrão."',
    },
    {
      imagem: '../../../assets/echodot_branco_home.png',
      texto: '"Alexa, tocar pop."',
    },
    {
      imagem: '../../../assets/linha_echo.png',
      texto: 'Conheça a linha echo.',
    },
    
  ];

  passarArrayEvidencia(lado:boolean){
    if(lado){
      this.indexArrayEvidencia++;
      if(this.indexArrayEvidencia>=this.arrayEvidencia.length){
        this.indexArrayEvidencia=0;
      }
    }
    else{
      this.indexArrayEvidencia--;
      if(this.indexArrayEvidencia<0){
        this.indexArrayEvidencia= this.arrayEvidencia.length-1;
      }
    }
  }
  
  categoriasInicialSlice:number=0;
  categoriasFinalSlice!:number;
  arrayCategorias: { imagem: string, texto: string }[] = [
    {
      imagem: '../../assets/categoria_computadores.png',
      texto: 'Computadores',
    },
    {
      imagem: '../../assets/categoria_celulares.png',
      texto: 'Celulares',
    },
    {
      imagem: '../../assets/categoria_livros.png',
      texto: 'Livros',
    },
    {
      imagem: '../../assets/categoria_eletrodomesticos.png',
      texto: 'Eletrodomésticos',
    }
    
  ];
  categoriasTamanhoArray:number = this.arrayCategorias.length;
  
  passarArrayCategorias(lado:boolean){
    if(lado){
      if((this.categoriasInicialSlice+this.controleFinalIndices) < this.categoriasTamanhoArray){
        this.categoriasInicialSlice += 1;
        this.categoriasFinalSlice += 1;
      }
    }
    else{
      if((this.categoriasInicialSlice-1) >= 0){
        this.categoriasInicialSlice -= 1;
        this.categoriasFinalSlice -= 1;
      }
    }
  }


}
