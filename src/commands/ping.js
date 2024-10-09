// commands/ping.js
export const name = 'ping';
export const description = 'Ping command';

export function execute(message, args) {
    // Calculate latency and reply to the user
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
}
