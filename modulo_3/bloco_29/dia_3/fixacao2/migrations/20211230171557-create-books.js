module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      bookId: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        field: 'book_id',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      numberPages: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'number_pages',
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  },
};
