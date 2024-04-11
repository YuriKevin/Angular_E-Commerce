import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-recentes',
  templateUrl: './recentes.component.html',
  styleUrls: ['./recentes.component.css']
})
export class RecentesComponent implements OnInit{
  produtos!:Produto[];

  constructor(private produtoService:ProdutoService){}

  ngOnInit(): void {
    this.produtoService.recentes().subscribe({
      next: (produtos:Produto[]) => {
        this.produtos = produtos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
