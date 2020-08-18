import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import { CharactersPageContainer, PreviewCard } from './CharactersPage.styles';

import { fetchAllCharacters } from '../../redux/actions';

const CharactersPage = ({ fetchAllCharacters, peoples }) => {
    useEffect(() => {
        fetchAllCharacters(11, 21);
    }, [fetchAllCharacters]);

    function renderPreviewCard() {
        if (peoples) {
            return (
                <PreviewCard>
                    { peoples.map(people => {
                        return (
                            <Card 
                                key={people.id} 
                                items={people} 
                            />);
                        }) }
                </PreviewCard>
                );
        } else {
            return <Spinner />;
        }
    };
    
    return (
        <CharactersPageContainer>
            { renderPreviewCard() }
        </CharactersPageContainer>
    );
};

const mapStateToProps = state => {
    return {
        peoples: state.characters.allCharacters
    };
};

export default connect(mapStateToProps, { fetchAllCharacters })(CharactersPage);