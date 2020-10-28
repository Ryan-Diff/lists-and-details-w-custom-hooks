export const getCharacters = async(page =1) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`);
    const json = await res.json();

    if(!res.ok) throw 'Sorry about it';

    return json.map(character => ({
        CharacterId: character._id,
        name: character.name,
        photoUrl: character.photoUrl
    }));
};

export const getCharacterById = async(CharacterId) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${CharacterId}`);
    const json = await res.json();

    if(!res.ok) throw 'Sorry about it';

    return {
        CharacterId: json._id,
        name: json.name,
        photoUrl: json.photoUrl,
        position: json.position,
        affiliation: json.affiliation
    };
};