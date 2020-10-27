export const getCharacters = async(page =1) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`);
    const json = await res.json();

    if(!res.ok) throw 'Sorry about it';

    return json.results.map(character => ({
        id: character.id,
        name: character.name,
        imageUrl: character.imageUrl
    }));
};

export const getCharacterById = async(CharacterId) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${CharacterId}`);
    const json = await res.json();

    if(!res.ok) throw 'Sorry about it';

    return {
        id: json.CharacterId,
        name: json.name,
        imageUrl: json.imageUrl,
        position: json.position,
        affiliation: json.affiliation
    };
};