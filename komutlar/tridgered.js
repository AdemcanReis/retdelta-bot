const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.channel.startTyping();
  message.channel.send({
    file: {
      attachment: "https://cute-api.tk/v1/generate/triggered?url=" + message.author.avatarURL,
      name: 'triggered.png'
    }
  });
message.channel.stopTyping();
};

module.exports.help = {
  name: 'triggered'
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['YEDEK KOMUT1', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "tridgered",
  description: ".....",
  usage: "tridgered <mesaj>"
};
