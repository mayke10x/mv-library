import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

import App from './App';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";        
 
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
