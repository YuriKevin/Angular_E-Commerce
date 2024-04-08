import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalhesProduto } from 'src/app/interfaces/detalhes-produto';
import { Produto } from 'src/app/interfaces/produto';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['../cadastrar-loja/cadastrar-loja.component.css','../cadastrar-produto/cadastrar-produto.component.css', './atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit{
  produtoId!:number;
  produto!:Produto;
  imagem!:string;
  detalheTitulo:string = '';
  detalheDescricao:string ='';

  constructor(private route: ActivatedRoute, private produtoService:ProdutoService, private lojaService:LojaService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.params['id'];
    if(this.produtoId){
      this.produtoService.encontrarPorId(this.produtoId).subscribe({
        next: (produto:Produto) => {
          this.produto = produto;
          console.log (this.produto);
        },
        error: (error) => {
          
        }
      });
    }
  }
  adicionarDetalhe(){
    const novoDetalhe: DetalhesProduto = {
      id: null,
      titulo: this.detalheTitulo,
      descricao: this.detalheDescricao
    };
    this.produto.detalhes.push(novoDetalhe);
    this.detalheTitulo = '';
    this.detalheDescricao = '';
  }

  removerDetalhe(detalhe:DetalhesProduto){
    const indice = this.produto.detalhes.indexOf(detalhe);
    if (indice !== -1) {
        this.produto.imagens.splice(indice, 1);
    }
  }

  removerImagem(indice:number){
    this.produto.imagens.splice(indice, 1);
  }

  marcarDisponibilidade(){
    if(this.produto.disponivel){
      this.produto.disponivel = false;
    }
    else{
      this.produto.disponivel = true;
    }
  }


  transformarLogoStringBase64(event: Event): void {
    if(this.produto.imagens.length == 6){
      return;
    }
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (this.verificarSeContemImagem(file)) {
        this.transformarParaBase64String(file);
        inputElement.value = "";
      } else {
        console.log("O arquivo selecionado não é uma imagem.");
      }
    }
  }

  verificarSeContemImagem(file: File): boolean {
    return file.type.startsWith('image/');
  }

  transformarParaBase64String(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagem = reader.result as string;
      this.produto.imagens.push(this.imagem);
      console.log(this.imagem);
    };
    reader.readAsDataURL(file);
  }

  atualizar(){
    this.lojaService.atualizarProduto(this.produto).subscribe({
      next: () => {
        this.router.navigate(['/especificacoes/' + this.produto.id]);
      },
      error: (error) => {
        
      }
    });
  }
}
