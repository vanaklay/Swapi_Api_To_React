import React, { useState, useEffect } from 'react';

import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
import { CharactersPageContainer, PreviewCard } from './CharactersPage.styles';

const CharactersPage = (props) => {
    const [peoples, setPeoples] = useState([]);
    useEffect(() => {
        const fetchDataFromSwapi = async (idx) => {
            const res = await fetch(`https://swapi.dev/api/people/${idx}/`);
            const resJson = await res.json();
            setPeoples( previous => {
                return [...previous, {
                    id: `${idx}-${Date.now()}`,
                    imageUrl: `${idx}.jpg`,
                    ...resJson
                }]
            });
        };
        for (let i = 1; i < 11; i++) {
            fetchDataFromSwapi(i);
        }
    }, []);
    function renderPreviewCard() {
        if (peoples) {
            return (
                <PreviewCard>
                    { peoples.map(people => (<Card key={people.name} items={people} />))}
                </PreviewCard>
                );
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