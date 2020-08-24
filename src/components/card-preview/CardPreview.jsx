import React from 'react';

import Card from '../card/Card';

const CardPreview = ({ items }) => {
    // what category ? 
    return (
        <div>
            Preview component
            { items.map(item => {
                return (
                    <Card 
                        key={item.name} 
                        item={item} 
                    />);
            }) }
        </div>
    );
};

export default CardPreview;