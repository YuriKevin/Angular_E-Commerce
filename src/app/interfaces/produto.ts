import { DetalhesProduto } from "./detalhes-produto";

export interface Produto {
    id:number;
    titulo:string;
    valor:number;
    imagens: string[];
    detalhes: DetalhesProduto[];
    quantidade:number;
    quantidadeVendida:number;
    avaliacao:number;
    disponivel:boolean;
}
