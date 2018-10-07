const Discord = require('discord.js');

exports.run = (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bunun için yetkin yok!').setColor('RANDOM'));
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Duyuru yapmak için birşey yazmalısın.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(args.join(" "))
    .setFooter(`Duyuruyu yapan: ${message.author.tag}`)
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anons', 'duyuruyap'],
  permLevel: "0"
};

exports.help = {
  name: "duyuru",
  description: "Sunucuda duyuru yapmanızı sağlar",
  usage: "duyuru"
};