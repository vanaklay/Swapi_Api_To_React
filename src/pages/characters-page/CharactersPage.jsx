import React, { useState, useEffect } from 'react';

import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import { CharactersPageContainer, PreviewCard } from './CharactersPage.styles';

const CharactersPage = (props) => {
    const [peoples, setPeoples] = useState(null);
    useEffect(() => {
        const fetchDataFromSwapi = async () => {
            const res = await fetch('https://swapi.dev/api/people/');
            const resJson = await res.json();
            setPeoples(resJson.results);
        };
        fetchDataFromSwapi();
    }, []);

    function renderPreviewCard() {
        if (peoples) {
            return (<PreviewCard>
                { peoples.map(people => (<Card key={people.name} name={people.name} />))}
            </PreviewCard>);
        } else {
            return <Spinner />;
        }
    };

    return (
        <CharactersPageContainer>
            { renderPreviewCard() }
        </CharactersPageContainer>
    );
};

export default CharactersPage;