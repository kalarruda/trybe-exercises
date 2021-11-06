const connection = require('./connection');

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
  const [bookId] = await connection.execute('SELECT * FROM books WHERE author_id=?', [id]);
  if(bookId.length === 0) {
    return null;
  }
  return bookId.map(serialize)[0];
}

module.exports = {
  getAllBooks,
  getByAuthorId,
};