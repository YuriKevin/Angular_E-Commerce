export interface ProdutoComprado {
    id:number;
    produtoId:number;
    titulo:string;
    nomeLoja:string;
    nomeUsuario:string;
    valor:number;
    imagem:string;
    quantidade:number;
    avaliado:boolean;
    cancelado:boolean;
}