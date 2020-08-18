import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CharactersPage from './pages/characters-page/CharactersPage';
import CharactersDetailsPage from './pages/character-details-page/CharacterDetailsPage';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/characters/' component={CharactersPage} />
        <Route path='/characters/:id' component={CharactersDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
