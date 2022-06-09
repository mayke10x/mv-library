import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IItemDetailsProps } from './itemdetails.types';

import './styles.css';

export default function ItemDetails({
    title,
    value,
    isImg
}: IItemDetailsProps) {
    return (
        <Box className="item_details">
            <Typography className="title_item_details">{title}</Typography>

            {
                isImg ? (
                    <img
                        src={value}
                        alt="Prévia da imagem de capa do livro"
                        className="preview_img"
                    />
                ) : (
                    <Typography className="value_item_details">{value}</Typography>
                )
            }
        </Box>
    )
}