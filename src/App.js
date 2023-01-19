import { ThemeProvider } from '@mui/material';
import { theme } from './context/theme';
import { AppRouter } from './router/AppRouter';

import "./styles/style.css"

function App() {
  return (
  
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;