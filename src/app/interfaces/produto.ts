import { DetalhesProduto } from "./detalhes-produto";

export interface Produto {
    id:number;
    titulo:string;
    valor:number;
    categoria:string;
    nomeLoja:string;
    imagens: string[];
    detalhes: DetalhesProduto[];
    quantidade:number;
    quantidadeVendida:number;
    avaliacao:number;
    disponivel:boolean;
    lojaId:boolean;
}