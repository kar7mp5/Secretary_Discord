// commands/sum.js
export const name = 'sum';
export const description = 'Sum command';

export function execute(message, args) {
    // Convert arguments to numbers and calculate the sum
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter + x, 0);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
}
