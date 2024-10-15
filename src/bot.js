// Require the necessary discord.js classes
const { Client, Collection, GatewayIntentBits, Events } = require("discord.js");
const { loadCommands } = require("./core/loader/index");
const { modalsHandler } = require("./core/modals_handler");
const { createServer } = require("./utils/server")
require("dotenv").config();

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

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

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isCommand()) {
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
  } else if (interaction.isModalSubmit()) {
    modalsHandler(client, interaction);
  } else return;
});

// Login to Discord with your client's token
client.login(token);
createServer()
