const { SlashCommandBuilder, EmbedBuilder, Colors } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Displays the help of the bot"),
  async execute(client, interaction, args) {
    const message = new EmbedBuilder()
      .setTitle("List of commands")
      .addFields(
        {
          name: "`/help`",
          value: "Displays the list of available commands",
        },
        {
          name: "`/agenda`",
          value: "Displays the event agenda",
        },
        {
          name: "`/create_team` `<team_name>` `<member2>` `<member3>` `<member4>`",
          value:
            "Creates a team space for the team members entered as tags, the members parameters are optionnal",
        },
        {
          name: "`ask_mentor`",
          value: "Ask for a mentor by filling a form",
        },
        {
          name: "`ask_organizer`",
          value: "Ask for an organizer by filling a form",
        },
        {
          name: "`/remaining_time`",
          value:
            "Checks the remaining time for the event until it starts/finishes (depending on when fired)",
        },
        {
          name: "`/ping`",
          value: "Gets the bot's ping",
        }
      )
      .setColor(Colors.Purple)

    await interaction.reply({ embeds: [message] });
  },
};
