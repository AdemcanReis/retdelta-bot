const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Uçan tekme atacağınız yazmadın!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RANDOM')
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana uçan tekme attı! Canın acımış olmalı dostum.**')
        .setImage(`https://www.bobiler.org/monte/preview/168247/bobiler.gif`)

    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['terlikat','terlik'],
  permLevel: 0
};

exports.help = {
  name: 'terlik-at',
  description: 'İstedğiniz kişiye terlik  atarsınız',
  usage: 'terlik-at'
};
