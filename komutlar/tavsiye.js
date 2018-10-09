const Discord = require('discord.js');

module.exports.run = async (bot, message, args, guild) => {
    let davet;
    if (message.channel.permissionsFor(bot.user).has("CREATE_INSTANT_INVITE")) {
        await message.channel.createInvite({temporary: false, maxAge: 0, maxUses: 0, unique: false}).then(i => { davet = i.url });
    } else davet = 'Sunucuda davet linkini almak için yeterli yetkim yoktu alamadım.';
    const tavsiye = args.join(" ").slice(0);
    const tavsiyeSahibi = message.author
    const tavsiyeKanal = bot.channels.find('id', 'KENDI TAVSIYE KANALININ IDSI KARDESIM GIR BURAYA');
    if(!tavsiye) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Tavsiyeni girmedin! Doğru kullanım: `c!tavsiye <tavsiyeniz>`').setColor("RED"));
    if(tavsiye) return tavsiyeKanal.sendEmbed(new Discord.RichEmbed().setColor("GREEN").setTitle(`${tavsiyeSahibi.tag} tarafından yeni bir tavsiye geldi!`).addField(`Bilgiler`, `ID: ${tavsiyeSahibi.id}\nKullanıcı Adı: ${tavsiyeSahibi.tag}\nTavsiyenin Geldiği Sunucu: **${message.guild.name}**\nDavet Linki: ${davet}`).addField(`Tavsiyesi:`, `${tavsiye}`).setFooter(`Sende görüşünü belirtmek için alttaki emojilerden birine basabilirsin.`)).then(msg => {msg.react("✅").then(r => msg.react("❎")); 
    message.channel.sendEmbed(new Discord.RichEmbed().setColor("GREEN").setDescription('Tavsiyeniz başarıyla [destek sunucumuza](DESTEK SUNUCUNUN LİNKİ KARDEŞİM) gönderildi! ✅'));
})};

module.exports.help = {
  name: 'tavsiye'
};
 
