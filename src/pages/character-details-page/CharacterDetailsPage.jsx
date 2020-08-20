import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CharacterDescriptionCard from '../../components/character-description-card/CharacterDescriptionCard';
import RelatedArea from '../../components/related-area/RelatedArea';
import Spinner from '../../components/spinner/Spinner';

import { CharacterDetailContainer, AreasContainer } from './CharacterDetailsPage.styles';

import { requestOneCharacter } from '../../redux/description-character/DescriptionCharacterAction';

const CharacterDetailsPage = ({ character, onRequestOneCharacter, errorMessage }) => {
    const id = useParams().id;
    const imageUrl = id + '.jpg';

    useEffect(() => {
        onRequestOneCharacter(id);
    },[id, onRequestOneCharacter]);

    const renderCharacterDetails = () => {
        if (character) {
            return (<CharacterDetailContainer>
                <CharacterDescriptionCard id={id} imageUrl={imageUrl} character={character} />
                <AreasContainer>
                    <RelatedArea relatedItems={character.films}>Films</RelatedArea>
                    <RelatedArea relatedItems={character.vehicles}>Véhicules</RelatedArea>
                    <RelatedArea relatedItems={character.starships}>Vaisseaux</RelatedArea>
                </AreasContainer>
            </CharacterDetailContainer>);
        } else if (errorMessage) {
            return <Redirect to='/characters' />;
        } else {
            return <Spinner />;
        }
    };

    return renderCharacterDetails();
};
const mapStateToProps = state => ({
    character: state.description.character,
    errorMessage: state.description.errorMessage
});
const mapDispatchToProps = dispatch => ({
    onRequestOneCharacter: (id) => dispatch(requestOneCharacter(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsPage);