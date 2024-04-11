import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Loja } from 'src/app/interfaces/loja';
import { LojaDTO } from 'src/app/interfaces/loja-dto';
import { Produto } from 'src/app/interfaces/produto';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-loja-dto',
  templateUrl: './loja-dto.component.html',
  styleUrls: ['../perfil-loja/perfil-loja.component.css','./loja-dto.component.css']
})
export class LojaDtoComponent implements OnInit{
  loja!:LojaDTO;
  maisVendidos!:Produto[];
  categorias!:Categoria[];
  lojaId!:number;
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService, private route: ActivatedRoute, private router: Router, private produtoService:ProdutoService){}

  ngAfterViewInit(): void {
    if (this.feedbackComponent) {
      this.feedbackComponent.open("Carregando.", false);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lojaId = params['id'];
      this.lojaService.encontrarPorId(this.lojaId).subscribe({
        next: (loja:LojaDTO) => {
          this.loja = loja;
          this.lojaService.maisVendidosDeUmaLoja(this.lojaId, 0).subscribe({
            next: (produtos:Produto[]) => {
              this.maisVendidos = produtos;
              console.log(this.maisVendidos);
              this.feedbackComponent.close();
            },
            error: (error) => {
              console.log(error);
              this.feedbackComponent.close();
            }
          });
          this.lojaService.listarCategoriasDeUmaLoja(this.loja.id).subscribe({
            next: (categorias:Categoria[]) => {
              this.categorias = categorias;
              this.feedbackComponent.close();
            },
            error: (error) => {
              this.feedbackComponent.close();
            }
          });
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
    });
  }

}
