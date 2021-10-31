/* auth-middleware.js */
const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.

  next();
};

module.exports = authMiddleware;

// const validUser = {
//   username: 'MestreCuca',
//   password: 'MinhaSenhaSuperSeguraSqn'
// };

// const authMiddleware = (req, res, next) => {
//   const { username, password } = req.headers;

//   if(!username || !password) return res.status(401).json({ message: ' Username ou password estão em branco' });

//   if(username !== validUser.username || password !== validUser.password) {
//     return res.status(401).json({ message: 'usuário ou senha inválidos' });
//   }
  
//   next();
// };

// module.exports = authMiddleware;
