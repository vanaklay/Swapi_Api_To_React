import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import Pagination from '../../components/pagination/Pagination';
import CardPreview from '../../components/card-preview/CardPreview';
import { CharactersPageContainer, PreviewCard, PagesContainer } from './CharactersPage.styles';

import { fetchAllCharacters } from '../../redux/characters/CharactersActions';

const CharactersPage = ({ onfetchAllCharacters, peoples }) => {
    const [page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    useEffect(() => {
        onfetchAllCharacters(page);
    }, [onfetchAllCharacters, page]);

    // function renderPreviewCard() {
    //     if (peoples) {
    //         return (
    //             <PreviewCard>
    //                 { peoples.map(people => {
    //                     return (
    //                         <Card 
    //                             key={people.name} 
    //                             items={people} 
    //                         />);
    //                     }) }
    //             </PreviewCard>
    //             );
    //     } else {
    //         return <Spinner />;
    //     }
    // };
    
    return (
        <div>
            <Pagination pages={pages} handlePage={(event) => setPage(event)}/>
            { peoples ? <CardPreview items={peoples.results}/> : <Spinner /> }
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