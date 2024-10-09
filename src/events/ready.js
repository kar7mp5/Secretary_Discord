// events/ready.js
import { ActivityType } from 'discord.js'; // Import ActivityType from discord.js

export default function (client) {
    // Log when the bot is ready and set its activity status
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("정상화 중...", {
        type: ActivityType.Listening,  // Set activity type as Listening
    });
}
