const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask_mentor")
    .setDescription("Asks for a mentor"),
  async execute(client, interaction, args) {
    const modal = new ModalBuilder()
      .setCustomId("askMentor")
      .setTitle("Ask for a mentor");

    const mentorTopicInput = new TextInputBuilder()
      .setCustomId("mentorTopicInput")
      .setLabel("Topic")
      .setStyle(TextInputStyle.Short);

    const mentorDetailsInput = new TextInputBuilder()
      .setCustomId("mentorDetailsInput")
      .setLabel("Details")
      .setStyle(TextInputStyle.Paragraph);

    const firstActionRow = new ActionRowBuilder().addComponents(
      mentorTopicInput
    );
    const secondActionRow = new ActionRowBuilder().addComponents(
      mentorDetailsInput
    );

    modal.addComponents(firstActionRow, secondActionRow);

    await interaction.showModal(modal);
  },
};
