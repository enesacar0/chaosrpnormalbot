const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
  if (msg.content.toLowerCase() === prefix +'ts3') {
    msg.reply('ip: (server.chaosrp.com) şifre: (<@&698898375361429524>) ');
  }
  
  if (msg.content.toLowerCase() === prefix + 'ip') {
    msg.reply(':white_check_mark: connect server.chaosrp.com :white_check_mark:');
  
  }
 

  if (msg.content.toLowerCase() === prefix + 'tokovoip') {
    msg.reply('Tokovoip indirmek için  :white_check_mark: http://server.chaosrp.com:8080/tokovoip.rar :white_check_mark: bu linki kullanın.');
  
  }
  if (msg.content.toLowerCase() === prefix +'yardım') {
    msg.reply(' :gear: YARDIM :gear: \n    :gear:  - düello         (istediğiniz bir kişi ile düello atarsınız!) :gear: \n :gear: -destek       (Destek Tablebi Oluşturur) :gear: \n  :gear: -dans    (Yazdığınız yazıyı dans🎉 ascii şekline çevirir.) :gear: \n :gear: -hava          (hava durumunu gösterir):gear:\n:gear:-oyun (Verilen oyun hakkında bilgi verir) :gear:\n :gear:-ticket (ticket açar):gear:\n :gear: -ses (ticket şeklinde ses kanalı açar):gear: \n ');
  }

   
  

  
  if (msg.content.toLowerCase() === prefix + 'temizle 1') {
    msg.channel.bulkDelete(2);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 2') {
    msg.channel.bulkDelete(3);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 3') {
    msg.channel.bulkDelete(4);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 4') {
    msg.channel.bulkDelete(5);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 5') {
    msg.channel.bulkDelete(6);
    msg.channel.sendMessage("");
  }if (msg.content.toLowerCase() === prefix + 'temizle 6') {
    msg.channel.bulkDelete(7);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 7') {
    msg.channel.bulkDelete(8);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 8') {
    msg.channel.bulkDelete(9);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 9') {
    msg.channel.bulkDelete(10);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 10') {
    msg.channel.bulkDelete(11);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 11') {
    msg.channel.bulkDelete(12);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 12') {
    msg.channel.bulkDelete(13);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 13') {
    msg.channel.bulkDelete(14);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 14') {
    msg.channel.bulkDelete(15);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 15') {
    msg.channel.bulkDelete(16);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 16') {
    msg.channel.bulkDelete(17);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 17') {
    msg.channel.bulkDelete(18);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 18') {
    msg.channel.bulkDelete(19);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 19') {
    msg.channel.bulkDelete(20);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 20') {
    msg.channel.bulkDelete(21);
    msg.channel.sendMessage("");
  }
   if (msg.content.toLowerCase() === prefix + 'temizle 21') {
    msg.channel.bulkDelete(22);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 22') {
    msg.channel.bulkDelete(23);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 23') {
    msg.channel.bulkDelete(24);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 24') {
    msg.channel.bulkDelete(25);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 25') {
    msg.channel.bulkDelete(26);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 26') {
    msg.channel.bulkDelete(27);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 27') {
    msg.channel.bulkDelete(28);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 28') {
    msg.channel.bulkDelete(29);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 29') {
    msg.channel.bulkDelete(30);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 30') {
    msg.channel.bulkDelete(31);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 31') {
    msg.channel.bulkDelete(32);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 33') {
    msg.channel.bulkDelete(34);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 34') {
    msg.channel.bulkDelete(35);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 35') {
    msg.channel.bulkDelete(36);
    msg.channel.sendMessage("");
  } 
  if (msg.content.toLowerCase() === prefix + 'temizle 36') {
    msg.channel.bulkDelete(37);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 37') {
    msg.channel.bulkDelete(38);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 38') {
    msg.channel.bulkDelete(39);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 39') {
    msg.channel.bulkDelete(40);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 40') {
    msg.channel.bulkDelete(41);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 41') {
    msg.channel.bulkDelete(42);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 42') {
    msg.channel.bulkDelete(43);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 43') {
    msg.channel.bulkDelete(44);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 44') {
    msg.channel.bulkDelete(45);
    msg.channel.sendMessage("");
  } 
  if (msg.content.toLowerCase() === prefix + 'temizle 45') {
    msg.channel.bulkDelete(46);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 47') {
    msg.channel.bulkDelete(48);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 48') {
    msg.channel.bulkDelete(49);
    msg.channel.sendMessage("");
  }  
  if (msg.content.toLowerCase() === prefix + 'temizle 49') {
    msg.channel.bulkDelete(50);
    msg.channel.sendMessage("");
  }
  if (msg.content.toLowerCase() === prefix + 'temizle 50') {
    msg.channel.bulkDelete(51);
    msg.channel.sendMessage("");
  }  








  
  
  
   if (msg.content.toLowerCase() === prefix + 'başvuru') {
    msg.reply(':white_check_mark: https://docs.google.com/forms/d/e/1FAIpQLSfv86-SInM013hpbgMmNd4irqcBq_NyLwRnYY8nAFZHH32JJg/formResponse :white_check_mark:');
  }
  if (msg.content.toLowerCase() === prefix + 'dclink') {
    msg.reply(':white_check_mark: discord.gg/qckZxdZ :white_check_mark:');
  }
  if (msg.content.toLowerCase() === prefix + 'yapımcıdavet') {
    msg.reply(':white_check_mark: discord.gg/qckZxdZ :white_check_mark:');
  }
  
  
  
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);