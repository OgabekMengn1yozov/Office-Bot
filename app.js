const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = require("./config");
const user_message = require("./src/controllers/user/user_message");
const postgres = require("./src/modules/postgres");

const bot = new TelegramBot(TOKEN, {
  polling: true,
});

bot.on("message", async (msg) => {
  const user_id = msg.from.id;

  try {
    const psql = await postgres();

    let user = await psql.users.findOne({ where: { user_id } });
    console.log(msg);

    // User create
    if (!user) {
      user = await psql.users.create({
        user_id,
        first_name: msg.from.first_name ? msg.from.first_name : null,
        last_name: msg.from.last_name ? msg.from.last_name : null,
        username: msg.from.username,
      });
    }

    if (user.isAdmin == "admin") {

    } else {
      await user_message(bot, msg, user);
    }
  } catch (e) {
    console.log(e);
    await bot.sendMessage(user_id, e.message);
  }
});
