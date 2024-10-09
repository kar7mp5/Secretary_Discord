// events/messageCreate.js
export default function (client, message) {
    // Ignore messages from bots
    if (message.author.bot) return;

    const prefix = "!";

    // Check if the message starts with the prefix
    if (!message.content.startsWith(prefix)) return;

    // Parse the command and arguments from the message
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Get the command from the command collection
    const command = client.commands.get(commandName);
    if (!command) return;

    // Execute the command
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
}
