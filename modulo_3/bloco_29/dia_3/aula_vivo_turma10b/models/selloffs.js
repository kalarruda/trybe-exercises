const SellOff = (sequelize, DataTypes) => {
  const sellOff = sequelize.define("Selloff", {
    name: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  });
  return sellOff;
};

module.exports = SellOff;
