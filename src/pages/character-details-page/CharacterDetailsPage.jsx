import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchOneCharacter } from '../../redux/actions';

import CharacterDescriptionCard from '../../components/character-description-card/CharacterDescriptionCard';
import RelatedArea from '../../components/related-area/RelatedArea';
import Spinner from '../../components/spinner/Spinner';

import { CharacterDetailContainer, AreasContainer } from './CharacterDetailsPage.styles';


const CharacterDetailsPage = ({ people, fetchOneCharacter, errorMessage, history }) => {
    const id = useParams().id;
    const imageUrl = id + '.jpg';
    useEffect(() => {
        fetchOneCharacter(id);
    },[id, fetchOneCharacter]);

    const renderCharacterView = () => {
        if (people) {
            return (
                <Fragment>
                    <CharacterDescriptionCard people={people} imageUrl={imageUrl} />
                    <AreasContainer>
                        <RelatedArea relatedProps={people.films}>Films</RelatedArea>
                        <RelatedArea relatedProps={people.vehicles}>Véhicules</RelatedArea>
                        <RelatedArea relatedProps={people.starships}>Vaisseaux</RelatedArea>
                    </AreasContainer>
                </Fragment>
            );
        } else {
            return <Spinner />;
        }
    }
    return (
        <CharacterDetailContainer>
            { errorMessage 
                ? (history.push('/'))
                : renderCharacterView() 
            }
        </CharacterDetailContainer>
    );
};

const mapStateToProps = state => ({
    people: state.characters.oneCharacter,
    errorMessage: state.characters.errorMessage
});
export default connect(mapStateToProps, { fetchOneCharacter })(CharacterDetailsPage);