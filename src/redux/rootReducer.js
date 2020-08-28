import { combineReducers } from 'redux';

import RelatedMoviesReducers from './related-movies/RelatedMoviesReducers';
import RelatedVehiculesReducers from './related-vehicules/RelatedVehiculesReducers';
import RelatedStarshipsReducers from './related-starships/RelatedStarshipsReducers';
import RelatedCharactersReducers from './related-characters/RelatedCharactersReducers';
import RelatedPlanetsReducers from './related-planets/RelatedPlanetsReducers';
import CharactersReducers from './characters/CharactersReducers';
import DescriptionCharacterReducers from './description-character/DescriptionCharacterReducers';
import PlanetsReducers from './planets/PlanetsReducers';
import FilmsReducers from './films/FilmsReducers';

const rootReducer = combineReducers({
    movies: RelatedMoviesReducers,
    starships: RelatedStarshipsReducers,
    vehicles: RelatedVehiculesReducers,
    charactersArray: RelatedCharactersReducers,
    planetsArray: RelatedPlanetsReducers,
    characters: CharactersReducers,
    description: DescriptionCharacterReducers,
    planets: PlanetsReducers,
    films: FilmsReducers
});

export default rootReducer;