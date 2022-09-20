const {EmbedBuilder} = require('discord.js')
const {SlashCommandBuilder} = require('@discordjs/builders');

const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
      .setName('signal')
      .setDescription('signal and report a problem to the organizers'),
  async execute(client, interaction, args) {
    
    
    const modal =  new ModalBuilder()
        .setCustomId('myModal')
        .setTitle('My Modal');
        const teamNameInput = new TextInputBuilder()
        .setCustomId('teamNameInput')
        // The label is the prompt the user sees for this input
        .setLabel("What's your team name?")
        // Short means only a single line of text
        .setStyle(TextInputStyle.Short);

    const problemInput = new TextInputBuilder()
        .setCustomId('problemInput')
        .setLabel("Describe the problem you're facing here")
        // Paragraph means multiple lines of text.
        .setStyle(TextInputStyle.Paragraph);

    // An action row only holds one text input,
    // so you need one action row per text input.
    const firstActionRow = new ActionRowBuilder().addComponents(teamNameInput);
    const secondActionRow = new ActionRowBuilder().addComponents(problemInput);    
    
    client.on('interactionCreate', async interaction => {
      if (!interaction.isModalSubmit()) return;
      // Getting the modal submission info  
      teamName = interaction.fields.getTextInputValue('teamNameInput')
      // Verify if teamName exists
      problem = interaction.fields.getTextInputValue('problemInput')
      console.log({teamName,problem})
     
      if (interaction.customId === 'myModal') {
        await interaction.reply({ content: 'Your problem has been reported successfully!'});
      }
      
    });
  },
};
