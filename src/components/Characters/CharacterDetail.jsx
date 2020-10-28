import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../Hooks/characters';

const CharacterDetail = () => {
    const { CharacterId } = useParams();
    const { loading, character } = useCharacterById(CharacterId);
    if(loading) return <h1>Loading...</h1>;

    return (
        <>
            <p>{character.name}</p>
            <img src={character.photoUrl} alt={character.name} />
            <p>{character.position}</p>
            <p>{character.affiliation}</p>
        </>
    );
};

export default CharacterDetail;