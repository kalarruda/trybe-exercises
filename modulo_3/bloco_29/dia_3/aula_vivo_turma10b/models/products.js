const Product = (sequelize, DataTypes) => {
  const product = sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });
  product.associate = (models) => {
    product.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }
  return product;
};

module.exports = Product;
