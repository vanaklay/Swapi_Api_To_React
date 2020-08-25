import React from 'react';

import { HomePageContainerStyles, CategoryCardStyles } from './HomePage.styles';

const HomePage = () => {
    return (
        <HomePageContainerStyles>
            <CategoryCardStyles>
                    <img src={require('../../img/default.jpg')} 
                    className="db bg-center cover aspect-ratio--object" alt='img1' />
            </CategoryCardStyles>
            <CategoryCardStyles>
                    <img src={require('../../img/default.jpg')} 
                    className="db bg-center cover aspect-ratio--object" alt='img1' />
            </CategoryCardStyles>
            <CategoryCardStyles>
                <div className='aspect-ratio aspect-ratio--1x1' >
                    <img src={require('../../img/default.jpg')} 
                    className="db bg-center cover aspect-ratio--object" alt='img1' />
                </div>
            </CategoryCardStyles>
            <CategoryCardStyles>
                <div className='aspect-ratio aspect-ratio--1x1' >
                    <img src={require('../../img/default.jpg')} 
                    className="db bg-center cover aspect-ratio--object" alt='img1' />
                </div>
            </CategoryCardStyles>
            <CategoryCardStyles>
                <div className='aspect-ratio aspect-ratio--1x1' >
                    <img src={require('../../img/default.jpg')} 
                    className="db bg-center cover aspect-ratio--object" alt='img1' />
                </div>
            </CategoryCardStyles>
            <CategoryCardStyles>
                <div className='aspect-ratio aspect-ratio--1x1' >
                    <img src={require('../../img/default.jpg')} 
                    className="db bg-center cover aspect-ratio--object" alt='img1' />
                </div>
            </CategoryCardStyles>
        </HomePageContainerStyles>
    );
};

export default HomePage;