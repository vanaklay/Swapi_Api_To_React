import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/Spinner';
import Pagination from '../../components/pagination/Pagination';
import CardPreview from '../../components/card-preview/CardPreview';
import { CharactersPageContainer } from './CharactersPage.styles';

import { fetchAllCharacters } from '../../redux/characters/CharactersActions';

const CharactersPage = ({ onfetchAllCharacters, peoples }) => {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    useEffect(() => {
        onfetchAllCharacters(page);
    }, [onfetchAllCharacters, page]);
    
    return (
        <div>
            <Pagination pages={pages} handlePage={(event) => setPage(event)}/>
            <CharactersPageContainer>
                { peoples ? <CardPreview items={peoples.results}/> : <Spinner /> }
            </CharactersPageContainer>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        peoples: state.characters.allCharacters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchAllCharacters: (page) => dispatch(fetchAllCharacters(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);