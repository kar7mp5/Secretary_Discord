// index.js
import { Client, GatewayIntentBits, Collection, ActivityType } from 'discord.js';
import TOKEN from './cfg/config.json' assert { type: 'json' };
import fs from 'fs';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Collection();
const prefix = "!";

// Load command files from the commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    import(`./commands/${file}`).then((command) => {
        client.commands.set(command.name, command);
    });
}

// Load event files from the events folder
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    import(`./events/${file}`).then((event) => {
        const eventName = file.split('.')[0];
        // Use 'event.default' to correctly reference the default export
        client.on(eventName, event.default.bind(null, client));
    });
}

// Start the bot with the token
client.login(TOKEN['BOT_TOKEN']);
