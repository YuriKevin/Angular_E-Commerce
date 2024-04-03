import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit{
  produtos!:Produto[];

  constructor(private produtoService:ProdutoService, private router:Router){

  }

  ngOnInit(): void {
    this.produtoService.pesquisarHistorico().subscribe({
      next: (produtos:Produto[]) => {
        this.produtos = produtos;
        if (this.produtos && this.produtos.length === 0) {

        }
      },
      error: (error) => {
        
      }
    });
  }

  

}
