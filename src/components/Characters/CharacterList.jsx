import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../Hooks/characters';
import CharacterItem from './CharacterItem';
import { Link } from 'react-router-dom';

const CharacterList = ({ page }) => {
    const { loading, characters } = useCharacters(page);
    if(loading) return <h1>Loading...</h1>;

    const characterElements = characters.map(character => (
        <li key={character.CharacterId}>
            <Link to={`/characters/${character.CharacterId}`}>
                <CharacterItem {...character} />
            </Link>
        </li>
    ));

    return (
        <ul data-testid='characters'>
            {characterElements}
        </ul>
    );
};

CharacterList.propTypes = {
    page: PropTypes.number
};

export default CharacterList;