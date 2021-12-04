// Import base react dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Bootstrap
import { Container, Image } from 'react-bootstrap';
// Personal dependencies
import PeoplePage from './techforequity/TFEPeople';
import ProjectsPage from './techforequity/TFEProjects';
import TechForEquity from './techforequity/TechForEquity';
import FAQPage from './techforequity/TFEFAQ';

class App extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={TechForEquity} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/FAQ" component={FAQPage} />
      </BrowserRouter>
    );
  }
}

export default App;
