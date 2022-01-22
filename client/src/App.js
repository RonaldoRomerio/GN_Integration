import './App.css';
import {ThemeProvider} from 'styled-components';
import {darkTheme, LightTheme} from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import Menu from './components/Menu'
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles/>
      <div className="App">
        <Menu/>
      </div>
    </ThemeProvider>
  );
}

export default App;
