import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Loja } from 'src/app/interfaces/loja';
import { Produto } from 'src/app/interfaces/produto';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';

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

  constructor(private lojaService:LojaService, private produtoService:ProdutoService, private router:Router){}

  ngOnInit(): void {
      this.loja = this.lojaService.getLoja();
  } 

  pesquisar(){
    if(this.tituloInput){
      this.produtoService.pesquisarProdutosDeUmaLojaPorTitulo(this.loja.id, this.tituloInput, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
          this.produtos = produtos;
        },
        error: (error) => {
          console.log(error);
        }
      });
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
    this.produtosAdicionados.forEach(produto => {
      this.idsProdutos.push(produto.id);
    });
    console.log(this.idsProdutos);
    
    this.lojaService.adicionarCategoria(this.loja.id, this.nomeCategoria, this.idsProdutos).subscribe({
      next: () => {
        this.router.navigate(['/perfilLoja']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
    

}
