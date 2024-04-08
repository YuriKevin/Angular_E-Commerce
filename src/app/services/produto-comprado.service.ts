import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../interfaces/produto';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoCompradoService {
  private apiURL = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private router:Router) {
  }

  novaCompra(id:number, produtosArray:Produto[]): Observable<any> {
    const produtos: { produtoId: number, quantidade: number }[] = [];
    produtosArray.forEach(produto => {
      const { id: produtoId, quantidade } = produto;
      produtos.push({ produtoId, quantidade });
    });
    console.log(produtos);
    return this.httpClient.post<any>(`${this.apiURL}compra/${id}`, produtos)
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

  carregarCompras(usuarioId:number, pagina:number): Observable<any> {
    const params = new HttpParams().set('pagina', pagina);
    return this.httpClient.get<any>(`${this.apiURL}compra/usuario/${usuarioId}`, { params })
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

  carregarVendasDeUmaLoja(lojaId:number, pagina:number): Observable<any> {
    const params = new HttpParams().set('pagina', pagina);
    return this.httpClient.get<any>(`${this.apiURL}compra/loja/${lojaId}`, { params })
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

  avaliarProduto(id:number, avaliacao:number): Observable<any> {
    const params = new HttpParams().set('avaliacao', avaliacao);
    return this.httpClient.put<any>(`${this.apiURL}compra/avaliarProduto/${id}`, {}, { params })
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

  encontrarProdutoComprado(id:number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}compra/produto/${id}`)
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
