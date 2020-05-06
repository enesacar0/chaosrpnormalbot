const Discord = require('discord.js');

exports.run = async (client, message, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', '640497223502790667')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("chaosRP»  Bot | destek Destek")
  .setDescription(" <@&698898375361429524> <@&698898150924222484> **Canlı Desteği kullandğın için teşekkür ederiz, Seninle ekibim ilgilenicektir lütfen bekle! LÜTFEN DESTEK KANALINA GEÇ <#700797276985229414> **")
  .setFooter(" <@&671511389600219136> 15 dakika içinde geri dönülmezse lütfen iletişime geçin  ")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'destek'
};
