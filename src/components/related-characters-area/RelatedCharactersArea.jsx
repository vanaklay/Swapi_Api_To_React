import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestArrayOfCharacters } from '../../redux/related-characters/RelatedCharactersActions';
import Spinner from '../spinner/Spinner';
import { AreaContainer, AreaHeader } from '../related-items-area-styles/RelatedItemsArea.styles';

const RelatedCharactersArea = ({ onRequestArray, relatedItems, charactersArray }) => {
    useEffect(() => {
        if (relatedItems) {
            onRequestArray(relatedItems)
        }
    }, [onRequestArray, relatedItems]);
    return (
            <AreaContainer>
                <AreaHeader>Personnages du film</AreaHeader>
                { charactersArray ? (
                    charactersArray.map(character => <p key={character.name} >{ character.name }</p>) 
                    ) : (
                        <Spinner/>
                    ) }
            </AreaContainer>
        );
};

const mapStateToProps = state => ({
    charactersArray: state.charactersArray.arrayCharacters
});

const mapDispatchToProps = dispatch => ({
    onRequestArray: (relatedItems) => dispatch(requestArrayOfCharacters(relatedItems))
});

export default connect(mapStateToProps, mapDispatchToProps)(RelatedCharactersArea);