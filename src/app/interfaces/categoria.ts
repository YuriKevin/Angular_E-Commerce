import { Produto } from "./produto";

export interface Categoria {
    id:number;
    titulo:string;
    produtos:Produto[];
}
