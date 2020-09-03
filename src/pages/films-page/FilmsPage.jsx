import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/Spinner';
import NavPages from '../../components/navigation-bars/NavPages';
import CardPreview from '../../components/card-preview/CardPreview';

import { FilmsContainer, Container } from './FilmsPage.styles';
import { requestAllFilms } from '../../redux/films/FilmsActions';

const FilmsPage = ({ onrequestAllFilms, films }) => {
    useEffect(() => {
        onrequestAllFilms();
    }, [onrequestAllFilms]);
    return (
        <Container>
            <NavPages 
                previous={films && films.previous }
                next={films && films.next}
            />
            <FilmsContainer>
                { films ? <CardPreview items={films.results}/> : <Spinner /> }
            </FilmsContainer>
        </Container>
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