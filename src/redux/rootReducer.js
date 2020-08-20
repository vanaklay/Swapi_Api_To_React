import { combineReducers } from 'redux';

import RelatedItemsReducers from './related-items/RelatedItemsReducers';
import CharactersReducers from './characters/CharactersReducers';
import DescriptionCharacterReducers from './description-character/DescriptionCharacterReducers';

const rootReducer = combineReducers({
    items: RelatedItemsReducers,
    characters: CharactersReducers,
    description: DescriptionCharacterReducers
});

export default rootReducer;