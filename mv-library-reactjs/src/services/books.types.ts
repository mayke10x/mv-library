export interface IBooks {
    id: number;
    url: string;
    nome: string
    categoria: string;
    autor: string;
    capa_do_livro: File | undefined;
    data_de_publicacao: Date;
    quantidade_de_paginas: number;
}