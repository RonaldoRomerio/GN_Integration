import './App.css';
import {ThemeProvider} from 'styled-components';
import {darkTheme, LightTheme} from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import Input from './components/Input';
import {Form} from '@unform/web'
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles/>
      <div className="App">
        <Form>
          <Input nome="nome" classe="tam4" label="nome"/>
          <Input nome="nome" classe="tam4" label="nome"/>
          <Input nome="nome" classe="tam4" label="nome"/>
          <Input nome="nome" classe="tam4" label="nome"/>
        </Form>
      </div>
    </ThemeProvider>
  );
}

export default App;
