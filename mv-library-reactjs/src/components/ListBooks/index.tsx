import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Add from '@mui/icons-material/Add';
import Info from '@mui/icons-material/Info';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

import Loading from '../Loading';
import DialogNewBook from './DialogNewBook';
import DialogDetails from './DialogDetails';
import DialogEditBook from './DialogEditBook';
import DialogDeleteBook from './DialogDeleteBook';
import Datatable from './Datatable';

import { IBookDataTable } from './Datatable/datatable.types';

import { BooksServices } from '../../services/books.services';

import './styles.css';

export default function ListBooks() {
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [books, setBooks] = useState<IBookDataTable[] | []>([]);

    const [idBookSelected, setIdBookSelected] = useState<number>()

    const [openNewBook, setOpenNewBook] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [openEditBook, setOpenEditBook] = useState(false);
    const [openDeleteBook, setOpenDeleteBook] = useState(false);

    useEffect(() => {
        BooksServices.getListBooks()
        .then(({ data }) => {
            const returnFormated: any = data.map(book => {
                let getId: any = book.url.split('/books/');
                getId = getId[1].replace('/', '') as number;

                return {
                    ...book,
                    id: getId,
                    btnActions: (
                        <Box>
                            <IconButton
                                title="Detalhes do Livro"
                                onClick={() => {
                                    setIdBookSelected(getId);
                                    setOpenDetails(true);
                                }}
                            >
                                <Info style={{ color: 'var(--primary)' }}/>
                            </IconButton>

                            <IconButton
                                title="Editar Informações do Livro"
                                onClick={() => {
                                    setIdBookSelected(getId);
                                    setOpenEditBook(true);
                                }}
                            >
                                <Edit style={{ color: 'var(--info)' }}/>
                            </IconButton>

                            <IconButton
                                title="Deletar Livro"
                                onClick={() => {
                                    setIdBookSelected(getId);
                                    setOpenDeleteBook(true);
                                }}
                            >
                                <Delete style={{ color: 'var(--danger)' }}/>
                            </IconButton>
                        </Box>
                    )
                }
            });

            setBooks(returnFormated);
            setIsLoading(false);
        }).catch(console.log)
    }, [reload]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <Box className="list_books_content">
            <Typography className="title_list_books">Listagem de Livros</Typography>
            
            <Button
                variant="contained"
                className="btn_new_book"
                startIcon={<Add />}
                onClick={() => setOpenNewBook(true)}
            >
                Adicionar Livro
            </Button>

            <Datatable values={books} />

            {/* Dialogos */}
            <DialogNewBook
                open={openNewBook}
                setOpen={setOpenNewBook}
                reload={reload}
                setReload={setReload}
            />

            <DialogDetails
                open={openDetails}
                idBook={idBookSelected}
                setOpen={setOpenDetails}
            />

            <DialogEditBook
                idBook={idBookSelected}
                open={openEditBook}
                setOpen={setOpenEditBook}
                reload={reload}
                setReload={setReload}
            />

            <DialogDeleteBook
                idBook={idBookSelected}
                open={openDeleteBook}
                setOpen={setOpenDeleteBook}
                reload={reload}
                setReload={setReload}
            />
        </Box>
    )
}