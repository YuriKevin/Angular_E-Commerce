import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Loja } from 'src/app/interfaces/loja';
import { Produto } from 'src/app/interfaces/produto';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-adicionar-categoria',
  templateUrl: './adicionar-categoria.component.html',
  styleUrls: ['../../../shared/paginacao/paginacao.component.css', './adicionar-categoria.component.css']
})
export class AdicionarCategoriaComponent implements OnInit{
  nomeCategoria: string = '';
  produtosAdicionados:Produto[] = [];
  loja!:Loja;
  produtos!:Produto[];
  tituloInput!:string;
  pagina: number = 0;
  numeroPaginaUsuario:number = 1;
  categoria!:Categoria;
  idsProdutos:number[] = [];
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService, private produtoService:ProdutoService, private router:Router){}

  ngOnInit(): void {
      this.loja = this.lojaService.getLoja();
      if(!this.loja){
        this.router.navigate(['/loginLoja']);
      }
  } 

  pesquisar(){
    if(this.tituloInput){
      this.feedbackComponent.open("Carregando...", false);
      this.produtoService.pesquisarProdutosDeUmaLojaPorTitulo(this.loja.id, this.tituloInput, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
          this.produtos = produtos;
          this.feedbackComponent.close();
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
  }
  else{
    this.feedbackComponent.open("Digite alguma coisa para pesquisar.", true);
  }
  }

  adicionarProduto(produto:Produto){
    this.produtosAdicionados.push(produto);
    console.log(this.produtosAdicionados);
  }

  removerProduto(produto: Produto) {
    const index = this.produtosAdicionados.indexOf(produto);
    if (index !== -1) {
      this.produtosAdicionados.splice(index, 1);
    }
  }

  mudarPagina(avancar:boolean){
    if(avancar){
      if(this.produtos.length==18){
        this.pagina++;
        this.numeroPaginaUsuario++;
        this.pesquisar();
      }
    }
    else{
      if(this.pagina!=0){
        this.pagina--;
        this.numeroPaginaUsuario--;
        this.pesquisar();
      }
    }
  }

  adicionarCategoria(){
    if(!this.nomeCategoria || !this.produtosAdicionados || this.produtosAdicionados.length==0){
      this.feedbackComponent.open("Certifique-se de ter atribuído título e produtos a categoria.", true);
    }
    else{
      this.produtosAdicionados.forEach(produto => {
        this.idsProdutos.push(produto.id);
      });
      this.feedbackComponent.open("Aguarde enquanto validamos os dados...", false);
      this.lojaService.adicionarCategoria(this.loja.id, this.nomeCategoria, this.idsProdutos).subscribe({
        next: () => {
          this.router.navigate(['/perfilLoja']);
        },
        error: (error) => {
          console.log(error);
          this.feedbackComponent.open(error, true);
        }
      });
    }
  }
    

}
