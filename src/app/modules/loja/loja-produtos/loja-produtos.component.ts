import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-loja-produtos',
  templateUrl: './loja-produtos.component.html',
  styleUrls: ['../produtos-loja/produtos-loja.component.css','./loja-produtos.component.css']
})
export class LojaProdutosComponent {
  produtos!:Produto[];
  lojaId!:number;
  pagina!:number;
  numeroPaginaUsuario!:number;
  tituloInput!:string;
  mostrarPaginacao: boolean = true;
  nomeLoja!:string;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private route: ActivatedRoute, private produtoService:ProdutoService, private router: Router) { }
   
  ngAfterViewInit(): void {
    if (this.feedbackComponent) {
      this.feedbackComponent.open("Carregando.", false);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lojaId = params['id'];
      this.pagina = + params['pagina'];
      this.nomeLoja = params['loja'];
      console.log(this.pagina);
      this.numeroPaginaUsuario = this.pagina + 1;
      this.produtoService.pesquisarProdutosDeUmaLoja(this.lojaId, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
          this.feedbackComponent.close();
          this.produtos = produtos;
          console.log(this.produtos);
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
      this.produtoService.pesquisarProdutosDeUmaLojaPorTitulo(this.lojaId, this.tituloInput, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
          this.produtos = produtos;
          console.log(this.produtos);
        },
        error: (error) => {
          console.log(error);
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
