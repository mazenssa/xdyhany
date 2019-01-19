const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "/";
const Canvas = require('canvas');
const moment = require('moment');
       

 const dateFormat = require('dateformat');

var jimp = require('jimp')
const request = require('request');
const tpoints = {};
const vpoints = {};

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
  console.log(' Bot Is Online')
  console.log('?[????????????]?')
  console.log('')
  console.log('')
});


///---------------------------------------------------

const welcome = JSON.parse(fs.readFileSync('./welcomer.json' , 'utf8'));
 
client.on('message', message => {
           if (!message.channel.guild) return;
 
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setWelcomer")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**You Have been sucsfully selected a Welcome Channel.**')
.addField('__Channel Name__:', `${room}`)
.addField('__Requested By__:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
welcome[message.guild.id] = {
channel: room,
onoff: 'On',
by: 'On',
dm: 'Off'
}
fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
    }})
client.on('message', message => {
 
    if(message.content.startsWith(prefix + "toggleWelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          onoff: 'Off'
        }
          if(welcome[message.guild.id].onff === 'Off') return [message.channel.send(`**The Welcome Is __????__ !**`), welcome[message.guild.id].onoff = 'On']
          if(welcome[message.guild.id].onoff === 'On') return [message.channel.send(`**The Welcome Is __??????__ !**`), welcome[message.guild.id].onoff = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
       
        client.on('message', message => {
 
    if(message.content.startsWith(prefix + "toggleDmwelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          dm: 'Off'
        }
          if(welcome[message.guild.id].dm === 'Off') return [message.channel.send(`**The Welcome Dm Is __????__ !**`), welcome[message.guild.id].dm = 'On']
          if(welcome[message.guild.id].dm === 'On') return [message.channel.send(`**The Welcome Dm Is __??????__ !**`), welcome[message.guild.id].dm = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
         
        })
 
        client.on('message', message => {
 
            if(message.content.startsWith(prefix + "toggleInvitedby")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                if(!welcome[message.guild.id]) welcome[message.guild.id] = {
                  by: 'Off'
                }
                  if(welcome[message.guild.id].by === 'Off') return [message.channel.send(`**The Invited By Is __????__ !**`), welcome[message.guild.id].by = 'On']
                  if(welcome[message.guild.id].by === 'On') return [message.channel.send(`**The Invited By Is __??????__ !**`), welcome[message.guild.id].by = 'Off']
                  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                    if (err) console.error(err)
                    .catch(err => {
                      console.error(err);
                  });
                    })
                  }
                 
                })
               
 
client.on("guildMemberAdd", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
        if(welcome[member.guild.id].onoff === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(':  «—ÌŒ œŒÊ·ﬂ «·œ”ﬂÊ—œ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
      }})
 
 
client.on('guildMemberAdd',async member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
    if(welcome[member.guild.id].onoff === 'Off') return;
    const Canvas = require('canvas');
    const jimp = require('jimp');
    const w = ['welcome_4.png'];
          let Image = Canvas.Image,
              canvas = new Canvas(800, 300),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();
   
          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 800, 300);
   
  })
   
                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                   if (err) return console.log(err);
   
            ctx.font = '36px Arial';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(member.user.username, 545, 177);
           
            ctx.font = '16px Arial Bold';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);
           
            let Avatar = Canvas.Image;
            let ava = new Avatar;
            ava.src = buf;
            ctx.beginPath();
            ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(ava, 36, 21, 260, 260);
             
            let c = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
            if(!c) return;
            c.sendFile(canvas.toBuffer());
   
  });
  });
  });
 
  const invites = {};
 
const wait = require('util').promisify(setTimeout);
 
client.on('ready', () => {
  wait(1000);
 
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
 
client.on('guildMemberAdd', member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  by: 'Off'
                }
    if(welcome[member.guild.id].by === 'Off') return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === `${welcome[member.guild.id].channel}`);
    if(!logChannel) return;
      setTimeout(() => {
    logChannel.send(`**Invited By :** <@${inviter.id}>`);
  },2000)
  });
});
 
client.on("guildMemberAdd", member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  dm: 'Off'
                }
        if(welcome[member.guild.id].dm === 'Off') return;
  member.createDM().then(function (channel) {
  return channel.send(` Welcome to the Server :bouquet: 
.
**__Name__ : ${member} :dove: 
__Member No.__ : ${member.guild.memberCount} :herb: 
** `)
}).catch(console.error)
})

///------------------------------------------------


  
  
  


client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`${client.guilds.size} Servers`,' Canon Botô ',' ?help| ?support',`${client.users.size} Members`,'-invite | -inv ','By: itzZa1D !!'];
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
    }, ms);
});	
	
	
	



/// invite / inv ..

//client.on("message", message => {
// if (message.content === "-invite") {
//  const embed = new Discord.RichEmbed()
//      .setColor("RANDOM")
//      .setFooter('© Canon Bot :heart: 2018-2019 ')
//      .addField('Thanks you for using Canon Bot', `https://modest-lewin-146a75.netlify.com`)
//  message.author.send({embed});
//
// }
//}); 



/// Ban 

client.on('message', message => {
const prefix = "-";
  if (message.author.zaid) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Dont have permissions.**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**Mention the member.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**The Bot Role must be above the given player role.**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

/// Kick

client.on('message', message => {
const prefix = "-";
  if (message.author.zaid) return;
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

  if (message.mentions.users.size < 1) return message.reply("type the user to kick");
  if(!reason) return message.reply (":x: Type the Reason !");
  if (!message.guild.member(user)
  .bannable) return message.reply("I can not kick who are above me :(");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  //client.channels.get("492086928397565952").send({embed : banembed})
}
});

/// mute 

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**You Cannot give mute to your self :x:**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**You can't give mute for a staff member. :x:**`); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **No Reason.** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**You Have been Muted !!**')
    .addField('**Server**',[ message.guild.name ]) //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    .addField('**BY:**', [ message.author ])
    .addField('**Reason:**',reason)
    .addField('**Time:**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
  }
});

/// un mute 


client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} ·ﬁœ  „ ›ﬂ «·„ÌÊ  ⁄‰Â „”»ﬁ«**`)
 
  await kinggamer.removeRole(role) //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});



/// ban list

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
    if (message.content.startsWith("$banlist")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
  .catch(console.error);
}
});
/// count 

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='?count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':rose:| **Members Count !**')
      .addBlankField(true)
      .addField(':small_orange_diamond: Count :',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

	
	
/// mc 	
	
client.on('message', message => {

    if(message.content === prefix + "-mc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You dont have Permission__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**Chat Locked ! ? **")
           });
             }

			 /// umc
 if(message.content === prefix + "-umc") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You dont have Permission__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**Chat unLocked !**")
           });
             }
             
      
    
});


      client.on('message', message => {
        if (message.content === "-inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(`p9xpo Bot©`, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here.. !`)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=531344573469818891&permissions=0&scope=bot`)      
     message.channel.sendEmbed(embed);
       }
   });
   
   
      client.on('message', message => {
        if (message.content === "-invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(`Canon Bot©`, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here.. !`)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=502196267175116811&scope=bot&permissions=2146958591`)      
     message.channel.sendEmbed(embed);
       }
   });  
   
   
 /// ping  
   
 client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('Bot Ping is' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 
  message.channel.sendEmbed(embed);
    }
});

/// avatar

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
         
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

/// Server 

client.on('message', message => {
 // «·»—Ì›ﬂ”
if(message.content.startsWith(prefix +"server")){ // «·«„—
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**Â–Â «·Œ«’Ì… ··«œ«—… ›ﬁÿ** :negative_squared_cross_mark: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**?? Server ID:**", message.guild.id,true)
.addField("**?? Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**?? Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**?? Members**",`[${message.guild.memberCount}]`,true)
.addField('**?? Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**?? Region **" , message.guild.region,true)
.setColor('#000000')
message.channel.sendEmbed(embed)
 
}
});



client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('**..**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete(3000)
    return message.reply(`**?? Don't Try to share servers ! ??**`)
    }
}
});  


client.on('message', message => {
const args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
 if(!message.author.id === '531344573469818891') return;
message.channel.sendMessage(':white_check_mark: Sending The BC')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})


/// setstats

client.on('message',async msg => {
     if(msg.channel.type === "old") return;
  if(msg.author.bot) return;
  var p = "?";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **·« „⁄ﬂ — »Â**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **«·»Ê  ·« Ì„ ·ﬂ ’·«ÕÌ…**');
  var ggg= msg.guild.createChannel('Server Stats', 'category').then(kk => {
           var ccc =msg.guild.createChannel('Voice O', 'voice').then(al => {
                var aa =msg.guild.createChannel('TIME ', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('DATE ', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });

  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 2 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(` Date : [${Dat} - ${Month} - ${Year}]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});




client.on('message', async message => {
    if(message.content.includes('discord.gg')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
    .setColor("c91616")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)


}
})




client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Canon ª Member");
   member.addRole (role);
  
})

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "ª ??");
   member.addRole (role);
  
})


/// bc --------------------------------------------------------------------------------------------------------------


client.on('message', message => {
    if (message.author.id === client.user.id) return;
if(!message.channel.guild) return
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith( '?' + 'bc')) {
        message.guild.members.forEach(member => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            member.send(`${args}\n ${member}`);

        });
    }
	

});



/// clear 

client.on("message", message => {
    
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
				if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No Permissions**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done",
        color: 0x06DF00,
        description: "Chat Deleted",
        footer: {
          text: "Canon Bot©."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});



client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GREEN")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=493764393016754178&scope=bot&permissions=21469585838')
  .setDescription(`**
  New Server Add __Canon Bot__ ?
  
__Server Name__: ${guild.name}
__Server Owner__: ${guild.owner}
__Server ID__: ${guild.id}
__Count__: ${guild.memberCount}**`);
client.channels.get("530319273826975744").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=493764393016754178&scope=bot&permissions=21469585838')
  .setDescription(`**
  Server Kicked __Canon Bot__ :cry:
__Server Name__: ${guild.name}
__Server Owner__: ${guild.owner}
__Server ID__: ${guild.id}
__Count__: ${guild.memberCount}**`);
client.channels.get("530319273826975744").sendEmbed(embed)
});
  
  

/// support   
  
client.on('message', msg => {
  if(msg.content === '-support')
  msg.channel.send(':gear: Server Support :gear:')
});

client.on('message', msg => {
  if(msg.content === '-support')
  msg.channel.send('https://discord.gg/GDfHAS')
});


   client.on('message', message => {
     if (message.content === "-help") {
message.author.send(`
**.                             ? ????????? __General__ ????????? ?
???-count | ⁄—÷ ⁄œœ √⁄÷«¡ «·”Ì—›—
???-ping | ⁄—÷ ”—⁄Â «·»Ê 
???-avatar | ⁄—÷ ’Ê— ﬂ √Ê ’Ê—Â √Ì «Õœ  „‰‘‰Â
???-image | ·⁄—÷ ’Ê—Â «·”Ì—›—
???-server | „⁄·Ê„«  ⁄‰ «·”Ì—›—
???-help | ⁄—÷ Â–Â «·ﬁ«∆„Â
???-bot | „⁄·Ê„«  ⁄‰ «·»Ê 
                              ? ????????? __Staff__ ????????? ?
???-ban | ÕŸ— ‘Œ’ „‰ «·”Ì—›—
???-kick | ÿ—œ √Õœ „‰ √⁄÷«¡ «·”Ì—›—
???-mute | ≈”ﬂ«  ‘Œ’ „‰ √⁄÷«¡ «·”Ì—›—
???-unmute | —›⁄ «·≈”ﬂ«  ⁄‰ «·⁄÷Ê
???-banlist | ⁄—÷ ⁄œœ «·‰«” «·„ÕŸÊ—Â „‰ «·”Ì—›—
???-mc |  ﬁ›Ì· «·‘« 
???-umc | › Õ «·‘« 
???-hide | ≈Œ›«¡ «·—Ê„
???-show | ≈ŸÂ«— «·—Ê„
???-setstats | (≈‰‘«¡ 3 —Ê„«  »„⁄·Ê„«  ⁄‰ («· «—ÌŒ , «·Êﬁ  , ⁄œœ «·‰«” «·„ÊÃÊœÂ ›Ì «·—Ê„ «·’Ê Ì
???-bc | —”«·Â Ã„«⁄ÌÂ ·ﬂ· «·‰«” ›Ì «·”Ì—›—
???-clear | „”Õ «·‘« 
???-nickall | ≈⁄ÿ«¡ Ã„Ì⁄ «·‰«” ›Ì «·”Ì—›— ≈”„ „” ⁄«—
                              ? ????????? __Information__ ????????? ?
???-support | ⁄—÷ ”Ì—›— «·”»Ê—  ›Ì Õ«·Â „Ê«ÃÂ… «Ì „‘ﬂ·Â
???-inv / invite | ·œ⁄ÊÂ «·»Ê **
`);
    }
});


/// nick all


//Toxic Codes
client.on("message", message => {//Toxic Codes
    if(message.content.startsWith(prefix + "nickall")) {//Toxic Codes
        let args = message.content.split(" ").slice(1).join(" ");
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return;
            if(!args) {//Toxic Codes
                return;
            }//Toxic Codes
        message.channel.send(`**Changes applied on __${message.guild.memberCount}__ members.**`);//Toxic Codes
                message.guild.members.forEach(codes => {//Toxic Codes
                    codes.setNickname(args + `  ${codes.user.username}`);//Toxic Codes
                }) //Toxic Codes
    }//Toxic Codes
});//Toxic Codes





/// bot 


client.on('message', message => {
    if (message.content === ('-bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**?? :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**?? :', [client.guilds.size], true)
            .addField('**Channels**?? :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**?? :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**?? :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**?? :' , `[<@399697177259147275>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});



/// image 

   client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });





client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Check Your DM !" , "Canon Bot©")
  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
     if (message.content === (prefix + "setstats")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , "Canon Bot©")
  message.channel.sendEmbed(embed);
    }
});


    client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', 'we???l???c?o?me???-?');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('#0dffdb')
            .setThumbnail(memberavatar)
            .addField('?? | name :  ',`${member}`)
            .addField('?? | ‰Ê—  «·”Ì—›— Ì« ﬁ·»Ì' , `Welcome to the server, ${member}`)
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
            .setTitle(`«··Â „⁄«ﬂ ?:skin-tone-1: ??`)
            .setDescription(`„⁄ «·”·«„Â ‘—› ‰« ?:skin-tone-1: ?? `)
            .addField('??    »ﬁÌ',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('#ff0004')
            .setFooter(`==== ‰‹‹ ‹‹„‹‹‰‹‹¬ ·‹‹ﬂ‹‹„ ¬”‹‹ ‹‹„‹‹‹ ‹‹¬⁄ ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'we???l???c?o?me???-?')
        if (!channel) return;
        channel.send({embed : embed});
        }) 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '«·”·«„ ⁄·Ìﬂ„') {
    msg.reply('Ê⁄·Ìﬂ„ «·”·«„ „‰Ê— «·”Ì—›—?');
  }
});

client.login(process.env.BOT_TOKEN);