const END_POINT = 'https://rickandmortyapi.com/api/character';

async function fetchAPI() {
  try {
    const response = await fetch(END_POINT);
    const { results: characters } = await response.json();
    return characters;
  } catch (err) {
    console.error(`Erro ao fazer fetch no end point ${END_POINT}, ${err}`);
  }
}

export default fetchAPI;
