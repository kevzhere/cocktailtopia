import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cocktail from './pages/Cocktail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/cocktail/:id'><Cocktail/></Route>
        <Route path='*'><Error/></Route>
      </Switch>
    </Router>
  );
}

export default App;
