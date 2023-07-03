const askMentorModal = async (client, interaction) => {
  const role = interaction.member.roles.cache.find((r) => r.name.startsWith("Team"));

  if (role) {
    const mentorTopic =
      interaction.fields.getTextInputValue("mentorTopicInput");
    const mentorDetails =
      interaction.fields.getTextInputValue("mentorDetailsInput");

    const channel = await interaction.guild.channels.fetch(
      "1125307317945122878"
    );
    channel.send(`<@&1125019398856527873>\n${mentorTopic}\n${mentorDetails}\n${role.name}`);

    interaction.reply("Request sent");
  } else {
    interaction.reply("You should be in a team first");
  }
};

module.exports = { askMentorModal };
