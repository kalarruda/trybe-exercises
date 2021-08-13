const END_POINT = 'https://api.chucknorris.io/jokes/random';

const fetchApi = async () => {
  const response = await fetch(END_POINT);
  const { value } = await response.json();
  return value;
}

export default fetchApi;
