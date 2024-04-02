import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Loja } from '../interfaces/loja';
import { DetalhesProduto } from '../interfaces/detalhes-produto';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private apiURL = "http://localhost:8080/";

  loja!:Loja;

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private router:Router) {
    this.login(1111, "1234").subscribe({
      next: (loja:Loja) => {
        this.setLoja(loja);
      },
      error: (error) => {
        
      }
    });

  }

  getLoja():Loja{
    return this.loja;
  }

  setLoja(loja:Loja){
    this.loja = loja;
  }
  
  cadastrar(codigoLogin:number, nome:string, senha:string, logo: string): Observable<any> {
        return this.httpClient.post<any>(this.apiURL + 'loja', { codigoLogin, nome, senha, logo })
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

    login(codigoLogin:number, senha:string): Observable<any>{
      const params = new HttpParams()
          .set('codigoLogin', codigoLogin)
          .set('senha', senha);
          return this.httpClient.get(this.apiURL + 'loja/login', { params })
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

      cadastrarProduto(titulo:string, valor:number, quantidade:number, categoria: string, imagens:string[], detalhes:DetalhesProduto[], disponivel:boolean): Observable<any> {
        const lojaId:number = this.loja.id;
        return this.httpClient.post<any>(this.apiURL + 'produto', { titulo, valor, quantidade, categoria, imagens, detalhes, disponivel, lojaId })
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
      
}
