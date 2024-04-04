import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
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
  
  constructor(private produtoService: ProdutoService, private router: Router, private usuarioService:UsuarioService){}

  ngOnInit(): void {
      this.usuario = this.usuarioService.getUsuario();
  }

  pesquisar(){
    if(this.palavraPesquisada && this.palavraPesquisada !=''){
      this.produtoService.adicionarHistoricoNavegacao(this.palavraPesquisada);
      this.router.navigate(['/pesquisar', this.palavraPesquisada, 0]);
    }
  }
}
