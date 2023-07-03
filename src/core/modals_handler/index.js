const { askMentorModal } = require("../../modals/ask_mentor_modal");

const modalsHandler = (client, interaction) => {
  try {
    const customId = interaction.customId;
    switch (customId) {
      case "askMentor":
        askMentorModal(client, interaction);
        break;
      default:
        return;
    }
  } catch (err) {
    console.log(err);
    interaction.reply("There was an error, try to contact an admin");
  }
};

module.exports = { modalsHandler };
