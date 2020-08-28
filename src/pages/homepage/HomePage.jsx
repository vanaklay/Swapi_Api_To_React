import React, { Fragment } from 'react';

import { HomePageContainerStyles } from './HomePage.styles';

import MenuItem from '../../components/menu-item/MenuItem';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <HomePageContainerStyles>
                <MenuItem title='Personnages' linkUrl='people' imageUrl='https://i.ibb.co/9v92gtR/characters-sw.jpg'/>
                <MenuItem title='Planètes' linkUrl='planets' imageUrl='https://i.ibb.co/prdwZpX/planets-sw.jpg'/>
                <MenuItem title='Spécimens' linkUrl='species' imageUrl='https://i.ibb.co/tbb0pB7/species-sw.jpg'/>
                <MenuItem title='Films' linkUrl='films' imageUrl='https://i.ibb.co/BcGtfRb/films-sw.jpg'/>
            </HomePageContainerStyles>
            <Footer />
        </Fragment>

    );
};

export default HomePage;