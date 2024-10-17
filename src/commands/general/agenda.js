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
        },
        {
          name: "Day 1: 19:00-20:00",
          value: "Challenge Selection and Hackathon Start",
        },
        {
          name: "Day 3: 23:00",
          value: "Hacking Phase Ends, Submissions Open",
        },
        {
          name: "Day 3: 23:59",
          value: "Submission Deadline",
        }
      );
    interaction.reply({ embeds: [message] });
  },
};