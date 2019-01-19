const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$" ; // «·»—›ﬂ”
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "??.");
   member.addRole (role);
  
})








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












client.on('message' , message => {
    var prefix = "?";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`·«  ÊÃœ ·œÌﬂ — »…`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`·ﬁœ  „ ›ﬂ «·»«‰œ ⁄‰ «·‘Œ’ \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**?Unban** !')
        .addField('**?User Unban :** ', `${user}` , true)
        .addField('**?By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});


// BAN --------------------------------------------------------------------------------

var prefix = "$"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**„‰‘‰ ‘Œ’**");
  if(!reason) return message.reply ("**«ﬂ » ”»» «·ÿ—œ**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**·«Ì„ﬂ‰‰Ì ÿ—œ ‘Œ’ «⁄·Ï „‰ — » Ì Ì—ÃÂ «⁄ÿ«¡ «·»Ê  — »Â ⁄«·Ì**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', message => {
const prefix = "$";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("„‰‘‰ ‘Œ’");
  if(!reason) return message.reply ("«ﬂ » ”»» «·ÿ—œ");
  if (!message.guild.member(user)
  .bannable) return message.reply("·«Ì„ﬂ‰‰Ì ÿ—œ ‘Œ’ «⁄·Ï „‰ — » Ì");
 
  message.guild.member(user).kick(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("523500323751591956").send({embed : banembed})
}
});


///----------------------------------------------------------------------------------------------------------

client.on("roleCreate", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('? RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
 client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')            
            .setTitle('? RoleDeleted')
            .addField('Role Name:', role.name, true)
            .addField('Role ID:', role.id, true)
            .addField('By:', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
   client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("?  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })
 client.on("channelDelete",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ??`)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
   
  
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
     let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`? **Message Edited
Sender <@${message.author.id}>                                                                                                                         Edited In** <#${message.channel.id}>\n\nBefore Edited:\n \`${message.cleanContent}\`\n\nAfter Edited:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`??? **Message Deleted**
**Sender <@${message.author.id}>                                                                                                                        Deleted In** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '??' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RANDOM')
       .setDescription(`?? <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RAMDOM')
       .setDescription(`?? <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
   let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;
   let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;
     oldM.guild.fetchAuditLogs()
    .then(logs => {
       let user = logs.entries.first().executor
     if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has muted in server`)
       .setFooter(`By : ${user}`)
        ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has unmuted in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has deafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has undeafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
  })
});
   client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});


///----------------------------------------------------------------------------------------------------------

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("Use $help");
    }
});



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'gate');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('?? | name :  ',`${member}`)
        .addField('?? | «ÿ·ﬁ „‰ œŒ·' , `Welcome to the server, ${member}`)
        .addField('?? | user :', "**[" + `${member.id}` + "]**" )
                .addField('?| «‰  «·⁄÷Ê —ﬁ„',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' «·‹”Ì—›—', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`»” »⁄—› ÊÌ‰ —Õ øøø :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`„⁄ «·”·«„Â  ‘—›‰« »ﬂ :raised_hand::skin-tone-1: :pensive: `)
        .addField('??    »ﬁÌ',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('PURPLE')
        .setFooter(`====«Â·« «·”Ì—›— ‰Ê— »Ìﬂ Ê «··Â====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'gate')
    if (!channel) return;
    channel.send({embed : embed});
 
    });
	
	
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("523205306763968533");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("523480643628302376");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("523205306763968533");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`**Invited By** **:** ${Invite.inviter} `) ;         
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});

	
	
	
	
client.on('message', function(msg) {
  let verifLevels = ["0", "1", "2", "3", "4"];
  let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "Russia": "Russia",
      "us-central": "U.S. Central",
      "sydney": "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      "london": "London",
      "amsterdam": "Amsterdam",
      "hongkong": "Hong Kong"
  };
 
  if(msg.content.startsWith ('$server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`)
    .addField('**__ Server Name | «”„ «·”Ì—›—__**',`[** __${msg.guild.name}__ **]`,true)
    .addField('**__ OwnerShip | «·«Ê‰— «·«”«”Ì__**',`**${msg.guild.owner}**`,true)
    .addField('**__ Server ID | «ÌœÌ «·”Ì—›—__**',`**${msg.guild.id}**`,true)
    .addField('**__ Members Count | ⁄œœ «·«⁄÷«¡__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**__ Online | «·«⁄÷«¡ «·«Ê‰·«Ì‰__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('**__ Verification Level | „” ÊÌ «·Õ„«ÌÂ__**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
    .addField('**__ Region | «·»·œ__**',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**__ Text Channels | —Ê„«  ﬂ «»ÌÂ__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**__ Voice Channels | —Ê„«  ’Ê ÌÂ__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**__ Created At | ’‰⁄ ›Ì __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});






client.on('message', message => {

var prefix = "$";

       if(message.content === prefix + "mc") {

                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__·Ì” ·œÌﬂ ’·«ÕÌ« __**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: false

              }).then(() => {

                  message.reply("**__ „  ﬁ›Ì· «·‘« __ ? **")

              });

                }

    if(message.content === prefix + "umc") {

                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__·Ì” ·œÌﬂ ’·«ÕÌ« __**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: true

                

              }).then(() => {

                  message.reply("**__ „ › Õ «·‘« __?**")

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
        .then(bans => message.channel.send(`${bans.size} ⁄œœ «‘Œ«’ «·„»‰œ… „‰ «·”Ì—›— `))
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
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("«‰  ·«  „·ﬂ ’·«ÕÌ«  !! ").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("«·»Ê  ·«Ì„·ﬂ ’·«ÕÌ«  ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole) return message.reply("** ·« ÌÊÃœ — »… «·„ÌÊ  'Muted' **").then(msg => {msg.delete(5000)});
    if (message.mentions.users.size < 1) return message.reply('** ÌÃ» ⁄·Ìﬂ «·„‰‘‰ «Ê·« **').then(msg => {msg.delete(5000)});
    let reason = message.content.split(" ").slice(2).join(" ");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`„ÌÊ `, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("**:busts_in_silhouette:  «·„” Œœ„**",  '**[ ' + `${user.tag}` + ' ]**',true)
    .addField("**:hammer:   „ »Ê«”ÿ… **", '**[ ' + `${message.author.tag}` + ' ]**',true)
    .addField("**:book:  «·”»»**", '**[ ' + `${reason}` + ' ]**',true)
    .addField("User", user, true)  
    message.channel.send({embed : muteembed});
    var muteembeddm = new Discord.RichEmbed()
    .setAuthor(`Muted!`, user.displayAvatarURL)
    .setDescription(`
    ${user} «‰  „⁄«ﬁ» »„ÌÊ  ﬂ «»Ì »”»» „Œ«·›… «·ﬁÊ«‰Ì‰ 
    
     ${message.author.tag}  „  „⁄«ﬁ» ﬂ »Ê«”ÿ…
    
    [ ${reason} ] : «·”»»
    
    «–« ﬂ«‰  «·⁄ﬁÊ»… ⁄‰ ÿ—Ìﬁ «·Œÿ√  ﬂ·„ „⁄ «·„”ƒ·Ì‰ 
    `)
    .setFooter(`›Ì ”Ì—›— : ${message.guild.name}`)
    .setColor("RANDOM")
     user.send( muteembeddm);
    }
    if (command == "unmute") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("«‰ « ·«  „·ﬂ ’·«ÕÌ« ").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("«·»Ê  ·«Ì„·ﬂ ’·«ÕÌ«  ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole) return message.reply("** ·« ÌÊÃœ — »… «·„ÌÊ  'Muted' **").then(msg => {msg.delete(5000)});
    if (message.mentions.users.size < 1) return message.reply('** ÌÃ» ⁄·Ìﬂ «·„‰‘‰ «Ê·« **').then(msg => {msg.delete(5000)});
    let reason = message.content.split(" ").slice(2).join(" ");
    message.guild.member(user).removeRole(muteRole);
    const unmuteembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`›ﬂ „ÌÊ `, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("**:busts_in_silhouette:  «·„” Œœ„**",  '**[ ' + `${user.tag}` + ' ]**',true)
    .addField("**:hammer:   „ »Ê«”ÿ… **", '**[ ' + `${message.author.tag}` + ' ]**',true)
    .addField("**:book:  «·”»»**", '**[ ' + `${reason}` + ' ]**',true)
    .addField("User", user, true)  
    message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
    var unmuteembeddm = new Discord.RichEmbed()
    .setDescription(` „ ›ﬂ «·„ÌÊ  ⁄‰ﬂ ${user}`)
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
      .addField('⁄œœ «⁄÷«¡ «·”Ì—›—',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });




client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**? «”› ·ﬂ‰ Â–« «·«„— ··”Ì—›—«  ›ﬁÿ **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  ·« ÌÊÃœ ·œÌﬂ ’·«ÕÌ… ·„”Õ «·‘« **');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "`` ‹‹„ „”Õ «·‘«  ``",
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
var prefix = "$";// «·»—›ﬂ”
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
var all = msg.content.split(" ").slice(1) - msg.mentions.users.first();
if(msg.content.startsWith(prefix + "msg")) {
msg.delete(1500);
msg.channel.send(` „ «·«—”«·Â «·Ï ${men}`).then(msgS => {
msgS.delete(1500);
if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**··√”› ·«  „ ·ﬂ ’·«ÕÌ…** `ADMINISTRATOR`' );
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
            if (message.content.startsWith("$help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(':white_check_mark: Done ')
.addField(':white_check_mark: Check You DM.')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
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






client.on("message", message => {
 if (message.content === "$help") {
        message.react("??")
                message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
***__Ê’› ⁄‰ «·»Ê __***
????????????? {? «Ê«„— «·»Ê ?} ?????????????
? $clear ? „”Õ «·‘« 
? $mc ? ﬁ›· «·‘« 
? $umc ? › Õ «·‘« 
? $avatar ? ⁄—÷ ’Ê— ﬂ «Ê ‘Œ’  „‰‘‰Â
? $bans ? ÌﬁÊ·ﬂ ⁄œœ «·«‘Œ«’ «·„»‰œÌ‰ „‰ «·”Ì—›—
? $ct ? «‰‘«¡ —Ê„ ﬂ «»Ì
? $cv ? «‰‘«¡ —Ê„ ’Ê Ì
? $ban ?  »‰Ìœ ⁄÷Ê „‰ «·”Ì—›—
? $kick ? ÿ—œ ⁄÷Ê „‰ «·”Ì—›—
? $mute ? «⁄ÿ«¡ „ÌÊ  ﬂ «»Ì
? $unmute ? ›ﬂ «·„ÌÊ  «·ﬂ «»Ì
? $count ? ⁄—÷ ⁄œœ «⁄÷«¡ «·”Ì—›—
? $server ? „⁄·Ê„«  «·”Ì—›—
? $mc ? ﬁ›· «·‘« 
? $umc ? › Õ «·‘« 
? $hide ? «Œ›«¡ «·—Ê„
? $show ? ≈ŸÂ«— «·—Ê„
? $msg ? ≈—”«· —”«·Â ·‘Œ’ ⁄»— «·»Ê 
? $bc ? ≈—”«· —”«·Â »—Êœ ﬂ«” 
????????????? {? By ? ! vM , itzZa1D.#8866  ?} ?????????????
`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", (message) => {
if (message.content.startsWith("$ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage(' ‹„ ≈‰‹‘«¡ —Ê„ ﬂ‹ «»‹Ì')

}
});
client.on("message", (message) => {
if (message.content.startsWith("$cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage(' ‹„ ≈‰‹‘«¡ —Ê„ ’‹Ê Ì')
    
}
});



client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '$'; // ﬁœ—  €Ì— «·»—›ﬂ”
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});



 	
client.on('message', message => { 
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**Â–« «·√„— ›ﬁÿ ··”Ì—›—« **').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`„Õ ÊÏ «·—”«·Â : ${args}`)
.setDescription(`**»—Êœﬂ«”  »‹ «„»œ ??\n»—Êœﬂ«”  »œÊ‰ «„»œ? \n·œÌﬂ œﬁÌﬁÂ ··√Œ Ì«— ﬁ»· «·€«¡ «·»—Êœﬂ«” **`)
if (!args) return message.reply('**ÌÃ» ⁄·Ìﬂ ﬂ «»… ﬂ·„… «Ê Ã„·… ·≈—”«· «·»—Êœﬂ«” **');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))
 
var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check:  „ «—”«· «·—”«·Â »‰Ã«Õ`).then(m => m.delete(5000));
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
  message.channel.send(`:ballot_box_with_check:  „ «—”«· «·—”«·Â »‰Ã«Õ`).then(m => m.delete(5000));
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