import React from 'react';

import { NotFoundContainer, LinkStyles } from './NotFoundPage.styles';

const NotFoundPage = () => {
    return (
        <NotFoundContainer>
            <h1>QUE LA FORCE SOIT AVEC TOI</h1>
            <h2>MAIS IL N'Y A RIEN ICI</h2>
            <LinkStyles to='/'>Retour Accueil</LinkStyles>
        </NotFoundContainer>
    );
};

export default NotFoundPage;