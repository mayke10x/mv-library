import api from '.';

import { IBooks } from './books.types';

export class BooksServices {
    public static async getListBooks() {
        return await api.get<IBooks[]>('/books/');
    }

    public static async showBook(idBook: number) {
        return await api.get<IBooks>(`/books/${idBook}/`);
    }

    public static async postBook(values: Omit<IBooks, 'id' | 'url'>) {
        const formData = new FormData();
        formData.append('nome', values.nome);
        formData.append('autor', values.autor);
        formData.append('categoria', values.categoria);
        formData.append('quantidade_de_paginas', values.quantidade_de_paginas.toString());
        formData.append('data_de_publicacao', values.data_de_publicacao.toString());
        formData.append('capa_do_livro', values.capa_do_livro!);

        return await api.post<IBooks>('/books/', formData);
    }

    public static async updateBook(values: Omit<IBooks, 'url'>) {
        const formData = new FormData();

        if (values.nome) {
            formData.append('nome', values.nome);
        }

        if (values.autor) {
            formData.append('autor', values.autor);
        }

        if (values.categoria) {
            formData.append('categoria', values.categoria);
        }

        if (values.quantidade_de_paginas) {
            formData.append('quantidade_de_paginas', values.quantidade_de_paginas.toString());
        }

        if (values.data_de_publicacao) {
            formData.append('data_de_publicacao', values.data_de_publicacao.toString());
        }

        if (values.capa_do_livro) {
            formData.append('capa_do_livro', values.capa_do_livro!);
        }

        return await api.put<IBooks>(`/books/${values.id}/`, formData);
    }

    public static async deleteBook(idBook: number) {
        return await api.delete<IBooks>(`/books/${idBook}/`);
    }
}