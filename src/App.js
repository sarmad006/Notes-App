import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Create from './pages/create';
import Home from './pages/home';
import {ThemeProvider,createTheme} from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Layouts from './components/layout';

const theme=createTheme({
  palette:{
    info:{
      main:"#fefefe"
    },
    primary: purple
  },
  typography:{
    fontFamily: "Quicksand"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layouts>
      <Switch>
        <Route exact path='/'>
           <Home />
        </Route>
        <Route path='/create'>
              <Create />
        </Route>
      </Switch>
      </Layouts>
    </Router>
    </ThemeProvider>
  );
}

export default App;
