 //Sil komudu ile, sohbeti daha temiz tutabilirsiniz.//

const Discord = require('discorsd.js') //Bizim için en önemli olan, discord.js modülünü indiriyoruz.

module.exports.run = async (bot, message, args) => { //Kodlarımızı gireceğimiz yeri ayarlıyoruz.
    const mesajsayisi = parseInt(args[0]) //Mesaj sayısını, sadece sayı olarak ayarlıyoruz.
    if(!mesajsayisi) return message.channel.send('Kaç tane mesaj silmek istersin koçum?') //Eğer kullanıcı sadece komudu girip, bir şey yazmadıysa bu yazıyı göndersin.
    if(mesajsayisi > 99) return message.channel.send('Koçum bak 99\'dan fazla mesaj silmiyorum.') //Eğer kullanıcı 99 dan fazla bir değer girdiyse bu yazıyı göndersin.
    message.channel.bulkDelete(mesajsayisi + 1) //Girdiğimiz mesaj kadar mesaj silsin.
    message.channel.send('Başarıyla ' + mesajsayisi + ' adet mesaj sildim. ✅\n5 saniye sonra mesajı silicem bilader.').then(message => message.delete(5000)); //Sildiğini söylesin ve mesajı 5 saniye sonra silsin.
}//Komudumuzu bitiriyoruz.

module.exports.help = { //Komudumuzu kullanmamıza yarayan yerleri giriyoruz.
    name: 'sil' //Komudumuzun ismini giriyoruz.
}//Ve komudumuzu bitiriyoruz.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['YEDEK KOMUT1', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "Sil komudu ile, sohbeti daha temiz tutabilirsiniz",
  usage: "sil <mesaj>"
};
