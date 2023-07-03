const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remaining_time")
    .setDescription(
      "Shows the remaining time for the event to start or to end"
    ),
  async execute(client, interaction, args) {
    const startDate = new Date(2023, 6, 5, 17, 0);
    const endDate = new Date(2023, 6, 10, 19, 0);
    const currentDate = new Date();

    if (startDate - currentDate > 0) {
      const difference = new Date(startDate - currentDate);
      await interaction.reply(`
        ${difference.getDate()} days ${difference.getHours()} hours ${difference.getMinutes()} minutes left for the event to start
      `);
    } else if (endDate - currentDate > 0) {
      const difference = new Date(endDate - currentDate);
      await interaction.reply(`
        ${difference.getDate()} days ${difference.getHours()} hours ${difference.getMinutes()} minutes left for the event to end
      `);
    } else {
      await interaction.reply("The event has ended");
    }
  },
};
