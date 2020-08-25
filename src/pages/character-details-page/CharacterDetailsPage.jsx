import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CharacterDescriptionCard from '../../components/character-description-card/CharacterDescriptionCard';
import RelatedMoviesArea from '../../components/related-movies-area/RelatedMoviesArea';
import RelatedVehiculesArea from '../../components/related-vehicules/RelatedVehiculesArea';
import RelatedStarshipsArea from '../../components/related-starships-area/RelatedStarshipsArea';
import Spinner from '../../components/spinner/Spinner';

import { CharacterDetailContainer, AreasContainer } from './CharacterDetailsPage.styles';

import { requestOneCharacter } from '../../redux/description-character/DescriptionCharacterAction';

const CharacterDetailsPage = ({ character, onRequestOneCharacter, errorMessage }) => {
    const id = useParams().id;
    const imageUrl = id + '.jpg';

    useEffect(() => {
        onRequestOneCharacter(id);
    },[id, onRequestOneCharacter]);

    if (character) {
        return (
            <CharacterDetailContainer>
                <CharacterDescriptionCard id={id} imageUrl={imageUrl} character={character} />
                <AreasContainer>
                    <RelatedMoviesArea relatedItems={character.films}>Films</RelatedMoviesArea>
                    <RelatedVehiculesArea relatedItems={character.vehicles}>Véhicules</RelatedVehiculesArea>
                    <RelatedStarshipsArea relatedItems={character.starships}>Vaisseaux</RelatedStarshipsArea>
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