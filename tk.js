const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const client = new Discord.Client();
const prefix = "-"



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log(`[Start] ${new Date()}`);
  console.log('?[?????????????????????????????????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????????????????????????????]?');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('?[????????????????????????????????????]?')
  console.log('')
  console.log('?[????????????]?')
  console.log('                Bot Is Online')
  console.log('?[????????????]?')
  console.log('')
  console.log('')
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help-t | Ticket.`,'https://www.twitch.tv/ImD3s_x');	
}); 


client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("-new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Server Team")) return message.channel.send(`áÇÒã ÊÓæí ÑÊÈÉ ÇÓãåÇ \`Support Team\` æÊäØí ÇáÈæÊ ÇÏãäíÊÑ ÍÊÇ íŞÏÑ íÓæí ÇáÑæãÇÊ æíÚÏá ÈÑãÔäÇÊ`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Server Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Êã ÇäÔÇÁ ÊĞßÑÊß, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Êã İÊÍ ÊĞßÑÉ ÇáÑÌÇÁ ÇäÊÙÇÑ Çáì Ííä íÃÊí ãÔÑİ æíŞæã ÈáÑÏ Úáíß`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`åá ÇäÊ ãÊÃßÏ ãä ÇŞİÇáß ááÊĞßÑÉ ÇĞÇ ãÊÃßÏ ÇßÊÈ -close`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '-close', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// ALPHA CODES
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ALPHA CODES
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});



client.on("message", message => {
 if (message.content === "-help-t") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
                                ? ?????????????????? ? 
                   ?? ? ÇæÇãÑ ÇÏÇÑíÉ? ??
??-new ? İÊÍ ÊĞßÑå ?
??-close ? Şİá ÇáÊĞßÑå ?
                                ? ?????????????????? ? 
`)


message.author.sendEmbed(embed)

}
});

client.on('message', message => {
     if (message.content === "-help-t") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ÊÜÜÜÜã" , " |  ÊÜÜÜÜã ÇÑÓÜÜÇáß İí ÇáÎÜÜÇÕ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', omar => {
var prefix = "-";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`Êã ÍĞİ ÌãíÚ ÇáÑÊÈ ÈäÌÇÍ`")
}// omar jedol / Codes
});



client.login(process.env.BOT_TOKEN);