import React from 'react';

import {LinkContainerStyles, LinkStyles } from './CustomLink.styles';

const CustomLink = ({ home }) => {
    return (
        <LinkContainerStyles >
                <LinkStyles to='/'>{home}</LinkStyles>
        </LinkContainerStyles>
    );
};

export default CustomLink;