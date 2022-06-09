export interface IBookDataTable {
    id: number;
    url: string;
    nome: string
    categoria: string;
    autor: string;
    capa_do_livro: string;
    data_de_publicacao: Date;
    quantidade_de_paginas: number;
    btnActions: JSX.Element;
}

export interface IDatatableProps {
    values: IBookDataTable[]
}