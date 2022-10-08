const postgres = require("../../modules/postgres");
const user_menu = require("./user_menu");

module.exports = async (bot, msg, user) => {
  try {
    const { users } = postgres();
    const { text } = msg;

    if (text == "/start") {
      await user_menu(bot, message);
    }
  } catch (e) {}
};
