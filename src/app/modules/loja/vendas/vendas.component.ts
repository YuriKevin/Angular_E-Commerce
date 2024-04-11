import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loja } from 'src/app/interfaces/loja';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoComprado } from 'src/app/interfaces/produto-comprado';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoCompradoService } from 'src/app/services/produto-comprado.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

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
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private route: ActivatedRoute, private lojaService:LojaService, private produtoService:ProdutoService, private router: Router, private produtoCompradoService:ProdutoCompradoService) { }
   
  ngAfterViewInit(): void {
    if (this.feedbackComponent) {
      this.feedbackComponent.open("Carregando.", false);
    }
  }

  ngOnInit(): void {
    this.loja = this.lojaService.getLoja();
    if(!this.loja){
      this.router.navigate(['/loginLoja']);
    }
    this.route.params.subscribe(params => {
      this.pagina = + params['pagina'];
    });
    this.produtoCompradoService.carregarVendasDeUmaLoja(this.loja.id, this.pagina).subscribe({
      next: (produtos:ProdutoComprado[]) => {
        this.produtos = produtos;
        this.feedbackComponent.close();
        if(this.produtos.length<18){
          this.mostrarPaginacao=false;
        }
      },
      error: (error) => {
        this.feedbackComponent.open(error, true);
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
    this.feedbackComponent.open("Cancelando venda.", false);
    this.lojaService.cancelarCompra(produto.id).subscribe({
      next: () => {
        produto.cancelado = true;
        this.feedbackComponent.open("Venda cancelada", true);
      },
      error: (error) => {
        console.log(error);
        this.feedbackComponent.open(error, true);
      }
    });
  }

  pesquisar(){
    if(this.numeroCompraInput){
      this.feedbackComponent.open("Carregando.", true);
      this.produtoCompradoService.encontrarProdutoComprado(this.numeroCompraInput).subscribe({
        next: (produto:ProdutoComprado) => {
          this.produtoPesquisado = produto;
          this.feedbackComponent.close();
        },
        error: (error) => {
          this.feedbackComponent.close();
        }
      });
  }
  }
}
