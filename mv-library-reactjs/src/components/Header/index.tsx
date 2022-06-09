import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import './styles.css';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className="title_header">
                    Minha Biblioteca Virtual
                </Typography>
            </Toolbar>
      </AppBar>
    )
}