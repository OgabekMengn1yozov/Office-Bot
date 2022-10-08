const { Sequelize } = require("sequelize");
const { DB_URL } = require("../../config");
const { Users } = require("../model/models");

const sequelize = new Sequelize(DB_URL, {
  //   logging: (e) => console.log("SQL", e),
  logging: false,
});

async function postgres() {
  try {
    const db = {};

    // models
    db.users = await Users(Sequelize, sequelize);

    sequelize.sync({ force: false });
    return db;
  } catch (e) {
    console.log("DATABASE ERROR", e);
  }
}

postgres();
module.exports = postgres;
