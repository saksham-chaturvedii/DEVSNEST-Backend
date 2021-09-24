/**
 * This folder is responsible for,
 *
 * The checks necessarey before data gets entered into the DB.
 *
 * Taking user details.
 *
 * Creating sequelize model.
 * The model tells Sequelize several things
 * about the entity it represents, such as the
 * name of the table in the database and which
 * columns it has (and their data types).
 */

const { DataTypes } = require("sequelize");
// Get the valid Datatypes (object) from the sequelize module.

const sequelize = require("../database/index");
// Not mentioning index.js would've also worked because it by default looks for "index.js".

/**
 * LHS -> Model Name
 * RHS -> Table Name
 * Both can be different. Usually Table name is
 * in plural (Users) and model name in singular.
 */
const User = sequelize.define("User",
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
