import { useState } from 'react';
import './App.css';
import GlobalStyles from './styles/global.js'
import Menu from './components/Menu'
import PgFatura from './pages/PgFatura';
import ThemeProviderContext from './contexts/ThemeContext.js';
function App() {
  return (
    <ThemeProviderContext>
      <GlobalStyles/>
      <div className="App">
        <Menu/>
        <PgFatura/>
      </div>
    </ThemeProviderContext>
  );
}

export default App;
