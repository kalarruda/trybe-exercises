const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  User.associate = (models) => {
    User.hasMany(models.Product, { foreignKey: 'userId', as: 'products' });
  }
  return User;
}

module.exports = User;
