import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import { CharactersPageContainer, PreviewCard, PagesContainer } from './CharactersPage.styles';

import { fetchAllCharacters } from '../../redux/actions';

const CharactersPage = ({ fetchAllCharacters, peoples }) => {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    useEffect(() => {
        fetchAllCharacters(page);
    }, [fetchAllCharacters, page]);

    const renderPages = () => {
        return pages.map(page => (
            <button key={page} onClick={() => setPage(page)}>{page}</button>
        ))
    };
    function renderPreviewCard() {
        if (peoples) {
            return (
                <PreviewCard>
                    { peoples.map(people => {
                        return (
                            <Card 
                                key={people.name} 
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
        <div>
        <PagesContainer>
            { renderPages() }
        </PagesContainer>
        <CharactersPageContainer>
            { renderPreviewCard() }
        </CharactersPageContainer>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        peoples: state.characters.allCharacters
    };
};

export default connect(mapStateToProps, { fetchAllCharacters })(CharactersPage);