import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css']
})
export class MaisVendidosComponent implements OnInit{
  produtos!: Produto[];
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent

  constructor(private produtoService:ProdutoService){}

  ngAfterViewInit(): void {
    if (this.feedbackComponent) {
      this.feedbackComponent.open("Carregando.", false);
    }
  }

  ngOnInit(): void {
    this.produtoService.maisVendidos().subscribe({
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
