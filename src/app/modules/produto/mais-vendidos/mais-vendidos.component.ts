import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css']
})
export class MaisVendidosComponent implements OnInit{
  produtos!: Produto[];

  constructor(private produtoService:ProdutoService){}

  ngOnInit(): void {
    this.produtoService.maisVendidos().subscribe({
      next: (produtos:Produto[]) => {
        this.produtos = produtos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
