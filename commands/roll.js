module.exports = {
  name: "roll",
  description: "Dice roller command. Can provide # of sides as argument.",
  execute(message, args) {
    const userRoll = args[0];

    if (!args.length) {
      return message.channel.send(
        `Nice job <:monkaS:535880556714393642>, you didn't provide the dice size, ${message.author}.`
      );
    } else if (isNaN(userRoll)) {
      return message.channel.send(
        `${message.author}, <:waitwat:692492858229260328> number?`
      );
    } else if (!isNaN(userRoll) && userRoll > 0) {
      let roll = 1 + Math.floor(Math.random() * args[0]);
      return message.channel.send(
        `${message.author} rolled: ${roll}! (1-${userRoll})`
      );
    } else if (!isNaN(userRoll) && userRoll == 0) {
      return message.channel.send(
        `<:PepeYikes:535880556747948055> don't use a 0-sided die, ${message.author}`
      );
    }
  },
};
