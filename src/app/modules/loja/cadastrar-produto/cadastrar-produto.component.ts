import { Component } from '@angular/core';
import { DetalhesProduto } from 'src/app/interfaces/detalhes-produto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['../cadastrar-loja/cadastrar-loja.component.css','./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {
  imagem!:string;
  imagens:string[] = [];
  detalhes:DetalhesProduto[] = [];
  detalheTitulo:string = '';
  detalheDescricao:string ='';

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
}
