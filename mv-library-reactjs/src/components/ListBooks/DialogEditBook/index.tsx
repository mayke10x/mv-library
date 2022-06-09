
import { useEffect, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { BooksServices } from '../../../services/books.services';

import { IBooks } from '../../../services/books.types';
import { IDialogNewBookProps } from './dialognewbook.types';

export default function DialogEditBook({
    idBook,
    open,
    reload,
    setOpen,
    setReload
}: IDialogNewBookProps) {
    const [bookDataForm, setBookDataForm] = useState({
        nome: '',
        autor: '',
        categoria: '',
        capa_do_livro: undefined,
        data_de_publicacao: new Date(),
        quantidade_de_paginas: 0
    });

    const onChangeBookDataForm = (position: keyof typeof bookDataForm, value: unknown) => {
        setBookDataForm(oldValues => ({
            ...oldValues,
            [position]: value
        }))
    }

    const onClosed = () => {
        setOpen(false);
    }

    const onSave = () => {
        BooksServices.updateBook({
            ...bookDataForm,
            id: idBook!
        })
        .then(() => {
            alert('Livro Atualizado');
            setReload(!reload);
            onClosed();
        })
        .catch(console.log)
    }

    const onValidateForm = (event: React.FormEvent) => {
        event.preventDefault();

        if (!idBook) {
            alert('A identificação do livro é obrigatório');
            return;
        }
        
        if (!bookDataForm.nome) {
            alert('O campo de nome é obrigatório');
            return;
        }

        if (!bookDataForm.autor) {
            alert('O campo de autor é obrigatório');
            return;
        }

        if (!bookDataForm.categoria) {
            alert('O campo de categoria é obrigatório');
            return;
        }

        if (!bookDataForm.quantidade_de_paginas) {
            alert('O campo de nº de páginas é obrigatório');
            return;
        }

        if (!bookDataForm.data_de_publicacao) {
            alert('O campo de data de publicação é obrigatório');
            return;
        }

        if (!bookDataForm.capa_do_livro) {
            alert('O campo de imagem da capa do livro é obrigatório');
            return;
        }

        onSave();
    }

    useEffect(() => {
        if (open && idBook) {
            BooksServices.showBook(idBook)
            .then(({ data }) => {
                setBookDataForm({
                    ...data,
                    capa_do_livro: undefined
                })
            })
            .catch(console.log);
        }
    }, [open, idBook])

    return (
        <Dialog
            open={open}
            onClose={onClosed}
            fullWidth
            maxWidth="sm"
        >
            <form onSubmit={onValidateForm}>
                <DialogTitle className="dialog_title">
                    <Typography className="text_dialog_title">Editar Livro</Typography>
                </DialogTitle>
            
                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Nome:"
                                value={bookDataForm.nome}
                                onChange={(e) => onChangeBookDataForm('nome', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Autor:"
                                value={bookDataForm.autor}
                                onChange={(e) => onChangeBookDataForm('autor', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Categoria:"
                                value={bookDataForm.categoria}
                                onChange={(e) => onChangeBookDataForm('categoria', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Nº de Páginas:"
                                value={bookDataForm.quantidade_de_paginas}
                                onChange={(e) => onChangeBookDataForm('quantidade_de_paginas', e.target.value)}
                                type="number"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography>Data de publicação:</Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="date"
                                value={bookDataForm.data_de_publicacao}
                                onChange={(e) => onChangeBookDataForm('data_de_publicacao', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography>Imagem de Capa:</Typography>
                            <input
                                type="file"
                                onChange={(e: any) => {
                                    onChangeBookDataForm(
                                        'capa_do_livro',
                                        e.target.files[0]
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        className="btn_new_book"
                        type="submit"
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}