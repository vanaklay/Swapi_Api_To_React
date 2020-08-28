import React, { useEffect } from 'react';
import { useParams, Redirect, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

import CharacterDescriptionCard from '../../components/character-description-card/CharacterDescriptionCard';
// import RelatedMoviesArea from '../../components/related-movies-area/RelatedMoviesArea';
// import RelatedVehiculesArea from '../../components/related-vehicules/RelatedVehiculesArea';
// import RelatedStarshipsArea from '../../components/related-starships-area/RelatedStarshipsArea';
import RelatedItemsArea from '../../components/related-items-area/RelatedItemsArea';
import Spinner from '../../components/spinner/Spinner';
import NavDetails from '../../components/navigation-bars/NavDetails';

import { CharacterDetailContainer, AreasContainer } from './CharacterDetailsPage.styles';

import { requestOneCharacter } from '../../redux/description-character/DescriptionCharacterAction';

const CharacterDetailsPage = ({ character, onRequestOneCharacter, errorMessage }) => {
    const id = useParams().id;
    const url = useRouteMatch().url.split('/')[1];
    const imageUrl = id + '.jpg';

    useEffect(() => {
        onRequestOneCharacter(id);
    },[id, onRequestOneCharacter]);

    if (character) {
        return (
            <CharacterDetailContainer>
                <NavDetails 
                    url={url}
                    />
                <CharacterDescriptionCard id={id} imageUrl={imageUrl} character={character} />
                <AreasContainer>
                    <RelatedItemsArea relatedItems={character.films} category='films'>Films</RelatedItemsArea>
                    <RelatedItemsArea relatedItems={character.vehicles} category='vehicles'>Véhicules</RelatedItemsArea>
                    <RelatedItemsArea relatedItems={character.starships} category='starships'>Vaisseaux</RelatedItemsArea>
                </AreasContainer>
            </CharacterDetailContainer>);
    } else if (errorMessage) {
        return <Redirect to='/404' />;
    } else {
        return <Spinner />;
    }
};
const mapStateToProps = state => ({
    character: state.description.character,
    errorMessage: state.description.errorMessage
});
const mapDispatchToProps = dispatch => ({
    onRequestOneCharacter: (id) => dispatch(requestOneCharacter(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsPage);