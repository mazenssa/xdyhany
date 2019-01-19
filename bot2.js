const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!" ; /// �������
const moment = require('moment');

/// This Version is Unser Maintinance. !



/// !g 

client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
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

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "g")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **��� �� ���� ���� ����� ������� ��� �������**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Prize **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With ?? To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !??',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** ?? GIVEAWAY ENDED ??**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});








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



    client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', '?-welcome');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('#0dffdb')
            .setThumbnail(memberavatar)
            .addField('?? | name :  ',`${member}`)
            .addField('?? | ���� ������� �� ����' , `Welcome to the server, ${member}`)
            .addField('?? | user :', "**[" + `${member.id}` + "]**" )
                    .addField('?| ��� ����� ���',`${member.guild.memberCount}`)
                   
                      .addField("Name:",`<@` + `${member.id}` + `>`, true)
                         
                                         .addField(' ��������', `${member.guild.name}`,true)
                                           
         .setFooter(`${member.guild.name}`)
            .setTimestamp()
       
          channel.sendEmbed(embed);
        });
        
        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`���� ���� ?:skin-tone-1: ??`)
            .setDescription(`�� ������� ������ �� ?:skin-tone-1: ?? `)
            .addField('??   ����',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('#ff0004')
            .setFooter(`==== ������������� ������� ���������������� ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', '?-welcome')
        if (!channel) return;
        channel.send({embed : embed});
        })


		
		
client.on('message', msg => {
  if(msg.content === '������')
  msg.reply('������ ������ � ���� ���� � ������')
});

client.on('message', msg => {
  if(msg.content === '���� �����')
  msg.reply('���� ����� <3')
});

client.on('message', msg => {
  if(msg.content === '������ ��� ���')
  msg.reply('� ��� �� �����')
});

client.on('message', msg => {
  if(msg.content === '���')
  msg.reply('����')
});

client.on('message', msg => {
  if(msg.content === '��� ���')
  msg.reply('����')
});



		
		
		
client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "member");
   member.addRole (role);
  
})


client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "? Member");
   member.addRole (role);
  
})
		
		
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
omar.reply("`�� ��� ���� ����� �����`")
}// omar jedol / Codes
});


/// Rules 

client.on('message', message => {
            if (message.content.startsWith("Rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **����** ' ,' **����� ����** ')
.addField('     **�����** ' ,' **�� ���� ���� ** ')
.addField('     **�����** ' ,' **�� ���� �������** ')
.addField('    **�����**' ,' **����� ���������** ')
.addField('    **�����**' ,' **����� �������** ')
.addField('    **�����**' ,' **�� ���� �� ����� �� �� ���** ')
.addField('    **�����**' ,' **�� ���� �����!** ')
.addField('    **�����**' ,' **�� ���� ���� ������** ')
.addField('    **�����**' ,' **�� ���� ���� ������� !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

/// !ping 

 client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('!ping')) {
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


/// !say | !embed 

var prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// !say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});




/// !server 

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('??** ��� �������**',`[** __${msg.guild.region}__ **]`,true)
      .addField('??** __�����__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('??**__ ��� �������__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('??**__ ��� ������� ���������__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('??**__ ������� ��������__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('??**__ ����� �����__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('??**__ �������__**',`**${msg.guild.owner}**`,true)
      .addField('??**__ ���� �������__**',`**${msg.guild.id}**`,true)
      .addField('??**__ �� ��� ������� ��__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  
  
  


client.on('message', omar => {
var prefix = "!";
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
omar.reply("`�� ��� ���� ����� �����`")
}// omar jedol / Codes
});  
















/// !����

const coolDown = new Set();
client.on('message', message => {
  
      if (message.content.startsWith("����")) {
        if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your invite :yen: link refreshes in \`\`1 Day\`\`.**`);

    message.channel.createInvite({
  
          thing: true,
  
          maxUses: 5,
  
          maxAge: 86400
  
      }).then(invite =>
  
        message.author.sendMessage(invite.url)
  
      )
  
    message.channel.send("**�� ����� ������ ������ ����**")   .then(() => {     
      coolDown.add(message.author.id);
  });
  
  
  message.author.send(`**��� ������ : ����
  ��� ��������� ������ : 5**`)
  
      }

      setTimeout(() => {
        coolDown.remove(message.author.id);
     },86400000);
     
  });
  
  
  
  
  
/// !msg   
  
client.on("message", msg => {
var prefix = "!";// �������
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
var all = msg.content.split(" ").slice(1) - msg.mentions.users.first();
if(msg.content.startsWith(prefix + "msg")) {
msg.delete(1500);
msg.channel.send(`�� �������� ��� ${men}`).then(msgS => {
msgS.delete(1500);
if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**����� �� ����� ������** `ADMINISTRATOR`' );
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
    if (message.content.includes('discord.gg')){
                        if(!message.channel.guild) return message.reply ('')
                    if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
       message.channel.send('ban <@' + message.author.id + '>')
       message.delete() 
       }
    }
          if (message.content.startsWith("ban ")) {
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
             var member= message.mentions.members.first();
             member.ban().then((member) => {
                 message.channel.sendMessage("", {embed: {
                 author: {
                 },
                 title: '���� ����� ' + member.displayName + ' �� ���',
                 color: 490101,
                 }
               });
           }
         ) 
       }
   });
   
   
   
   
   
  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!help | System ...`,'https://www.twitch.tv/ImD3s_x');	
}); 
   
   


var prefix = "!" ; // �������
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    if (command == "leave") {
        // if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Sorry, you don't have permission to use this!**");
        
 
        if(message.author.id != "399697177259147275") return message.reply("**Sorry, you don't have permission to use this!**");/* �� ���� �� ������ ���*/

        
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let definedGuild = client.guilds.get(args[0])
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`);
        client.guilds.get(args[0]).leave()
        .catch(error => { return message.reply(error.message) })
    }     
})


// ���� �� � ������ ������� : |





/// !clear 

client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**? ��� ��� ��� ����� ��������� ��� **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  �� ���� ���� ������ ���� �����**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``���� ��� ����� ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });




client.on('message', msg => {
  if(msg.content === '������ �����')
  msg.reply('������ ������ � ���� ���� � ������')
});







client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '510860897804222494') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for Pic ??? Only`) // 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic ??? Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

});


/// !mc | !umc 

client.on('message', message => {

    if(message.content === prefix + "!mc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__��� ���� �������__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__�� ����� �����__ ? **")
           });
             }

 if(message.content === prefix + "!umc") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__��� ���� �������__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__�� ��� �����__?**")
           });
             }
             
      
    
});


/// !ban 

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**��� �� ���� ��������� ��������**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**���� ���**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**��� �� ���� ���� ����� ���� �� ���� ����� ������ ������**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

/// !Kick 

client.on('message', message => {
const prefix = "!";
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

  if (message.mentions.users.size < 1) return message.reply("���� ���");
  if(!reason) return message.reply ("���� ��� �����");
  if (!message.guild.member(user)
  .bannable) return message.reply("�������� ��� ��� ���� �� �����");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("492086928397565952").send({embed : banembed})
}
});


/// !mute 

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
 
    let mention = message.mentions.members.first();//kinggamer ���� ���� ���� �
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer ���� ���� ���� �
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ���� ���� ���� �
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: �� ���� ����� ���� ������ �������**`); //kinggamer ���� ���� ���� �
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ���� ���� ���� �
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
    if(!reason) reason = " [ **�� ���� �����** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**�� ������ ����**')
    .addField('**__�������__**',[ message.guild.name ]) //kinggamer ���� ���� ���� �
    .addField('**__�� ������ ���� ������__**', [ message.author ])
    .addField('**__�����__**',reason)
    .addField('**__��� ������__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer ���� ���� ���� �
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer ���� ���� ���� �
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer ���� ���� ���� �
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer ���� ���� ���� �
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer ���� ���� ���� �
  }
});


/// !unMute 

client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer ���� ���� ���� �
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ���� ���� ���� �
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} ��� �� �� ������ ��� �����**`)
 
  await kinggamer.removeRole(role) //kinggamer ���� ���� ���� �
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});


/// !new 

client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("!new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Server Team")) return message.channel.send(`���� ���� ���� ����� \`Support Team\` ����� ����� ������� ��� ���� ���� ������� ����� �������`);
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
            message.channel.send(`:white_check_mark: �� ����� ������, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `�� ��� ����� ������ ������ ��� ��� ���� ���� ����� ���� ����`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`�� ��� ����� �� ������ ������� ��� ����� ���� !close`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '!close', {
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






/// !help

client.on("message", message => {
 if (message.content === "!help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
                                ? ?????????????????? ? 
                   ?? ?����� ����? ??
                        
?? !Help ? ��� ����� �������� ?                      
?? !Rules ? �������� ?  
?? !Ping ? ������ ���� ����� ?
?? !Server ? ������� �� ������� ?
?? !members ?������� �� ������� ?
?? !Link  ? ���� ������ ������� ?
?? !�����
?? !New ? ���� ����� ?
                                ? ?????????????????? ? 
                   ?? ?����� ������? ??
?? !bans ? ����� ��� ������� �������� �� ������� ?
?? !ban ? ����� ��� �� ������� ?
?? !kick ? ��� ��� �� ������� ?
?? !clear ? ���� ����� ?
?? !mute  ? ����� ���� ����� ?
?? !unmute  ? �� ������ ������� ?
?? !Msg  ? ����� ����� ��� ��� ���� ������ ����� ?
?? !Bc  ? �������� � ����� ����� ?
?? !Close  ? ����� ������� ?
?? !g  ? ����� ��� ��� �� ������ ?
?? !Mc  ? ����� ����� ?
?? !Umc  ? ��� ����� ?
?? !Hide  ? ����� ����� ?
?? !Show  ? ����� ����� ?
?? !say ? ����� ����� ������ ����� ?
?? !embed ? ����� ����� ����� ?
                                ? ?????????????????? ? 
`)


message.author.sendEmbed(embed)

}
});

client.on('message', message => {
     if (message.content === "!help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ������" , " |  ������ �������� �� �������")
     
     
     
  message.channel.sendEmbed(embed);
    }
});



/// !bc 

client.on('message', message => { 
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**��� ����� ��� ���������**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`����� ������� : ${args}`)
.setDescription(`**�������� �� ���� ??\n�������� ���� ����? \n���� ����� �������� ��� ����� ����������**`)
if (!args) return message.reply('**��� ���� ����� ���� �� ���� ������ ����������**');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))
 
var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check: �� ����� ������� �����`).then(m => m.delete(5000));
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
  message.channel.send(`:ballot_box_with_check: �� ����� ������� �����`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});



/// !Link

  client.on('message', message => {
    if (message.content.startsWith("!Link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**�� ����� ������ ������ ����**")

message.author.send(`**��� ������ : ����
��� ��������� ������ : 2**`)


    }
});

/// !hack

client.on('message', message => {
    if (message.content.startsWith("!hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``���� ��� ����� ��� ��� �����``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [? ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [????] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [?????????????????? ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('�� ����� ����� ���� ���� ����� �����')
           }, 6000)
           });
         }
 });

 
/// !bans

client.on('message', message => {
    if (message.content.startsWith("!bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} ��� ����� ������� �� ������� `))
  .catch(console.error);
}
});



/// !�����

client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '!';// Alpha Codes
    var name = 'Zaid';// Alpha Codes
    var age = '15';// Alpha Codes
    var fromwhere = 'Jordan';// Alpha Codes
    var fa2dh = 'd';// Alpha Codes
    var filter = m => m.author.id === message.author.id;// Alpha Codes
    var subChannel = message.guild.channels.find(c => c.name === '���������');// Alpha Codes
   
    if(command == prefix + '�����') {// Alpha Codes
        if(message.author.bot) return;
        if(message.channel.type === '�����') return;
 
        var modRole = message.guild.roles.find(r => r.name === '? Helper');// Alpha Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | ��� ������');// Alpha Codes
        if(!subChannel) return message.channel.send(':x: | ��� ���� ��� ');// Alpha Codes
       
        message.channel.send(':timer: | **���� ���� ������� ���� �� ����**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | ** ���� ���� ������� **').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | ** ����� ���� �� ���� ��� ������ � **').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | ** ���� ��� ���� ������� �  **').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: �� ��� ����� ��� ���� �������**')
                                        .setColor('GREEN')
                                        .addField('�����', name, true)
                                        .addField('�����', age, true)
                                        .addField('��� �������', fromwhere, true)
                                        .addField('���� ��� ���� �������', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('?').then(() => msgS.react('?'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | �� ����� ���� ����� ����� ������� �� ��� accept-reject').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
												.addField('**``����� �������``**', message.author)
                                                .addField('�����', name)
                                                .addField('�����', age)
                                                .addField('����� ���� �� ���� ��� ������ �', fromwhere)
                                                .addField('���� ��� ���� �������', fa2dh)
                                                .addField('�����', message.author)
                                                .addField('���� �����', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('?').then(() => msgS.react('?'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '?'  && user.id === '399697177259147275'
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '?' && user.id === '399697177259147275'
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | �� ����� ����� ������ **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === '�������').send(`:white_check_mark: | �� ����� [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | �� ���� ������ **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === '�������').send(`:x: | �� ���� [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                })
                                            });// Alpha Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | �� ����� ������');// Alpha Codes
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});



/// !count

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('��� ����� �������',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

/// !hide

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


/// !members


client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='!members')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('??| Members info')
         .addBlankField(true)
         .addField('??| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('??| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('??| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('??| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('?| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });


/// Direct Welcoming

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ���� ���� �������:rose: 
:crown:��� �����  ${member}:crown:  
��� ����� ��� ${member.guild.memberCount} `) 
}).catch(console.error)
})





client.login(process.env.BOT_TOKEN2);