// index.js
import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import TOKEN from './cfg/config.json' assert { type: 'json' };

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const prefix = "!";

client.on("messageCreate", function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
    else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);
    }
});

// setup message
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("정상화 중...", {
        type: ActivityType.Listening,
    });
});

client.login(TOKEN['BOT_TOKEN']);