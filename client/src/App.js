import './App.css';
import GlobalStyles from './styles/global.js'
import Rotas from './Routes';
import ThemeProviderContext from './contexts/ThemeContext.js';
import Header from './components/Header';

function App() {
  return (
    <ThemeProviderContext>
      <GlobalStyles/>
      <Header/>
      <div className="App">
        <Rotas/>
      </div>
    </ThemeProviderContext>
  );
}

export default App;
