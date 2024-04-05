import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoComprado } from 'src/app/interfaces/produto-comprado';
import { Usuario } from 'src/app/interfaces/usuario';
import { ProdutoCompradoService } from 'src/app/services/produto-comprado.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['../../../shared/paginacao/paginacao.component.css','./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit{
  usuario!:Usuario;
  produtosComprados!:ProdutoComprado[];
  avaliacao:boolean = false;
  produtoAvaliado!:ProdutoComprado;
  valorAvaliacao!: number;
  pagina:number = 0;
  mostrarPaginacao: boolean = true;

  constructor(private router:Router, private usuarioService:UsuarioService, private produtoCompradoService:ProdutoCompradoService){

  }

  ngOnInit(): void {
    
      this.usuario = this.usuarioService.getUsuario();
      if(!this.usuario){
        this.router.navigate(['/loginUsuario', false]);
      }
      this.produtoCompradoService.carregarCompras(this.usuario.id, 0).subscribe({
        next: (produtos:ProdutoComprado[]) => {
          this.produtosComprados = produtos;
          console.log(this.produtosComprados);
          if(this.produtosComprados.length<18){
            this.mostrarPaginacao=false;
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
      
  }

  realizarAvaliacao(produto:ProdutoComprado){
    this.produtoAvaliado = produto;
    this.avaliacao = true;
  }

  avaliarProduto(){
    this.produtoCompradoService.avaliarProduto(this.produtoAvaliado.id, this.valorAvaliacao).subscribe({
      next: () => {
        this.produtoAvaliado.avaliado = true;
        console.log("Funcionou");
        this.avaliacao = false;

      },
      error: (error) => {
        this.avaliacao = false;
        console.log(error);
      }
    });
  }

  carregarMaisCompras(avancar:boolean){
    if(avancar){
      if(this.produtosComprados.length==18){
        this.pagina++;
        this.produtoCompradoService.carregarCompras(this.usuario.id, this.pagina).subscribe({
          next: (produtos:ProdutoComprado[]) => {
            this.produtosComprados = produtos;
            console.log(this.produtosComprados);
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    }
    else{
      if(this.pagina!=0){
        this.pagina--;
        this.produtoCompradoService.carregarCompras(this.usuario.id, this.pagina).subscribe({
          next: (produtos:ProdutoComprado[]) => {
            this.produtosComprados = produtos;
            console.log(this.produtosComprados);
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    }
    
  }


}
