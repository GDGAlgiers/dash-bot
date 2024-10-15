const { askMentorModal } = require("../../modals/ask_mentor_modal");
const { askOrganizerModal } = require("../../modals/ask_organizer_modal");

const modalsHandler = async (client, interaction) => {
  try {
    const customId = interaction.customId;
    const role = interaction.member.roles.cache.find((r) =>
      r.name.startsWith("Team")
    );
    if(!role) {
      await interaction.reply({ embeds: [{ title: "You must be assigned to a team first before asking mentors or orgenizers" }] });
      return;
    }
    switch (customId) {
      case "askMentor":
        await askMentorModal(client, interaction);
        break;
      case "askOrganizer":
        await askOrganizerModal(client, interaction);
        break;
      default:
        return;
    }
  } catch (err) {
    console.log(err);
    await interaction.reply("There was an error, try to contact an admin");
  }
};

module.exports = { modalsHandler };
