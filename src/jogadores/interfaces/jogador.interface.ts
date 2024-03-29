import { Document } from "mongoose";

export interface Jogador extends Document {
    readonly email: string;
    telefone: string;
    nome: string;
    ranking: string;
    posicaoRanking: number;
    urlFotoJogador: string;
}