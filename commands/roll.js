module.exports = {
  name: "roll",
  description: "Dice roller command. Can provide # of sides as argument.",
  aliases: ["dice", "ceelo"],
  usage: "[number]",
  execute(message, args) {
    const userRoll = args[0];

    if (!args.length) {
      return message.channel.send(
        `<:monkaS:535880556714393642> you didn't provide the dice size, ${message.author}. **Usage**: !roll [number]`
      );
    } else if (isNaN(userRoll)) {
      return message.channel.send(
        `${message.author} <:waitwat:692492858229260328> **Usage**: !roll [number]`
      );
    } else if (!isNaN(userRoll) && userRoll > 0) {
      let roll = 1 + Math.floor(Math.random() * args[0]);
      return message.channel.send(
        `${message.author} rolled: ${roll}! (1-${userRoll})`
      );
    } else if (!isNaN(userRoll) && userRoll == 0) {
      return message.channel.send(
        `<:PepeYikes:535880556747948055> don't use a 0-sided die, ${message.author}. **Usage**: !roll [number]`
      );
    }
  },
};
