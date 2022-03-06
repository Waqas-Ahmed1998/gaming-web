import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import Influencers from './components/pages/Influencers';
import Talents from './components/pages/Talents';
import Case from './components/pages/Case';
import About from './components/pages/About';
function App() {
  return (
    <Router>
      <div className=' bg-cover bg-no-repeat  '>
        <div>
          {<Navbar />}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/influencers'>
              <Influencers />
            </Route>
            <Route path='/talents'>
              <Talents />
            </Route>
            <Route path='/case'>
              <Case />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
          {
            // <Footer />
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
