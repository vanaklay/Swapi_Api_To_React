import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CharactersPage from './pages/characters-page/CharactersPage';
import CharacterDetailsPage from './pages/character-details-page/CharacterDetailsPage';
import PlanetDetailsPage from './pages/planet-details-page/PlanetDetailsPage';
import PlanetsPage from './pages/planets-page/PlanetsPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/characters/' component={CharactersPage} />
        <Route path='/characters/:id' component={CharacterDetailsPage} />
        <Route exact path='/planets/' component={PlanetsPage} />
        <Route path='/planets/:page' component={PlanetDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
