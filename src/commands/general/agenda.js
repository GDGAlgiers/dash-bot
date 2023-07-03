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
          name: "Day 1: 18:00-18:30",
          value: "Opening ceremony",
          inline: true,
        },
        {
          name: "18:30",
          value: "GameJam start",
          inline: true,
        },
        {
          name: "Day 2: 21:00-22:00",
          value: "Activity 01",
        },
        {
          name: "Day 3: 21:00-22:00",
          value: "Activity 02",
        },
        {
          name: "Day 4: 21:00-22:00",
          value: "Activity 03",
        },
        {
          name: "Day 5: 21:00-22:00",
          value: "Activity 04",
        },
        {
          name: "Day 6: 18:00",
          value: "Projects submissions",
        }
      );
    interaction.reply({ embeds: [message] });
  },
};
