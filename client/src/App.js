import './App.css';
import GlobalStyles from './styles/global.js'
import Rotas from './Routes';
import ThemeProviderContext from './contexts/ThemeContext.js';
import SwalProviderContext from './contexts/SwalContext';

import Header from './components/Header';

function App() {
  return (
    <ThemeProviderContext>
      <SwalProviderContext>
        <GlobalStyles/>
        <Header/>
        <div className="App">
          <Rotas/>
        </div>
      </SwalProviderContext>
    </ThemeProviderContext>
  );
}

export default App;
