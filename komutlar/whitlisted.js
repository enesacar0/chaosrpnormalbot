const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {

    let kayıt = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("📥 Kendini etiketlemelisin!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "whitelisted");
    if (!role) {
        try {
            role = await msg.guild.Role({
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    
                });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" 💡 :regional_indicator_l: :regional_indicator_a:     :regional_indicator_k: :regional_indicator_a: :regional_indicator_y: ı :regional_indicator_t: :regional_indicator_l: ı :regional_indicator_s: ı :regional_indicator_n:     :regional_indicator_z: :regional_indicator_a: :regional_indicator_t: :regional_indicator_e: :regional_indicator_n:! ")
        }
    });

    await kayıt.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" :regional_indicator_k: :regional_indicator_a: :regional_indicator_y: :regional_indicator_i: :regional_indicator_t:     :regional_indicator_e: :regional_indicator_t: :regional_indicator_t: :regional_indicator_i: :regional_indicator_m:")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'whitelisted',
    description: 'Sunucuya kayıt olursunuz!',
    usage: 'whitelisted'
};