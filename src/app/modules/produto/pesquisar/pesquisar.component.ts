import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})

export class PesquisarComponent {
  palavraPesquisada!: string;
  pagina!: number;
  produtos!:Produto[];
  numeroPaginaUsuario!:number;

  constructor(private route: ActivatedRoute, private produtoService:ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.palavraPesquisada = params['palavra'];
      this.pagina = + params['pagina'];
      this.numeroPaginaUsuario = this.pagina + 1;
      this.produtoService.adicionarHistoricoNavegacao(this.palavraPesquisada);
      this.produtoService.pesquisarProdutos(this.palavraPesquisada, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
          this.produtos = produtos;
        },
        error: (error) => {
          //feedback
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
