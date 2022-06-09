
import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { BooksServices } from '../../../services/books.services';

import { IDialogDeleteBookProps } from './dialogdeletebook.types';

export default function DialogDeleteBook({
    idBook,
    open,
    reload,
    setOpen,
    setReload
}: IDialogDeleteBookProps) {
    const [confirmKey, setConfirmKey] = useState('');

    const onClosed = () => {
        setOpen(false);
    }

    const onDelete = () => {
        BooksServices.deleteBook(idBook!)
        .then(() => {
            alert('Livro Excluído');
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

        if (confirmKey !== 'confirmo') {
            alert('Digite corretamente a palavra-chave.');
            return;
        }

        onDelete();
    }

    return (
        <Dialog
            open={open}
            onClose={onClosed}
            fullWidth
            maxWidth="sm"
        >
            <form onSubmit={onValidateForm}>
                <DialogTitle className="dialog_title">
                    <Typography className="text_dialog_title">Deletar Livro</Typography>
                </DialogTitle>
            
                <DialogContent dividers>
                    <Alert severity="warning">
                        <AlertTitle>Importante antes de excluir</AlertTitle>

                        Ao confirmar os dados serão permanentemente deletados.
                        Não será possível recuperá-los e para confirmar a exclusão
                        digite a palavra-chave <b>confirmo</b> na caixa de texto abaixo.
                    </Alert>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Palavra-chave:"
                                placeholder="Digite aqui a palavra-chave"
                                value={confirmKey}
                                onChange={(e) => setConfirmKey(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant="contained"
                        className="btn_new_book"
                        type="submit"
                        disabled={confirmKey !== 'confirmo'}
                    >
                        Confirmar
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}