const { EmbedBuilder } = require("discord.js");
require("dotenv").config()

const MENTOR_ROLE_ID = process.env.MENTOR_ROLE_ID
const MENTOR_CHANNEL_ID = process.env.MENTOR_CHANNEL_ID

const askMentorModal = async (client, interaction) => {
  await interaction.reply({ embeds: [{ title: "Processing mentor request" }] });
  const role = interaction.member.roles.cache.find((r) =>
    r.name.startsWith("Team")
  );

  const teamCategory = await interaction.guild.channels.cache.find(c => c.name.toLowerCase() === role.name.toLowerCase())
  const askHelpChannel = await interaction.guild.channels.cache.find(c => (c.parentId === teamCategory.id && c.name === "ask-help" && c.type === 0))

  if (role) {
    const mentorTopic =
      interaction.fields.getTextInputValue("mentorTopicInput");
    const mentorDetails =
      interaction.fields.getTextInputValue("mentorDetailsInput");

    const channel = await interaction.guild.channels.fetch(MENTOR_CHANNEL_ID);

    const message = new EmbedBuilder({
      color: 0x0099ff,
      title: "A team asked for a mentor",
      fields: [
        {
          name: "Team name",
          value: role.toString(),
        }, {
          name: "Team channel",
          value: `<#${askHelpChannel.id}>`
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
      content: `<@&${MENTOR_ROLE_ID}>`,
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
