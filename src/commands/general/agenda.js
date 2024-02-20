const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("agenda")
    .setDescription("Displays the agenda event"),
  async execute(client, interaction, args) {
    const message = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Agenda")
      .setDescription("Here's the agenda of the event")
      .addFields(
        {
          name: "Day 1: 18:00-19:00",
          value: "Opening ceremony",
          inline: true,
        },
        {
          name: "20:00",
          value: "GHack Algiers start",
          inline: true,
        },
        {
          name: "Day 2: 20:00-21:00",
          value: "Activity 01",
        },
        {
          name: "Day 3: 20:00-21:00",
          value: "Activity 02",
        },
        {
          name: "Day 3: 00:00",
          value: "submissions",
        }
      );
    interaction.reply({ embeds: [message] });
  },
};
