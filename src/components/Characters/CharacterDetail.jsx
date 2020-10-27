import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../Hooks/characters';

const CharacterDetail = () => {
    const { id } = useParams();
    const { loading, character } = useCharacterById(id);
    if(loading) return <h1>Loading...</h1>;
    console.log(character);

    return (
        <>
            <p>{character.name}</p>
            <img src={character.imageUrl} alt={character.name} />
            <p>{character.position}</p>
            <p>{character.affiliation}</p>
        </>
    );
};

export default CharacterDetail;