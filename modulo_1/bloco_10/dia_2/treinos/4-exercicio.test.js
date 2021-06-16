// 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Teste API GITHUB', () => {
  const urlApi = 'https://api.github.com/orgs/tryber/repos';

  it('Testa se repositório to-do-list está na url', async () => {
    const resultado = await getRepos(urlApi);
    await expect(resultado).toContain('sd-01-week4-5-project-todo-list');
  })
  
  it('Testa se repositório to-do-list está na url',async () => {
    const resultado = await getRepos(urlApi);
    await expect(resultado).toContain('sd-01-week4-5-project-meme-generator')
  })
})