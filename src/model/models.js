module.exports = class Models {
  static async Users(Sequelize, sequelize) {
    return sequelize.define(
      "users",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        first_name: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: true,
        },
        last_name: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: true,
        },
        username: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
        step: {
          type: Sequelize.DataTypes.STRING(64),
          default: 0,
        },
        session: {
          type: Sequelize.DataTypes.STRING,
          default: 0,
        },
        phone: {
          type: Sequelize.DataTypes.STRING(12),
          is: /^998[389][01345789][0-9]{7}$/,
        },
        isAdmin: {
          type: Sequelize.DataTypes.STRING(10),
          isIn: [["user", "admin"]],
          default: "user",
        },
      },
      { timestamps: false }
    );
  }
};
