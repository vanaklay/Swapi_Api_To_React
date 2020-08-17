import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CharactersPage from './pages/characters-page/CharactersPage';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Switch>
        <Route path='/characters' component={CharactersPage} />
      </Switch>
    </div>
  );
}

export default App;
