import './App.css';
import {ThemeProvider} from 'styled-components';
import {darkTheme, LightTheme} from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import Menu from './components/Menu'
import PgFatura from './pages/PgFatura';
function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles/>
      <div className="App">
        <Menu/>
        <PgFatura/>
      </div>
    </ThemeProvider>
  );
}

export default App;
