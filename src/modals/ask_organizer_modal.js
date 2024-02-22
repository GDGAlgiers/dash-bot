const { EmbedBuilder } = require("discord.js");
require("dotenv").config()

const ORGANIZER_ROLE_ID = process.env.ORGANIZER_ROLE_ID
const ORGANIZER_CHANNEL_ID = process.env.ORGANIZER_CHANNEL_ID

const askOrganizerModal = async (client, interaction) => {
  await interaction.reply({
    embeds: [{ title: "Processing organizer request" }],
  });
  const role = interaction.member.roles.cache.find((r) =>
    r.name.startsWith("Team")
  );

  if (role) {
    const organizerTopic = interaction.fields.getTextInputValue(
      "organizerTopicInput"
    );
    const organizerDetails = interaction.fields.getTextInputValue(
      "organizerDetailsInput"
    );

    const channel = await interaction.guild.channels.fetch(ORGANIZER_CHANNEL_ID);

    const teamCategory = await interaction.guild.channels.cache.find(c => c.name.toLowerCase() === role.name.toLowerCase())

    const askHelpChannel = await interaction.guild.channels.cache.find(c => (c.parentId === teamCategory.id && c.name === "ask-help" && c.type === 0))

    const message = new EmbedBuilder({
      color: 0x0099ff,
      title: "A team asked for an organizer",
      fields: [
        {
          name: "Team name",
          value: role.toString(),
        },
        {
          name: "Team channel",
          value: `<#${askHelpChannel.id}>`
        },
        {
          name: "Topic",
          value: organizerTopic,
        },
        {
          name: "Description",
          value: organizerDetails,
        },
      ],
    });

    channel.send({ content: `<@&${ORGANIZER_ROLE_ID}>`, embeds: [message] });

    await interaction.editReply({ embeds: [{ title: "Request sent" }] });
  } else {
    await interaction.editReply({
      embeds: [{ title: "You should be in a team first" }],
    });
  }
};

module.exports = { askOrganizerModal };
