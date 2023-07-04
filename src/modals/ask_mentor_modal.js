const { EmbedBuilder } = require("discord.js");

const askMentorModal = async (client, interaction) => {
  await interaction.reply({ embeds: [{ title: "Processing mentor request" }] });
  const role = interaction.member.roles.cache.find((r) =>
    r.name.startsWith("Team")
  );

  if (role) {
    const mentorTopic =
      interaction.fields.getTextInputValue("mentorTopicInput");
    const mentorDetails =
      interaction.fields.getTextInputValue("mentorDetailsInput");

    const channel = await interaction.guild.channels.fetch(
      "1125307317945122878"
    );

    const message = new EmbedBuilder({
      color: 0x0099ff,
      title: "A team asked for a mentor",
      fields: [
        {
          name: "Team name",
          value: role.toString(),
        },
        {
          name: "Topic",
          value: mentorTopic,
        },
        {
          name: "Description",
          value: mentorDetails,
        },
      ],
    });

    await channel.send({
      content: "<@&1125019398856527873>",
      embeds: [message],
    });

    await interaction.editReply({ embeds: [{ title: "Request sent" }] });
  } else {
    await interaction.editReply({
      embeds: [{ title: "You should be in a team first" }],
    });
  }
};

module.exports = { askMentorModal };
