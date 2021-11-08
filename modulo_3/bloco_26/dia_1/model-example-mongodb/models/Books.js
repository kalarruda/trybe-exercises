const Author = require('./Authors');
const connection = require('./connection');

const serialize = (books) => {
  return {
    id: books.id,
    Titulo: books.title,
    AutorId: books.author_id,
  }
}

const getAllBooks = async () => connection()
    .then((db) => db.collection('books').find({}).toArray());

// const getAllBooks = async () => {
//   const connect = await connection();
//   const result = connect.collection('books').find().toArray();
//   const list = result.map(({ _id, title, author_id }) => ({
//     id: _id,
//     titulo: title,
//     AutorId: author_id,
//   }))
//   return list;
// }

const getByAuthorId = async (authorID) => connection()
  .then((db) => db.collection('books').find({ author_id: Number(authorID) }).toArray());

const isValid = async (title, autorId) => {
  if(!title || title.length < 3 || typeof title !== 'string') return false;
  if(!autorId || typeof autorId !== 'number' || !(await Author.findById(autorId))) return false; // PUXOU FUNÇÃO DE AUTHOR

  return true;
}

const createBook = async (title, autorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, autorId],
  );

module.exports = {
  getAllBooks,
  getByAuthorId,
  isValid,
  createBook,
};
