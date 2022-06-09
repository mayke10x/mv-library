import React from "react";

import { IBooks } from '../../../services/books.types';

export interface IDialogDetailsProps {
    open: boolean;
    idBook: number | undefined;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}