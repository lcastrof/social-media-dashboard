import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import Dashboard from './components/Dashboard';
import GlobalStyle from './styles/global';

function App () {
  const [theme, setTheme] = usePersistedState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard toggleTheme={toggleTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
