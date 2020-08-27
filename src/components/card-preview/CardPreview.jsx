import React from 'react';

import Card from '../card/Card';
import { PreviewCard } from './CardPreview.styles';

const CardPreview = ({ items }) => {
    return (
        <PreviewCard>
            { items.map(item => {
                return (
                    <Card 
                        key={item.name ? item.name : item.title} 
                        item={item} 
                    />);
            }) }
        </PreviewCard>
    );
};

export default CardPreview;