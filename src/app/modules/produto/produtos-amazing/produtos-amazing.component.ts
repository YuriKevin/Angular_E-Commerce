import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-amazing',
  templateUrl: './produtos-amazing.component.html',
  styleUrls: ['./produtos-amazing.component.css']
})
export class ProdutosAmazingComponent implements OnInit{
  produtos!:Produto[];

  constructor(private produtoService:ProdutoService){}

  ngOnInit(): void {
    this.produtoService.produtosAmazing().subscribe({
      next: (produtos:Produto[]) => {
        this.produtos = produtos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
