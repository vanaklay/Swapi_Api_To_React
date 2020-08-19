import { combineReducers } from 'redux';
import CharactersReducers from './CharactersReducers';
import MoviesReducers from './MoviesReducers';

export default combineReducers({
    characters: CharactersReducers,
    movies: MoviesReducers
});