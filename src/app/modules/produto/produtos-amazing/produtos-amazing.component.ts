import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-produtos-amazing',
  templateUrl: './produtos-amazing.component.html',
  styleUrls: ['./produtos-amazing.component.css']
})
export class ProdutosAmazingComponent implements OnInit{
  produtos!:Produto[];
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent

  constructor(private produtoService:ProdutoService){}

  ngAfterViewInit(): void {
    if (this.feedbackComponent) {
      this.feedbackComponent.open("Carregando.", false);
    }
  }

  ngOnInit(): void {
    this.produtoService.produtosAmazing().subscribe({
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
