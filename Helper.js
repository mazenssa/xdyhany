const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$" ; // ÇáÈÑÝßÓ
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');




client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('                          Bot By : ImD3s_x');
  console.log('                          Bot is Ready <3');  
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('By : ImD3s_x ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');  
  console.log('is online')
client.user.setStatus("dnd");
});




client.on('message', message => {

var prefix = "$";

       if(message.content === prefix + "mc") {

                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: false

              }).then(() => {

                  message.reply("**__Êã ÊÞÝíá ÇáÔÇÊ__ ? **")

              });

                }

    if(message.content === prefix + "umc") {

                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__áíÓ áÏíß ÕáÇÍíÇÊ__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: true

                

              }).then(() => {

                  message.reply("**__Êã ÝÊÍ ÇáÔÇÊ__?**")

              });

    }

       

});

client.on('message', message => {
        if(message.content === prefix + "hide") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ?');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! ?  ')
   }
  });

/// !show 
  
client.on('message', message => {
        if(message.content === prefix + "show") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('?');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('Channel Showen Successfully ! ?  ')
   }
  });
  
  
  
  
  
  
  
  
  
client.on('message', message => {
    if (message.content.startsWith("$bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} ÚÏÏ ÇÔÎÇÕ ÇáãÈäÏÉ ãä ÇáÓíÑÝÑ `))
  .catch(console.error);
}
}); 


client.on('message', message => {   
    if (message.author.boss) return;
    var prefix = "$";
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "mute") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇäÊ áÇ Êãáß ÕáÇÍíÇÊ !! ").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇáÈæÊ áÇíãáß ÕáÇÍíÇÊ ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").then(msg => {msg.delete(5000)});
    if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇð **').then(msg => {msg.delete(5000)});
    let reason = message.content.split(" ").slice(2).join(" ");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`ãíæÊ`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("**:busts_in_silhouette:  ÇáãÓÊÎÏã**",  '**[ ' + `${user.tag}` + ' ]**',true)
    .addField("**:hammer:  Êã ÈæÇÓØÉ **", '**[ ' + `${message.author.tag}` + ' ]**',true)
    .addField("**:book:  ÇáÓÈÈ**", '**[ ' + `${reason}` + ' ]**',true)
    .addField("User", user, true)  
    message.channel.send({embed : muteembed});
    var muteembeddm = new Discord.RichEmbed()
    .setAuthor(`Muted!`, user.displayAvatarURL)
    .setDescription(`
    ${user} ÇäÊ ãÚÇÞÈ ÈãíæÊ ßÊÇÈí ÈÓÈÈ ãÎÇáÝÉ ÇáÞæÇäíä 
    
     ${message.author.tag} ÊãÊ ãÚÇÞÈÊß ÈæÇÓØÉ
    
    [ ${reason} ] : ÇáÓÈÈ
    
    ÇÐÇ ßÇäÊ ÇáÚÞæÈÉ Úä ØÑíÞ ÇáÎØÃ Êßáã ãÚ ÇáãÓÄáíä 
    `)
    .setFooter(`Ýí ÓíÑÝÑ : ${message.guild.name}`)
    .setColor("RANDOM")
     user.send( muteembeddm);
    }
    if (command == "unmute") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇäÊÇ áÇ Êãáß ÕáÇÍíÇÊ").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("ÇáÈæÊ áÇíãáß ÕáÇÍíÇÊ ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").then(msg => {msg.delete(5000)});
    if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇð **').then(msg => {msg.delete(5000)});
    let reason = message.content.split(" ").slice(2).join(" ");
    message.guild.member(user).removeRole(muteRole);
    const unmuteembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Ýß ãíæÊ`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("**:busts_in_silhouette:  ÇáãÓÊÎÏã**",  '**[ ' + `${user.tag}` + ' ]**',true)
    .addField("**:hammer:  Êã ÈæÇÓØÉ **", '**[ ' + `${message.author.tag}` + ' ]**',true)
    .addField("**:book:  ÇáÓÈÈ**", '**[ ' + `${reason}` + ' ]**',true)
    .addField("User", user, true)  
    message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
    var unmuteembeddm = new Discord.RichEmbed()
    .setDescription(`Êã Ýß ÇáãíæÊ Úäß ${user}`)
    .setAuthor(`UnMute!`, user.displayAvatarURL)
    .setColor("RANDOM")
      user.send( unmuteembeddm);
    }
    });
	
	
	
	
	
	
	
 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('ÚÏÏ ÇÚÖÇÁ ÇáÓíÑÝÑ',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });




client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**? ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  áÇ íæÌÏ áÏíß ÕáÇÍíÉ áãÓÍ ÇáÔÇÊ**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``ÊÜÜã ãÓÍ ÇáÔÇÊ ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });



  
	
 const devs = ['399697177259147275' , '' , ''];
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/ImD3s_x");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });




client.on("message", msg => {
var prefix = "$";// ÇáÈÑÝßÓ
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
var all = msg.content.split(" ").slice(1) - msg.mentions.users.first();
if(msg.content.startsWith(prefix + "msg")) {
msg.delete(1500);
msg.channel.send(`Êã ÇáÇÑÓÇáå Çáì ${men}`).then(msgS => {
msgS.delete(1500);
if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**ááÃÓÝ áÇ ÊãÊáß ÕáÇÍíÉ** `ADMINISTRATOR`' );
let embed = new Discord.RichEmbed()
.setTitle("Message!!!!")
.addField("Sender", msg.author.tag, true)
.addField("Server", msg.guild.name, true)
.addField(`Message`,`${args}`,  true)
men.sendMessage(embed);
})
}
});



 client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('$ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms ?? ")
.addField('**Discord API:**',api + " ms ?? ")
message.channel.send({embed:embed});
}
});








client.on("message", (message) => {
if (message.content.startsWith("$ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ßÜÊÇÈÜí')

}
});
client.on("message", (message) => {
if (message.content.startsWith("$cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ÕÜæÊí')
    
}
});




 	
client.on('message', message => { 
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**åÐÇ ÇáÃãÑ ÝÞØ ááÓíÑÝÑÇÊ**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`ãÍÊæì ÇáÑÓÇáå : ${args}`)
.setDescription(`**ÈÑæÏßÇÓÊ ÈÜ ÇãÈÏ ??\nÈÑæÏßÇÓÊ ÈÏæä ÇãÈÏ? \náÏíß ÏÞíÞå ááÃÎÊíÇÑ ÞÈá ÇáÛÇÁ ÇáÈÑæÏßÇÓÊ**`)
if (!args) return message.reply('**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ÌãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))
 
var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check: Êã ÇÑÓÇá ÇáÑÓÇáå ÈäÌÇÍ`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: Êã ÇÑÓÇá ÇáÑÓÇáå ÈäÌÇÍ`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});	
	
	
	


client.login(process.env.BOT_TOKEN);