import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-especificacoes',
  templateUrl: './especificacoes.component.html',
  styleUrls: ['./especificacoes.component.css']
})
export class EspecificacoesComponent implements OnInit{
  produto!:Produto;
  produtoId!:number;
  imagemEscolhida!:string;
  quantidade:number = 1;

  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private route: ActivatedRoute, private produtoService:ProdutoService, private router:Router, private usuarioService:UsuarioService,) { 
    
  }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.params['id'];
    if(this.produtoId){
      this.produtoService.encontrarPorId(this.produtoId).subscribe({
        next: (produto:Produto) => {
          this.produto = produto;
          this.imagemEscolhida = produto.imagens[0];
          console.log (this.produto);
        },
        error: (error) => {
          this.feedbackComponent.open("Ocorreu um ao consultar os dados.", true)
        }
      });
    }
  }

  selecionarImagem(imagem:string){
    this.imagemEscolhida = imagem;

  }

  adicionarAoCarrinho(){
    this.produto.quantidade = this.quantidade;
    this.usuarioService.adicionarProdutoCarrinho(this.produto);
    this.feedbackComponent.open("Produto adicionado ao carrinho.", true)
  }
}
