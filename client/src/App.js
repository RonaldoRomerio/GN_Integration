import './App.css';
import GlobalStyles from './styles/global.js'
import Routes from './Router';
import ThemeProviderContext from './contexts/ThemeContext.js';
import SwalProviderContext from './contexts/SwalContext';

import Header from './components/Header';
import AuthProviderContext from './contexts/AuthContext';

function App() {
  return (
    <AuthProviderContext>
      <ThemeProviderContext>
        <SwalProviderContext>
          <GlobalStyles/>
          <div className="App">
            <Routes/>
          </div>
        </SwalProviderContext>
      </ThemeProviderContext>
    </AuthProviderContext>
  );
}

export default App;
