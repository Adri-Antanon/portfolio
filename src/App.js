import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

import './App.scss';
import PortfoliosPage from './pages/PortfoliosPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App" >
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/blog" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
