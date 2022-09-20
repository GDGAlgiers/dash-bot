const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("test"),
  async execute(client, interaction, args) {
    const embed1 = new EmbedBuilder()
      .setDescription("test")
      .setColor("0x0000ff");

    await interaction.reply({
      embeds: [embed1],
    });
  },
};
