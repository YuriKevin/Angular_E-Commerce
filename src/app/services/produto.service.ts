import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../interfaces/produto';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiURL = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient, private router:Router) {
  }
  
  encontrarPorId(id: number): Observable<any> {
    return this.httpClient.get<Produto>(this.apiURL + 'produto/' + id)
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

  maisVendidos(): Observable<any> {
    return this.httpClient.get<Produto>(this.apiURL + 'produto/top')
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

  produtosDestaque(): Observable<any> {
    return this.httpClient.get<Produto>(this.apiURL + 'produto/destaques')
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
