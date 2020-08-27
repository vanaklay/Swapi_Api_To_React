import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/Spinner';
import NavPages from '../../components/navigation-bars/NavPages';
import CardPreview from '../../components/card-preview/CardPreview';

import { FilmsPageContainer, PagesContainer } from './FilmsPage.styles';
import { requestAllFilms } from '../../redux/films/FilmsActions';

const FilmsPage = ({ onrequestAllFilms, films }) => {
    useEffect(() => {
        onrequestAllFilms();
    }, [onrequestAllFilms]);
    return (
        <div>
            <PagesContainer>
                <NavPages 
                    previous={films && films.previous }
                    next={films && films.next}
                />
            </PagesContainer>
            <FilmsPageContainer>
                { films ? <CardPreview items={films.results}/> : <Spinner /> }
            </FilmsPageContainer>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        films: state.films.all
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onrequestAllFilms: () => dispatch(requestAllFilms())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage);