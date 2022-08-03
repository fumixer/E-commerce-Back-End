// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // Validates that the value is numeric
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Set a default value of 10,
      defaultValue: 10,
      // Validates that the value is numeric
      Validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      // References the category model's id
      referene: {
        model: 'category',
        id: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

// Product
// 1. id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
// 2. product_name
// String
// Doesn't allow null values
// 3. price
// Decimal
// Doesn't allow null values
// Validates that the value is a decimal
// 4. stock
// Integer
// Doesn't allow null values
// Set a default value of 10
// Validates that the value is numeric
// 5. category_id
// Integer
// References the category model's id

