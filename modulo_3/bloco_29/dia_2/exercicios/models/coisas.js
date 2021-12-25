const Coisa = (sequelize, DataTypes) => {
  const Coisa = sequelize.define('Coisa', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return Coisa;
};
