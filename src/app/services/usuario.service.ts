import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = "http://localhost:8080/";

  usuario!:Usuario;
  carrinho: Produto[] = [];
  historicoNavegacao:string[] = [];
  produtosHistorico:Produto[] = [];


  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private router:Router) {
  }

  getUsuario():Usuario{
    return this.usuario;
  }

  setUsuario(usuario:Usuario){
    this.usuario = usuario;
  }

  getCarrinho(){
    return this.carrinho;
  }
  adicionarProdutoCarrinho(produto:Produto){
    this.carrinho.push(produto);
  }
  removerProdutoCarrinho(produto:Produto){
    this.carrinho.push(produto);
  }

  adicionarHistoricoNavegacao(palavraPesquisada:string){
    
  }

  getProdutosHistorico():Produto[]{
    return this.produtosHistorico;
  }

  temHistorico():boolean{
    if(this.historicoNavegacao.length==0){
      return false
    }
    return true;
  }

  
  
  cadastrar(email:string, nome:string, senha:string): Observable<any> {
        return this.httpClient.post<any>(this.apiURL + 'usuario', { email, nome, senha})
        .pipe(
          catchError((error: HttpErrorResponse) => {
            let errorMessage = 'Erro desconhecido';
            if (error.error instanceof ErrorEvent) {
              // Erro do cliente
              errorMessage = `Erro: ${error.error.message}`;
            } else {
              // Erro do servidor
              errorMessage = error.error.message;
            }
            return throwError(errorMessage);
          })
        );
    }

    login(email:string, senha:string): Observable<any>{
      const params = new HttpParams()
          .set('email', email)
          .set('senha', senha);
          return this.httpClient.get(this.apiURL + 'usuario/login', { params })
          .pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === 404) {
                return throwError('Nenhum usuário encontrado');
              } else if(error.status === 400) {
                return throwError('Usuário ou senha incorretos');
              }
              else {
                let errorMessage = 'Erro ao carregar usuário';
                if (error.error instanceof ErrorEvent) {
                  errorMessage = `Erro no cliente: ${error.error.message}`;
                } else {
                  errorMessage = `Erro no servidor, tente novamente mais tade.`;
                  errorMessage = `Erro no servidor, tente novamente mais tade: ${error.status}, `;
                }
                return throwError(errorMessage);
              }
            })
          );
      }



}
