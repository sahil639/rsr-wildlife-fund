import './App.css';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavMenu />
    </Router>     
  );
}

export default App;
