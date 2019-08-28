import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
import ProjectPage from './Components/ProjectsPage/ProjectPage'
import ServicesPage from './Components/ServicesPage/ServicesPage'
import AboutPage from './Components/AboutPage/AboutPage'
import ContactPage from './Components/ContactPage/ContactPage'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/projects' component={ProjectPage} />
          <Route exact path='/services' component={ServicesPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
