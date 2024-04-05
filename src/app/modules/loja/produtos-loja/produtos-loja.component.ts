import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

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

  constructor(private route: ActivatedRoute, private produtoService:ProdutoService, private router: Router) { }
   
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lojaId = params['id'];
      this.pagina = + params['pagina'];
      console.log(this.pagina);
      this.numeroPaginaUsuario = this.pagina + 1;
      this.produtoService.pesquisarProdutosDeUmaLoja(this.lojaId, this.pagina).subscribe({
        next: (produtos:Produto[]) => {
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
