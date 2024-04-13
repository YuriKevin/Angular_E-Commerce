import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../interfaces/produto';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiURL = "http://localhost:8080/";
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

  limparCarrinho(): void {
    this.carrinho = [];
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
    const numerosIds: number[] = [1, 2, 3];
    const ids: string = numerosIds.join(',');
    let params = new HttpParams();
    params = params.append('ids', ids);
    return this.httpClient.get<Produto>(this.apiURL + 'produto/destaques', { params })
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


  getCarrinho(){
    return this.carrinho;
  }
  adicionarProdutoCarrinho(produto:Produto){
    const index = this.carrinho.findIndex(item => item.id === produto.id);
    if (index !== -1) {
      this.carrinho[index].quantidade += produto.quantidade;
    }
    else{
      this.carrinho.push(produto);
    }
  }

  removerProdutoCarrinho(produto:Produto){
    const index = this.carrinho.findIndex(item => item.id === produto.id);
    if (index !== -1) {
      this.carrinho.splice(index, 1);
    }
  }

  adicionarHistoricoNavegacao(palavraPesquisada:string){
    if (palavraPesquisada.endsWith(' ')) {
      palavraPesquisada = palavraPesquisada.trimEnd();
    }
    if (!this.historicoNavegacao.includes(palavraPesquisada)) {
      this.historicoNavegacao.push(palavraPesquisada);
    }
  }

  temHistorico():boolean{
    if(this.historicoNavegacao.length==0){
      return false
    }
    return true;
  }

  pesquisarHistorico(): Observable<any> {
    const params = new HttpParams()
          .set('palavrasPesquisadas', this.historicoNavegacao.join(','));
    return this.httpClient.get<Produto>(this.apiURL + 'produto/historico', { params })
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

  pesquisarProdutos(titulo:string, pagina:number): Observable<Produto[]> {
    const params = new HttpParams().set('pagina', pagina.toString());
    return this.httpClient.get<Produto[]>(`${this.apiURL}produto/titulo/${titulo}`, { params })
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

  recentes(): Observable<any> {
    return this.httpClient.get<Produto[]>(this.apiURL + 'produto/recentes')
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

  produtosAmazing(): Observable<any> {
    return this.httpClient.get<Produto>(this.apiURL + 'produto/amazing')
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

  pesquisarProdutosDeUmaLoja(lojaId:number, pagina:number): Observable<Produto[]> {
    const params = new HttpParams().set('pagina', pagina.toString());
    return this.httpClient.get<Produto[]>(`${this.apiURL}produto/loja/${lojaId}`, { params })
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

  pesquisarProdutosDeUmaLojaPorTitulo(lojaId:number, titulo:string, pagina:number): Observable<Produto[]> {
    const params = new HttpParams()
    .set('pagina', pagina.toString())
    .set('titulo', titulo);
    return this.httpClient.get<Produto[]>(`${this.apiURL}produto/loja/titulo/${lojaId}`, { params })
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

  pesquisarPorCategoria(categoria:string, pagina:number): Observable<Produto[]> {
    const params = new HttpParams().set('pagina', pagina.toString());
    return this.httpClient.get<Produto[]>(`${this.apiURL}produto/categoria/${categoria}`, { params })
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
