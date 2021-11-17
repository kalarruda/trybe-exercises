const Author = require('./Author');
const connection = require('./connectionMysql');

const serialize = (books) => {
  return {
    id: books.id,
    Titulo: books.title,
    AutorId: books.author_id,
  }
}

const getAllBooks = async () => {
  const [result] = await connection.execute('SELECT * FROM books');

  return result.map(serialize);
}

const getByAuthorId = async (id) => {
  const [authorId] = await connection.execute('SELECT * FROM books WHERE author_id=?', [id]);
  if(authorId.lenght === 0) return null;
  return authorId.map(serialize); // SÓ VAI VIR UM LIVRO DESSE AUTOR SE COLOCAR [0]
}

const isValid = async (titulo, autorId) => {
  if(!titulo || titulo.length < 3 || typeof titulo !== 'string') return false;
  if(!autorId || typeof autorId !== 'number' || !(await Author.findById(autorId))) return false; // PUXOU FUNÇÃO DE AUTHOR

  return true;
}

const createBook = async (titulo, autorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [titulo, autorId],
  );

module.exports = {
  getAllBooks,
  getByAuthorId,
  isValid,
  createBook,
};