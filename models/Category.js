const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      notNull:true,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      notNull:false
    }
  },
  {
    sequelize,
    timestamps:true,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
