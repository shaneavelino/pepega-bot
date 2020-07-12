module.exports = {
  name: "deeznutz",
  description: "Reply to user with a nice message.",
  aliases: ["dn", "dz", "deez"],
  cooldown: 5,
  execute(message, args) {
    const randomWords = require("random-words");
    const user = args[0];

    if (!args.length) {
      return message.channel.send(
        `${message.author}, ` + randomWords() + ` deez nutz`
      );
    } else {
      return message.channel.send(user + ", " + randomWords() + " deez nutz");
    }
  },
};
