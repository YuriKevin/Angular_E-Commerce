import { DetalhesProduto } from "./detalhes-produto";

export interface DetalhesPreConfigurados {
    id:number;
    titulo:string;
    detalhes:DetalhesProduto[];
}