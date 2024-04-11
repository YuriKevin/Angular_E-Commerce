import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Loja } from 'src/app/interfaces/loja';
import { Produto } from 'src/app/interfaces/produto';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-produtos-loja',
  templateUrl: './produtos-loja.component.html',
  styleUrls: ['../../../shared/paginacao/paginacao.component.css', './produtos-loja.component.css']
})
export class ProdutosLojaComponent implements OnInit{
  produtos!:Produto[];
  lojaId!:number;
  pagina!:number;
  numeroPaginaUsuario!:number;
  tituloInput!:string;
  mostrarPaginacao: boolean = true;
  loja!:Loja;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private route: ActivatedRoute, private lojaService:LojaService, private produtoService:ProdutoService, private router: Router) { }
   
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
      this.lojaId = params['id'];
      this.pagina = + params['pagina'];
      console.log(this.pagina);
      this.numeroPaginaUsuario = this.pagina + 1;
      this.produtoService.pesquisarProdutosDeUmaLoja(this.lojaId, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
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
    });
      
  }

  pesquisar(){
    if(this.tituloInput){
      this.feedbackComponent.open("Carregando.", false);
      this.produtoService.pesquisarProdutosDeUmaLojaPorTitulo(this.lojaId, this.tituloInput, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
          this.produtos = produtos;
          this.feedbackComponent.close();
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
  }
  }

  mudarPagina(avancar:boolean){
    if(avancar){
      if(this.produtos.length==18){
        this.pagina++;
        this.router.navigate(['/produtosLoja', this.lojaId, this.pagina]);
      }
    }
    else{
      if(this.pagina!=0){
        this.pagina--;
        this.router.navigate(['/produtosLoja', this.lojaId, this.pagina]);
      }
    }
  }
}
