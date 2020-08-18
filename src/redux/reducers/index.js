import { combineReducers } from 'redux';
import CharactersReducers from './CharactersReducers';

export default combineReducers({
    characters: CharactersReducers
});