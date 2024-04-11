import { Component, OnInit, ViewChild } from '@angular/core';
import { DetalhesProduto } from 'src/app/interfaces/detalhes-produto';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';
import { LojaService } from 'src/app/services/loja.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { Loja } from 'src/app/interfaces/loja';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['../cadastrar-loja/cadastrar-loja.component.css','./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit{
  loja!:Loja;
  titulo!:string;
  valor!:number;
  quantidade!:number;
  categoria!:string;
  disponivel:boolean = true;
  imagem!:string;
  imagens:string[] = [];
  detalhes:DetalhesProduto[] = [];
  detalheTitulo:string = '';
  detalheDescricao:string ='';
  categorias:boolean = false;

  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  constructor(private lojaService:LojaService, private router:Router){

  }

  ngOnInit(): void {
    this.loja = this.lojaService.getLoja();
    if(!this.loja){
      this.router.navigate(['/loginLoja']);
    }
  }

  adicionarDetalhe(){
    const novoDetalhe: DetalhesProduto = {
      id: null,
      titulo: this.detalheTitulo,
      descricao: this.detalheDescricao
    };
    this.detalhes.push(novoDetalhe);
    this.detalheTitulo = '';
    this.detalheDescricao = '';
  }

  removerDetalhe(detalhe:DetalhesProduto){
    const indice = this.detalhes.indexOf(detalhe);
    if (indice !== -1) {
        this.imagens.splice(indice, 1);
    }
  }

  removerImagem(indice:number){
    this.imagens.splice(indice, 1);
  }

  marcarDisponibilidade(){
    if(this.disponivel){
      this.disponivel = false;
    }
    else{
      this.disponivel = true;
    }
  }

  transformarLogoStringBase64(event: Event): void {
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
      this.imagens.push(this.imagem);
      console.log(this.imagem);
    };
    reader.readAsDataURL(file);
  }

  cadastrar(){
    if(!this.titulo || !this.valor || !this.quantidade || !this.categoria || !this.imagens || this.imagens.length == 0){
      this.feedbackComponent.open("Preencha todos os campos", true);
      return;
    }
    else if(this.imagens.length > 6){
      this.feedbackComponent.open("Máximo de 6 imagens permitidas.", true);
      return;
    }
    this.feedbackComponent.open("Aguarde enquanto validamos seus dados.", false);
    this.lojaService.cadastrarProduto(this.titulo, this.valor, this.quantidade, this.categoria, this.imagens, this.detalhes, this.disponivel).subscribe({
      next: (produto:Produto) => {
        this.router.navigate(['/especificacoes/' + produto.id]);
      },
      error: (error) => {
        this.feedbackComponent.open(error, true)
      }
    });
  }

  selecionarCategoria(categoria:string){
    this.categoria = categoria;
    this.mostrarCategorias();
  }

  mostrarCategorias(){
    if(this.categorias == false){
      this.categorias = true;
    }
    else{
      this.categorias = false;
    }
  }
}
