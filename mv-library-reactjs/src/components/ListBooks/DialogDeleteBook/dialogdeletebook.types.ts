export interface IDialogDeleteBookProps {
    idBook: number | undefined;
    open: boolean;
    reload: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setReload: React.Dispatch<React.SetStateAction<boolean>>
}