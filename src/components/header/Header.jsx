import React from 'react';

import { HeaderContainerStyles, LogoStyles } from './Header.styles';

const Header = () => {
    return (
        <HeaderContainerStyles>
            <LogoStyles src={require('../../img/logo/Star_Wars_logo.png')} alt='logo' />
        </HeaderContainerStyles>
    );
};

export default Header;