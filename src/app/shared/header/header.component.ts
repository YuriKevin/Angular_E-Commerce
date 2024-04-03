import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  palavraPesquisada!:string;
  
  constructor(private produtoService: ProdutoService, private router: Router){}

  pesquisar(){
    if(this.palavraPesquisada && this.palavraPesquisada !=''){
      this.produtoService.adicionarHistoricoNavegacao(this.palavraPesquisada);
      this.router.navigate(['/pesquisar', this.palavraPesquisada, 0]);
    }
  }
}
