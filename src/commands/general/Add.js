const {EmbedBuilder, Role} = require('discord.js');
const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('add')
  .setDescription('add a member to the team')
  .addStringOption(option =>
    option.setName('member_id')
      .setDescription('add a member to the team(please type Id corectly)')
      .setRequired(true)
      ),   
  async execute(client, interaction, args) {
    const {roles}=interaction.member;

    const memid= interaction.options.getString('member_id')
    const embed1 = new EmbedBuilder()
        .setDescription('Member has been added')
        .setColor('0x7cfc00')

    const CTF_role='1023234660500770859';
    const Leader_role='1023254250370895964';
  
    let role1 = interaction.guild.roles.cache.find(r => r.id === CTF_role);
    if(roles.cache.has(Leader_role))
    {
    await interaction.reply({
      embeds: [embed1],
    });           

    const member = interaction.guild.members.cache.get(memid) || await interaction.guild.members.fetch(memid).catch(err => { });
    await  member.roles.add(role1).catch(console.error)
     }else{
    const embed2 = new EmbedBuilder()
    .setDescription('You can not execute this command')
    .setColor('0x0077ff')
    await interaction.reply({
      embeds: [embed2],
    });
   }
   


  },
};
     