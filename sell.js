const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$" ; // «·»—›ﬂ”
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');




client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 0.3 K");
   member.addRole (role);
  
})

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 0.4 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 0.5 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 0.6 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 0.7 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 0.8 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 0.9 K");
   member.addRole (role);
  
})
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??. 1 K");
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

client.on('ready', function(){ 
    var ms = 30000 ;
    var setGame = [`Stars Server <3 `,`System Bot !!!`,`Stars !`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/imd3s_x`);
    }, ms);30000

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



  
	

client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith("„”Õ")) {
                  if(!message.channel.guild) return message.reply('**:x: «”› ·ﬂ‰ Â–« «·«„— ··”Ì—›—«  ›ﬁÿ **');         
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


var prefix = "$";

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ⁄œœ «·«⁄÷«¡ «·„” ·„Ì‰`); 
 message.delete(); 
};     
});



client.on('message' , message => {
var prefix = "$"
if (message.author.bot) return;
if (message.content.startsWith(prefix + "Owner")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
client.users.get("399697177259147275").send(
    "\n" + "**" + "? «·”Ì—›— :" + "**" +
    "\n" + "**" + "ª " + message.guild.name + "**" +
    "\n" + "**" + " ? «·„—”· : " + "**" +
    "\n" + "**" + "ª " + message.author.tag + "**" +
    "\n" + "**" + " ? «·—”«·… : " + "**" +
    "\n" + "**" + args + "**");


}
    
});









const adminprefix = "$";
const developers = ['399870952491581441'];

console.log("Randy ");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}By : zaid`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.send(` „  €ÌÌ— «·»·«Ì‰ﬁ «·Ï   ${argresult}`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` Û„  €ÌÌ— «·Ê« ‘Ì‰ﬁ «·Ï   ${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` Û„  €ÌÌ— «··Ì”Ì‰Ì‰ﬁ «·Ï   ${argresult}`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Randy");
      message.channel.send(` „  €ÌÌ—ﬂ Õ«· ﬂ »«· ÊÌ ‘ «·Ï   ${argresult}`)
  }
  if (message.content.startsWith(adminprefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Ã«—Ì  €ÌÌ— «·√”„ ·‹ ..${argresult} `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Ã«—Ì  €ÌÌ— «·√› «—... : `);
}
});


client.login(process.env.BOT_TOKEN);