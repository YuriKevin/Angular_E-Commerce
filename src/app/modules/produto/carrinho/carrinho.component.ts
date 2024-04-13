import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { Usuario } from 'src/app/interfaces/usuario';
import { ProdutoCompradoService } from 'src/app/services/produto-comprado.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  compraRealizada:boolean = false;
  produtos!:Produto[];
  usuario!:Usuario;
  valorCompra!:number;

  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private router:Router, private produtoService: ProdutoService, private usuarioService:UsuarioService,private produtoCompradoService: ProdutoCompradoService){}

  ngOnInit(): void {
      this.produtos = this.produtoService.getCarrinho();
      this.usuario = this.usuarioService.getUsuario();
      if(this.produtos){
        this.calcularValorCompra();
      }
  }

  removerProdutoCarrinho(produto:Produto){
    this.produtoService.removerProdutoCarrinho(produto);
  }

  calcularValorCompra(){
    let valorCompra = 0;
          this.produtos.forEach(produto => {
            valorCompra += produto.valor;
          });
      this.valorCompra = valorCompra;
  }

  realizarCompra(){
    if(!this.usuario){
      this.router.navigate(['/loginUsuario', true]);
    }
    else if(this.produtos && this.produtos.length != 0){
      this.feedbackComponent.open("Aguarde enquanto processamos a compra.", false);
      this.produtos.forEach(produto => {
        if(produto.disponivel!=true){
          this.feedbackComponent.open("Não é possível comprar produtos que estão indiponíveis.", true);
          return;
        }
      });
      this.produtoCompradoService.novaCompra(this.usuario.id, this.produtos).subscribe({
        next: () => {
          this.feedbackComponent.close();
          this.compraRealizada = true;
          this.usuario.credito -= this.valorCompra;
          this.produtoService.limparCarrinho();
        },
        error: (error) => {
          this.feedbackComponent.open("Saldo insuficiente.", true);
          console.log(error);
        }
      });
    }
  }
  
}