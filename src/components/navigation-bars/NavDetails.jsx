import React from 'react';

import { Container,
        LinkContainerStyles, 
        LinkStyles
    } from './Nav.styles';

const NavDetails = ({ url }) => {
    return (
        <Container>
            <LinkContainerStyles>
                <LinkStyles to='/'>Accueil/</LinkStyles>
                { url === 'characters' ? <LinkStyles to='/characters'>Personnages</LinkStyles> : null }
                { url === 'planets' ? <LinkStyles to='/planets'>Planètes</LinkStyles> : null }
                { url === 'species' ? <LinkStyles to='/species'>Spécimens</LinkStyles> : null }
                { url === 'films' ? <LinkStyles to='/films'>Films</LinkStyles> : null }
            </LinkContainerStyles>
        </Container>
    );
};

export default NavDetails;