import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageStyles, ContentStyles, TitleStyles } from './MenuItem.styles';

const MenuItem = ({ history, match, title, linkUrl, imageUrl }) => {
    return (
        <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageStyles 
                className='background-image'
                imageUrl={imageUrl}
            />
            <ContentStyles className='content'>
                <TitleStyles>{title.toUpperCase()}</TitleStyles>
            </ContentStyles>
        </MenuItemContainer>
    );
};

export default withRouter(MenuItem);