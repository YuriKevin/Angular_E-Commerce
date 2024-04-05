import { Categoria } from "./categoria";

export interface Loja {
    id:number;
    codigoLogin:number;
    nome:string;
    senha:string;
    credito:number;
    quantidadeVendida:number;
    logo:string;
    categorias:Categoria[];
    avaliacao:number;
}