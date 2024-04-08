import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Loja } from 'src/app/interfaces/loja';
import { Produto } from 'src/app/interfaces/produto';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-perfil-loja',
  templateUrl: './perfil-loja.component.html',
  styleUrls: ['./perfil-loja.component.css']
})
export class PerfilLojaComponent implements OnInit{
  loja!:Loja;
  maisVendidos!:Produto[];
  categorias!:Categoria[];
  
 constructor(private lojaService:LojaService, private router: Router, private produtoService:ProdutoService){}

  ngOnInit(): void {
    /*this.loja = this.lojaService.getLoja();*/
    this.lojaService.login(1111, "12345").subscribe({
      next: (loja:Loja) => {
        this.lojaService.setLoja(loja);
        this.loja=loja;
        if(!this.loja){
          this.router.navigate(['/loginLoja']);
        }
        this.produtoService.maisVendidos().subscribe({
          next: (produtos:Produto[]) => {
            this.maisVendidos = produtos;
            console.log(this.maisVendidos);
          },
          error: (error) => {
            console.log(error);
          }
        });
        this.lojaService.listarCategoriasDeUmaLoja(this.loja.id).subscribe({
          next: (categorias:Categoria[]) => {
            this.categorias = categorias;
            console.log(this.categorias);
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        
      }
    });
  }

  removerCategoria(categoria: Categoria) {
    this.lojaService.removerCategoria(this.loja.id, categoria.id).subscribe({
      next: () => {
        const index = this.categorias.indexOf(categoria);
        if (index !== -1) {
          this.categorias.splice(index, 1);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
    
  }

}
