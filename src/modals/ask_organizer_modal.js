const askOrganizerModal = async (client, interaction) => {
  const role = interaction.member.roles.cache.find((r) =>
    r.name.startsWith("Team")
  );

  if (role) {
    const mentorTopic =
      interaction.fields.getTextInputValue("organizerTopicInput");
    const mentorDetails =
      interaction.fields.getTextInputValue("organizerDetailsInput");

    const channel = await interaction.guild.channels.fetch(
      "1125403283700334642"
    );
    channel.send(
      `<@&1097120206989570199>\n${mentorTopic}\n${mentorDetails}\n${role.name}`
    );

    interaction.reply("Request sent");
  } else {
    interaction.reply("You should be in a team first");
  }
};

module.exports = { askOrganizerModal };
