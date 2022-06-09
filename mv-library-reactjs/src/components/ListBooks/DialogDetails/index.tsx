
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ItemDetails from './ItemDetails';

import { BooksServices } from '../../../services/books.services';

import { IBooks } from '../../../services/books.types';
import { IDialogDetailsProps } from './dialogdetails.types';

export default function DialogDetails({
    open,
    idBook,
    setOpen
}: IDialogDetailsProps) {
    const [book, setBook] = useState<IBooks>();

    const onClosed = () => {
        setOpen(false);
    }

    useEffect(() => {
        if (open && idBook) {
            BooksServices.showBook(idBook)
            .then(({ data }) => {
                setBook(data)
            })
            .catch(console.log);
        }
    }, [open, idBook])
    
    return (
        <Dialog
            open={open}
            onClose={onClosed}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle className="dialog_title">
                <Typography className="text_dialog_title">Detalhes</Typography>
            </DialogTitle>

            <DialogContent dividers>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={10}>
                        <ItemDetails
                            title="Nome:"
                            value={book ? book.nome : '-'}
                        />
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <ItemDetails
                            title="Nº de Páginas:"
                            value={book ? book.quantidade_de_paginas : '-'}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <ItemDetails
                            title="Autor:"
                            value={book ? book.autor : '-'}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <ItemDetails
                            title="Categoria:"
                            value={book ? book.categoria : '-'}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <ItemDetails
                            title="Data de Publicação:"
                            value={book ? book.data_de_publicacao : '-'}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <ItemDetails
                            title="Imagem de Capa:"
                            value={book ? book.capa_do_livro : '-'}
                            isImg
                        />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
