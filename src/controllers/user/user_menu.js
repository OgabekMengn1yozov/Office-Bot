const postgres = require("../../modules/postgres");

module.exports = async (bot, msg) => {
  try {
    const { users } = postgres();
    const user_id = msg.from.id

    await users.update({ step: 0 }, { where: { user_id } });

    let keyboard = {
      resize_keyboard: true,
      keyboard: [
        [{ text: "🏙Optik aniqlash" }, { text: "📃 Hujjatlarni o‘girish" }],
        [{ text: "🔤 Lotin / Kiril" }, { text: "⚒ Vositalar" }],
        [{ text: "📞Aloqa" }, { text: "💵 Danat" }],
      ],
    };

    await bot.sendMessage(user_id, "🏠", { reply_markup: keyboard });
  } catch (e) {}
};
