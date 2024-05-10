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
          name: "08:30-09:00",
          value: "Check in",
        },
        {
          name: "09:00-09:30",
          value: "Opening ceremony",
        },
        {
          name: "09:30-11:00",
          value: "Setting up the platform",
        },
        {
          name: "11:00-17:00",
          value: "Competition",
        },
        {
          name: "12:00-13:00",
          value: "Lunch break",
        },
        {
          name: "17:00-18:00",
          value: "Coffee break and closing ceremony",
        }
      );
    interaction.reply({ embeds: [message] });
  },
};
