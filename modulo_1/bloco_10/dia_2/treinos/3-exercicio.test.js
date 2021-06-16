
// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName 

const users = {
  4 : { name: 'Mark' },
  5 : { name: 'Paul' }
  };
  
  // console.log(users[4]); // TESTANDO COMO CHAMAR OS ELEMENTOS DO OBJETO USERS
  // console.log(users[4].name); // TESTANDO COMO CHAMAR OS ELEMENTOS DO OBJETO USERS

  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

  describe('função getUserName', () => {
    it('Testa se nome de usuário é encontrado', async () => {
      await expect(getUserName(4)).resolves.toBe('Mark') // COMO É UMA PROMISE ENTÃO PRECISA USAR O AWAIT E O RESOLVES  
    })

    it('Testa se nome de usuário não for encontrado', async () => {
      await expect(getUserName(1)).rejects.toEqual({ error: 'User with ' + 1 + ' not found.' })
    })
  })

 