import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchOneCharacter } from '../../redux/actions';

import CharacterDescriptionCard from '../../components/character-description-card/CharacterDescriptionCard';

import Spinner from '../../components/spinner/Spinner';


const CharacterDetailsPage = ({ people, fetchOneCharacter }) => {
    const id = useParams().id;
    useEffect(() => {
        fetchOneCharacter(id);
    },[id, fetchOneCharacter]);

    function renderCharacterPreview() {
        if (people) {
            return (
                <CharacterDescriptionCard people={people} />
                );
        } else {
            return <Spinner />;
        }
    };

    console.log(people);
    return (
        <div>
            { renderCharacterPreview() }
        </div>
    );
};

const mapStateToProps = state => ({
    people: state.characters.oneCharacter
});
export default connect(mapStateToProps, { fetchOneCharacter })(CharacterDetailsPage);