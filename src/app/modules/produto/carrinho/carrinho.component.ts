import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { Usuario } from 'src/app/interfaces/usuario';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  compraRealizada:boolean = false;
  produtos!:Produto[];
  usuario!:Usuario;

  constructor(private produtoService: ProdutoService, private usuarioService: UsuarioService){}

  ngOnInit(): void {
      this.produtos = this.produtoService.getCarrinho();
      if(this.produtos.length == 0){

      }
  }

  removerProdutoCarrinho(produto:Produto){
    this.produtoService.removerProdutoCarrinho(produto);
  }

  
  
}