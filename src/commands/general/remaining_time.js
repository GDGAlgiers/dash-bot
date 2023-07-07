const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remaining_time")
    .setDescription(
      "Shows the remaining time for the event to start or to end"
    ),
  async execute(client, interaction, args) {
    await interaction.reply({
      embeds: [
        {
          title: "Calculating remaining time",
        },
      ],
    });

    const startDate = new Date(2023, 6, 5, 18, 0);
    const endDate = new Date(2023, 6, 10, 20, 0);
    const currentDate = new Date();
    const message = new EmbedBuilder();

    if (startDate - currentDate > 0) {
      const diff = startDate.getTime() - currentDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      message
        .setTitle("Time left for the event to start")
        .setDescription(`${days} days ${hours} hours ${minutes} minutes`);

      await interaction.editReply({ embeds: [message] });
    } else if (endDate - currentDate > 0) {
      const diff = endDate.getTime() - currentDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      message
        .setTitle("Time left for the event to end")
        .setDescription(`${days} days ${hours} hours ${minutes} minutes`);

      await interaction.editReply({ embeds: [message] });
    } else {
      message
        .setTitle("The event has ended")
        .setDescription("See you in the next edition");
      await interaction.editReply({ embeds: [message] });
    }
  },
};
