// Require the necessary discord.js classes
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { loadCommands } = require("./core/loader/index");
require("dotenv").config();

const clientId = process.config.CLIENT_ID;
const guildId = process.config.GUILD_ID;
const token = process.config.TOKEN;

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});
client.commands = new Collection();

// load commands
loadCommands(client, token, clientId, guildId);

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(client, interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

// Login to Discord with your client's token
client.login(token);
