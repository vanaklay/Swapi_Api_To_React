import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import CharactersPage from './pages/characters-page/CharactersPage';
import CharacterDetailsPage from './pages/character-details-page/CharacterDetailsPage';
import PlanetDetailsPage from './pages/planet-details-page/PlanetDetailsPage';
import PlanetsPage from './pages/planets-page/PlanetsPage';
import FilmsPage from './pages/films-page/FilmsPage';
import FilmDetailsPage from './pages/film-details-page/FilmDetailsPage';
import SpeciesPage from './pages/species-page/SpeciesPage';
import SpecieDetailsPage from './pages/specie-details-page/SpecieDetailsPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/people/' component={CharactersPage} />
        <Route path='/people/:id' component={CharacterDetailsPage} />
        <Route exact path='/planets/' component={PlanetsPage} />
        <Route path='/planets/:page' component={PlanetDetailsPage} />
        <Route exact path='/films/' component={FilmsPage} />
        <Route path='/films/:id' component={FilmDetailsPage} />
        <Route exact path='/species/' component={SpeciesPage} />
        <Route path='/species/:id' component={SpecieDetailsPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
