import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loja } from 'src/app/interfaces/loja';
import { Usuario } from 'src/app/interfaces/usuario';
import { LojaService } from 'src/app/services/loja.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  palavraPesquisada!:string;
  usuario!:Usuario;
  loja!:Loja;
  categorias:boolean = false;
  
  constructor(private produtoService: ProdutoService, private lojaService: LojaService, private router: Router, private usuarioService:UsuarioService){}

  ngOnInit(): void {
      this.usuario = this.usuarioService.getUsuario();
      this.loja = this.lojaService.getLoja();
  }

  pesquisar(){
    if(this.palavraPesquisada && this.palavraPesquisada !=''){
      this.produtoService.adicionarHistoricoNavegacao(this.palavraPesquisada);
      this.router.navigate(['/pesquisar', this.palavraPesquisada, 0]);
    }
  }

  abrirCategorias(){
    if(!this.categorias){
      this.categorias = true;
    }else{
      this.categorias = false;
    }
    
  }
}
