import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Dessert from './Components/Dessert';
import About from './Components/About';
import Contact from './Components/Contact';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/dessert" exact component={Dessert} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
