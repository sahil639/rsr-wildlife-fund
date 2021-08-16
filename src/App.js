import './App.css';
import NavMenu from './components/NavMenu';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavMenu />
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      
    </Router>
           
  );
}

export default App;
