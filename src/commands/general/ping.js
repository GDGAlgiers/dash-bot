const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the bot's ping!"),
  async execute(client, interaction, args) {
    const start = Date.now();

    const embed1 = new EmbedBuilder().setDescription(
      "Looks like the bot is slow."
    );

    await interaction.reply({
      embeds: [embed1],
    });

    const end = Date.now();

    const embed = new EmbedBuilder().setTitle("Ping!").addFields(
      {
        name: "API Latency",
        value: `${Math.round(client.ws.ping)}ms`,
        inline: true,
      },
      {
        name: "Message Latency",
        value: `${end - start}ms`,
        inline: true,
      }
    );

    interaction
      .editReply({ embeds: [embed] })
      .catch((e) => interaction.followUp(e));
  },
};
