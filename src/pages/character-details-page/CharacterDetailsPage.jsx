import React from 'react';
import { useParams } from 'react-router-dom';


const CharacterDetailsPage = () => {
    const id = useParams().id;
    return (
        <div>
            <h2>Hello page character details</h2>
        </div>
    );
};

export default CharacterDetailsPage;