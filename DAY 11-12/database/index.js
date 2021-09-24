/**
 * Here, we're using Sequelize to mention details related to our database.
 */

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "icarus", //dbname
  "icarus", //user
  "tiger", //password
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize.sync(); // Check if a table exists, if not then crate one.

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection establishhed successfully.");
  } catch (err){
    // console.log(err)
    console.log("Connection to database failed.");
  }
};
connectDB();

module.exports = sequelize;
