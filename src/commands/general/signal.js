const {EmbedBuilder} = require('discord.js')
const {SlashCommandBuilder} = require('@discordjs/builders');

const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('signal')
      .setDescription('signal and report a problem to the organizers'),
  async execute(client, interaction, args) {
    
      if (!interaction.isModalSubmit()) return;
      if (interaction.customId === 'myModal') {
        await interaction.reply({ content: 'Your submission was received successfully!' });
      }
    const modal =  new ModalBuilder()
        .setCustomId('myModal')
        .setTitle('My Modal');
        const favoriteColorInput = new TextInputBuilder()
        .setCustomId('team name input')
        // The label is the prompt the user sees for this input
        .setLabel("What's your team name?")
        // Short means only a single line of text
        .setStyle(TextInputStyle.Short);

    const hobbiesInput = new TextInputBuilder()
        .setCustomId('problem input')
        .setLabel("Describe the problem you're facing here")
        // Paragraph means multiple lines of text.
        .setStyle(TextInputStyle.Paragraph);

    // An action row only holds one text input,
    // so you need one action row per text input.
    const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
    const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

    // Add inputs to the modal
    modal.addComponents(firstActionRow, secondActionRow);  
   
    await interaction.showModal(modal);
   

    
  },
};
