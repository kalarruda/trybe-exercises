const User = (sequelize, DataTypes) => {
  const UserReturn = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  });
  return UserReturn;
};

module.exports = User;
