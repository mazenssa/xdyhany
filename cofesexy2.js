const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$" ; // ÇáÈÑÝßÓ
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
















client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "? Co");
   member.addRole (role);
  
})

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "? Co 0.2 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "? Co 0.3 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "? Co 0.4 K ");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "0.5 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "» ??. 0.8 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "» ??. 0.9 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "» ??. 1 K");
   member.addRole (role);
  
})


client.on("guildMemberAdd", async member => {
  let moment2 = require('moment-duration-format'),
      moment = require("moment"),
      date = moment.duration(new Date() - member.user.createdAt).format("d");

  if(date < 30) {
    member.ban("Member account age is lower than 30 days.")
  }
});







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



  
	

client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "ãÓÍ")) {
                  if(!message.channel.guild) return message.reply('**:x: ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');         
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


var prefix = "$";

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ÚÏÏ ÇáÇÚÖÇÁ ÇáãÓÊáãíä`); 
 message.delete(); 
};     
});








var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("524725174491283486");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("528351127696310272");
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
        guild = client.guilds.get("524725174491283486");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`.                                             **Welcome : ** ${member} :tulip:
                                                               **Invited BY :** ${Invite.inviter} :wilted_rose: `) ;         
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});













client.on('message' , message => {
var prefix = "$"
if (message.author.bot) return;
if (message.content.startsWith(prefix + "399697177259147275")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
client.users.get("ÇáÇíÏí ÍÞß").send(
    "\n" + "**" + "? ÇáÓíÑÝÑ :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ? ÇáãÑÓá : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ? ÇáÑÓÇáÉ : " + "**" +
    "\n" + "**" + args + "**");


}
    
});




client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "user")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **ÇáÈæÊ áÇ íãÊáß ÕáÇÍíÉ**');
  msg.guild.createChannel(`íÊã ÊÍÖíÑ ÇáÑæã :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : ? ? ${msg.guild.members.size} ? ?`);
 },1000);
  });
  }
});









const adminprefix = "$";
const developers = ['399697177259147275'];

console.log("Randy ");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : zaid`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.send(`Êã ÊÛííÑ ÇáÈáÇíäÞ Çáì   ${argresult}`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`Êóã ÊÛííÑ ÇáæÇÊÔíäÞ Çáì   ${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`Êóã ÊÛííÑ ÇááíÓíäíäÞ Çáì   ${argresult}`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Randy");
      message.channel.send(`Êã ÊÛííÑß ÍÇáÊß ÈÇáÊæíÊÔ Çáì   ${argresult}`)
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`ÌÇÑí ÊÛííÑ ÇáÃÓã áÜ ..${argresult} `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`ÌÇÑí ÊÛííÑ ÇáÃÝÊÇÑ... : `);
}
});


	
client.on('ready', () => {
var x = client.channels.get("ÂíÏí ÇáÑæã"); ///Voice Room
if (x) x.join();
});


client.login(process.env.BOT_TOKEN);