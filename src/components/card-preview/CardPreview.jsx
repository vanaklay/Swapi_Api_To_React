import React from 'react';

import Card from '../card/Card';
import { PreviewCard } from './CardPreview.styles';

const CardPreview = ({ items }) => {
    // what category ? 
    return (
        <PreviewCard>
            { items.map(item => {
                return (
                    <Card 
                        key={item.name} 
                        item={item} 
                    />);
            }) }
        </PreviewCard>
    );
};

export default CardPreview;