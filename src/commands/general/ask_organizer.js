const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask_organizer")
    .setDescription("Asks for an organizer"),
  async execute(client, interaction, args) {
    const modal = new ModalBuilder()
      .setCustomId("askOrganizer")
      .setTitle("Ask for an organizer");

    const organizerTopicInput = new TextInputBuilder()
      .setCustomId("organizerTopicInput")
      .setLabel("Topic")
      .setStyle(TextInputStyle.Short);

    const organizerDetailsInput = new TextInputBuilder()
      .setCustomId("organizerDetailsInput")
      .setLabel("Details")
      .setStyle(TextInputStyle.Paragraph);

    const firstActionRow = new ActionRowBuilder().addComponents(
      organizerTopicInput
    );
    const secondActionRow = new ActionRowBuilder().addComponents(
      organizerDetailsInput
    );

    modal.addComponents(firstActionRow, secondActionRow);

    await interaction.showModal(modal);
  },
};
