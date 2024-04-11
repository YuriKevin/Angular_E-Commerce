import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['../../../shared/paginacao/paginacao.component.css', './pesquisar.component.css']
})

export class PesquisarComponent {
  palavraPesquisada!: string;
  pagina!: number;
  produtos!:Produto[];
  numeroPaginaUsuario!:number;
  mostrarPaginacao: boolean = true;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent

  constructor(private route: ActivatedRoute, private produtoService:ProdutoService, private router: Router) { }
  
  ngAfterViewInit(): void {
    if (this.feedbackComponent) {
      this.feedbackComponent.open("Carregando.", false);
    }
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.palavraPesquisada = params['palavra'];
      this.pagina = + params['pagina'];
      this.numeroPaginaUsuario = this.pagina + 1;
      this.produtoService.adicionarHistoricoNavegacao(this.palavraPesquisada);
      this.produtoService.pesquisarProdutos(this.palavraPesquisada, this.pagina).subscribe({
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
  mudarPagina(avancar:boolean){
    if(avancar){
      this.pagina++;
      this.router.navigate(['/pesquisar', this.palavraPesquisada, this.pagina]);
    }
    else{
      if(this.pagina!=0){
        this.pagina--;
        this.router.navigate(['/pesquisar', this.palavraPesquisada, this.pagina]);
      }
    }
  }
}
