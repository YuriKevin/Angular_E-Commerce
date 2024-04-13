import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Loja } from 'src/app/interfaces/loja';
import { Produto } from 'src/app/interfaces/produto';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-perfil-loja',
  templateUrl: './perfil-loja.component.html',
  styleUrls: ['./perfil-loja.component.css']
})
export class PerfilLojaComponent implements OnInit{
  loja!:Loja;
  maisVendidos!:Produto[];
  categorias!:Categoria[];
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;
  
 constructor(private lojaService:LojaService, private router: Router, private produtoService:ProdutoService){}

  ngOnInit(): void {
    this.loja = this.lojaService.getLoja();
    if(!this.loja){
      this.router.navigate(['/loginLoja']);
    }
      this.lojaService.maisVendidosDeUmaLoja(this.loja.id, 0).subscribe({
        next: (produtos:Produto[]) => {
          this.maisVendidos = produtos;
        },
        error: (error) => {
        }
      });
      this.lojaService.listarCategoriasDeUmaLoja(this.loja.id).subscribe({
        next: (categorias:Categoria[]) => {
          this.categorias = categorias;
        },
        error: (error) => {
        }
      });
    }

  removerCategoria(categoria: Categoria) {
    this.feedbackComponent.open("Removendo categoria.", false);

    this.lojaService.removerCategoria(this.loja.id, categoria.id).subscribe({
      next: () => {
        this.feedbackComponent.close();
        const index = this.categorias.indexOf(categoria);
        if (index !== -1) {
          this.categorias.splice(index, 1);
        }
      },
      error: (error) => {
        this.feedbackComponent.open(error, true);
      }
    });
    
  }

}
