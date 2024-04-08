import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loja } from 'src/app/interfaces/loja';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoComprado } from 'src/app/interfaces/produto-comprado';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoCompradoService } from 'src/app/services/produto-comprado.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['../../../shared/paginacao/paginacao.component.css','./vendas.component.css']
})
export class VendasComponent implements OnInit{
  produtos!:ProdutoComprado[];
  loja!:Loja;
  pagina!:number;
  numeroPaginaUsuario!:number;
  numeroCompraInput!:number;
  mostrarPaginacao: boolean = true;
  produtoPesquisado!:ProdutoComprado;

  constructor(private route: ActivatedRoute, private lojaService:LojaService, private produtoService:ProdutoService, private router: Router, private produtoCompradoService:ProdutoCompradoService) { }
   
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pagina = + params['pagina'];
    });
    this.lojaService.login(1111, "12345").subscribe({
      next: (loja:Loja) => {
        this.loja = loja;
        if(this.loja){
          this.produtoCompradoService.carregarVendasDeUmaLoja(this.loja.id, this.pagina).subscribe({
            next: (produtos:ProdutoComprado[]) => {
              this.produtos = produtos;
              console.log(this.produtos);
              if(this.produtos.length<18){
                this.mostrarPaginacao=false;
  
              }
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      },
      error: (error) => {
        
      }
    });
    
  }

  mudarPagina(avancar:boolean){
    if(avancar){
      if(this.produtos.length==18){
        this.pagina++;
        this.router.navigate(['/vendas', this.pagina]);
      }
    }
    else{
      if(this.pagina!=0){
        this.pagina--;
        this.router.navigate(['/vendas', this.pagina]);
      }
    }
    
  }

  reembolsar(produto:ProdutoComprado){
    this.lojaService.cancelarCompra(produto.id).subscribe({
      next: () => {
        produto.cancelado = true;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  pesquisar(){
    if(this.numeroCompraInput){
    this.produtoCompradoService.encontrarProdutoComprado(this.numeroCompraInput).subscribe({
      next: (produto:ProdutoComprado) => {
        this.produtoPesquisado = produto;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  }
}
