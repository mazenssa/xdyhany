const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` *help .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: ������� ������**","** **")
      .addField("***ping :stopwatch:**","**�� ���� ������**")
      .addField("***id :chart_with_downwards_trend:**","**��� ���� ����� �����**")
      .addField("***avatar :camping:**","**�� ��� ����� �������**")
      .addField("***roll :1234:**","**�� ������ �� 1 - 100**")
      .addField("***server :recycle:**","**�� ������� �������**")
      .addField("***roles :medal: **","**��� ������� �����**")
      .addField("***say :arrows_counterclockwise:**","**�� ���� ������ ���� �����**")
      .addField("***time :alarm_clock:**","**�� ����� ������**")
      .addField("***date **","**�� ����� �������**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: ����� �������**","** **")
      .addField("***bc  :mega:**","**�� ����������**")
      .addField("***clear :octagonal_sign:**","**�� ��� �����**")
	  .addField("***createcolors :cyclone:**","** �� ����� 110 ���**")
      .addField("***kick  :outbox_tray:**","**�� ��� �������**")
      .addField("***ban  :no_entry:**","**�� ��� �������**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** ?? ����� �������**","** **")
      .addField("***play :musical_note:**","**�� ����� �������**")
      .addField("***stop  :musical_keyboard:**","**�� ����� �������**")
      .addField("***pause :musical_score:**","**�� ����� ������ ����**")
      .addField("***resume :mute: **","**�� ����� ������ ��� �������**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** ����� ����� :wrench: **","**- AG , ???????? , ?? ??#2351  , @! ? ~ ?_? ?#2275  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content === '*roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content.startsWith('*ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});
var prefix = "*";

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);





    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }


});
var prefix = "*";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var ���� = message.guild.owner
        var ����� = message.guild.memberCount
        var ���� = message.guild.id
        var ���������� = message.guild.region
        var ������� = message.guild.channels.size
        var ����� = message.guild.roles
        var ��� = message.guild.createdAt
        var ����� = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('��� �������', servername)
        .addField('�� �� ������� ' , [����])
        .addField('����� �������', �����)
        .addField('����� �������', �������)
        .addField('��� ����� �������', �����)
        .addField('���� �������', ����)
        .addField('��� �������', ����������)
        .addField('����� ������ �������', ���)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **��� ���� �������**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | ����",
        color: 0x06DF00,
        description: "�� ��� ������� �����",
        footer: {
          text: "Desert Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('ready',  () => {
  console.log('By : - AG , ???????? , ?? ??#2351');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '*bc') {
         message.react("??")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('�� ������� ������ :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**? Sender  :**', `*** ? ${message.author.username}#${message.author.discriminator}***`)
            .addField('***? Server  :***', `*** ? ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('�', args)
            m.send(``,{embed: bc});
        });
    }
})
    client.on('message', message => {
     if (message.content === "*id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("������� �� ��������")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("������ ��������", `${message.author.username}`)
  .addField('��� ������ �����', message.author.discriminator)
  .addField("�������� ���������", message.author.id)
  .addField('�������', message.author.bot)
  .addField("����� �������", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** ���� ��� ������� ! **`)
    }
});
client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === "*help") {
message.reply("**Done | ����**")
message.reply("**�� ����� ����� ����� �� �����**")
message.react("??")

}
});
client.on('message', message => {
     if (message.content === "*bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ON ${client.guilds.size} Servers - Prefix *help`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
const secreT = [
  "**������ ��� �� ���� ��� ������ ��� �� ������� ��� ����� ������ ���� �� �� ���� ��� ����� ���� ����**.",
  "**�� ���� ���� �� ���� �� ������� �������**.",
  "**�� ���� ��� �� ����� ��� ����� ���� ���� ������**.",
  "**���� �� ���� ������� ����� �� ������ ����� �������**.",
  "**�� ����� ���� ����� ��� �� �����**.", 
  "**������ ���� �� ���� ��������� ������ ��� ���� ����� �������� ������ ��� ����� �����**.", 
  "**����� ��� �������� � �� ����� ������ �� ����� �������**.", 
  "**�� ���� ����� ����� ��� �� �� ���� ����� �����**.", 
  "**��������� ������� �� ���� ������**.", 
  "**��� ���� �� �� ������ �� ���� ��� ���� �� ����**.", 
  "**��� ���� �� �� ������ �� ���� ��� ���� �� ����**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("�����")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Desert Bot' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
   if (message.content.startsWith("id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.login(process.env.BOT_TOKEN);