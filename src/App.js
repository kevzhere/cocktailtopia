import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='*'><Error/></Route>
      </Switch>
    </Router>
  );
}

export default App;
