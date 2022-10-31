const discord = require('discord.js');
const { EmbedBuilder, PermissionFlagsBits, PermissionsBitField, } = require('discord.js');
const { SlashCommandBuilder, messageLink, } = require('@discordjs/builders');
let i = 0;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('team')
    .setDescription('Creating a Team')
    .addStringOption(option =>
      option.setName('team_name')
        .setDescription('organasing teams')
        .setRequired(true)
    ),
  async execute(client, interaction, args) {
    const { roles } = interaction.member;
    const guild = interaction.guild
    const team_name = interaction.options.getString('team_name')

    //creating an embed
    const embed2 = new EmbedBuilder()
      .setAuthor({ name: 'Team ' + i + 1, iconURL: "https://www.gdgalgiers.com/static/phonelogo-db9c725b1463afd46d9b886076124bb2.png" })
      .setColor(0xFF0000)
      .setTitle(team_name)
      .setThumbnail(interaction.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setDescription("Team Leader <@" + interaction.user.id + ">")
      .setImage("https://ctf.gdgalgiers.com/static/fcb34b6f8b7de11ab2a1678b8985573c/b1405/hero-img.png")
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: "Team " + team_name + " Created by < " + interaction.user.tag + " > "
      })

    await interaction.reply({
      embeds: [embed2],
    });

    //ctf player / Leader  role id
    const CTF_role = '1023234660500770859';
    const Leader_role = '1023254250370895964';

    //creating  3 roles   leader and member and CTF PLAYER : 
    // get the role object from the role id:
    let role1 = interaction.guild.roles.cache.find(r => r.id === CTF_role);
    let role3 = interaction.guild.roles.cache.find(r => r.id === Leader_role);

    //creating a specific role
    const role2 = await interaction.guild.roles.create({
      name: team_name,
      color: 0xFF0000
    })

    //giving roles to the user 
    await roles.add((role1)).catch(console.error);
    await roles.add((role2)).catch(console.error);
    await roles.add((role3)).catch(console.error);

    //creating channels in a category
    const catego_id = '1022874680773840907';
    guild.channels.create({
      "name": team_name,
      "type": 0,
      parent: catego_id,
      permissionOverwrites: [
        {
          id: interaction.guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel],
        },
        {
          id: role2.id,
          allow: [PermissionsBitField.Flags.ViewChannel],
        },
      ],

    })
    guild.channels.create({
      "name": team_name,
      "type": 2,
      parent: catego_id,
      permissionOverwrites: [
        {
          id: interaction.guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel],
        },
        {
          id: role2.id,
          allow: [PermissionsBitField.Flags.ViewChannel],
        },
      ],
    })
    console.log(interaction.member.roles.cache);
    i++;




  },
};

