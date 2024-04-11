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
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private router:Router, private produtoService: ProdutoService, private usuarioService:UsuarioService,private produtoCompradoService: ProdutoCompradoService){}

  ngOnInit(): void {
      this.produtos = this.produtoService.getCarrinho();
      this.usuario = this.usuarioService.getUsuario();
  }

  removerProdutoCarrinho(produto:Produto){
    this.produtoService.removerProdutoCarrinho(produto);
  }

  realizarCompra(){
    if(!this.usuario){
      this.router.navigate(['/loginUsuario', true]);
    }
    else if(this.produtos && this.produtos.length != 0){
      this.feedbackComponent.open("Aguarde enquanto processamos a compra.", false);
      this.produtoCompradoService.novaCompra(this.usuario.id, this.produtos).subscribe({
        next: () => {
          this.feedbackComponent.close();
          this.compraRealizada = true;
        },
        error: (error) => {
          this.feedbackComponent.open(error, true);
        }
      });
    }
  }
  
}