import React from 'react';

import { AreaContainer, AreaHeader } from './RelatedArea.styles';

const RelatedArea = ({ relatedProps, children }) => {
    return (
        <AreaContainer>
            <AreaHeader>{ children }</AreaHeader>
        </AreaContainer>
    );
};

export default RelatedArea;