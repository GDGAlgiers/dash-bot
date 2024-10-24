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
          name: "Day 1: 17:00-18:00",
          value: "Check-in",
          inline: true,
        },
        {
          name: "Day 1: 18:00-19:00",
          value: "Opening ceremony",
          inline: true,
        },
        {
          name: "Day 1: 19:30-21:00",
          value: "Dinner time",
          inline: true,
        },
        {
          name: "Day 1: 22:30-00:00",
          value: "Hacking",
        },
        {
          name: "Day 2: 00:00-02:00",
          value: "Hacking",
          inline: true,
        },
        {
          name: "Day 2: 02:00-03:00",
          value: "Coffee break",
          inline: true,
        },
        {
          inline: true,
          name: "Day 2: 03:00-07:30",
          value: "Hacking",
        },
        {
          inline: true,
          name: "Day 2: 07:30-08:30",
          value: "Breakfast",
        },
        {
          name: "Day 2: 08:30-12:00",
          value: "Hacking",
          inline: true,
        },
        {
          name: "Day 2: 12:00-14:00",
          value: "Prayer time / Girls activities",
          inline: true,
        },
        {
          name: "Day 2: 14:00-15:00",
          value: "Lunch Time",
          inline: true,
        },
        {
          name: "Day 2: 15:00-17:00",
          value: "Hacking",
          inline: true,
        },
        {
          name: "Day 2: 17:00-17:30",
          value: "Coffee break",
          inline: true,
        },
        {
          name: "Day 2: 17:30-21:00",
          value: "Hacking",
          inline: true,
        },
        {
          name: "Day 2: 21:00-22:00",
          value: "Dinner time",
          inline: true,
        },
        {
          name: "Day 2: 22:00-00:00",
          value: "Hacking",
        },
        {
          name: "Day 3: 00:00-02:00",
          value: "Hacking",
          inline: true,
        },
        {
          name: "Day 3: 02:00-03:00",
          value: "Coffee break",
          inline: true,
        },
        {
          name: "Day 3: 03:00-07:30",
          value: "Hacking",
          inline: true,
        },
        {
          name: "Day 3: 07:30-08:30",
          value: "Breakfast",
          inline: true,
        },
        {
          name: "Day 3: 08:30-12:00",
          value: "Hacking",
          inline: true,
        },
        {
          name: "Day 3: 12:00",
          value: "Submissions",
          inline: true,
        },
        {
          name: "Day 3: 12:00-13:00",
          value: "Lunch time",
          inline: true,
        },
        {
          name: "Day 3: 13:30-16:30",
          value: "Projects presentatinos",
          inline: true,
        },
        {
          name: "Day 3: 17:30-18:00",
          value: "Closing ceremony / Winners announcement",
          inline: true,
        },
      );
    interaction.reply({ embeds: [message] });
  },
};