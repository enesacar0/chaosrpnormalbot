const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('Aleyküm selam!');
  }
  if (msg.content.toLowerCase() === prefix + 'tokovip') {
    msg.reply('✘  http://rakuncdn.com/docs/tstoko.zip adresinden Team Speak i indiriniz. ✘ İndirdiğiniz dosyanın içindeki ts3 ve tokovoipforts dosyalarını kurunuz. ✘ 185.247.137.102:9991 şifre:sifreyok123 Ip Adresine bağlanınız ✘ Şifre kısmına, sifreyok123  yazarak giriş yapınız. ✘ Ts ayarlarından konuşma tuşu atayınız. Tools > Options > Capture > Push to Talk seçeneğini seçerek yanındaki sekmeden bir tuş atayınız. https://gyazo.com/83435e2f1a27db3ef5fd76861e932977 - Z tuşuna basarak Fısıldama, Normal Konuşma ve Bağırma seçeneklerini ayarlayabilirsiniz. - Shift+X tuşlarına basakar Polis ve Ems ler telsizlerine erişebilirler. -Team Speak te giriş çıkış seslerini kapayabilmek için, Self > Sound Pack > Sounds deactivated seçeneğini seçebilirsiniz. -Oyun içi sesi kapatmanız gerekmektedir.  Settings > Voice Chat > Voice Chat Enabled > Off Gyazo Gyazo Bildirim sesini kapatmak için rehber Tools > Options >Notifications > Sol üstte ki Sound Pack seçeneğini Sound Deactivated olarak değiştirin > Sağ üstteki While Output Muted seçeneğini Play No Sounds olarak değiştirin. Bildirim sesi problemi çözülmeyenler ;  Self > Sound Pack > Sounds deactivated seçeneğini işaretlemeleri gerekmektedir. TeamSpeak e girmeye çalışırken Failed to connect to server yazısıyla karşılaşıyorsanız TeamSpeak i kapatın sonra şifreyi girmeden deneyin ekranınıza şifreyi girmek için bir yazı gelecek oraya şifreyi giriniz. Sorununuz düzelecektir.');
  }
  
  
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi! (Emirhan Saraç)");
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
