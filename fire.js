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
      .addField("**:globe_with_meridians: «·√Ê«„— «·⁄«„Â**","** **")
      .addField("***ping :stopwatch:**","**·‹ ”—⁄… ≈ ’«·ﬂ**")
      .addField("***id :chart_with_downwards_trend:**","**⁄—÷ ”—⁄Â « ’«· «·»Ê **")
      .addField("***avatar :camping:**","**·‹ ’Ê— «·‘Œ’ «·„Œ «—**")
      .addField("***roll :1234:**","**·‹ «·ﬁ—⁄Â „‰ 1 - 100**")
      .addField("***server :recycle:**","**·‹ „⁄·Ê„«  «·”Ì—›—**")
      .addField("***roles :medal: **","**„”Õ „Õ«œÀ«  «·‘« **")
      .addField("***say :arrows_counterclockwise:**","**·‹ Ìﬂ—— «·ﬂ·«„ «··Ï  ﬁÊ·Â**")
      .addField("***time :alarm_clock:**","**·‹ „⁄—›… «·”«⁄…**")
      .addField("***date **","**·‹ „⁄—›… «· «—ÌŒ**")
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
      .addField("**:radioactive: √Ê«„— «·√œ«—Â**","** **")
      .addField("***bc  :mega:**","**·‹ «·»—Êœﬂ«” **")
      .addField("***clear :octagonal_sign:**","**·‹ „”Õ «·‘« **")
	  .addField("***createcolors :cyclone:**","** ·‹ «÷«›… 110 ·Ê‰**")
      .addField("***kick  :outbox_tray:**","**·‹ ÿ—œ «·√⁄÷«¡**")
      .addField("***ban  :no_entry:**","**·‹ ÕŸ— «·√⁄÷«¡**")
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
      .addField("** ?? «Ê«„— «·„ÌÊ“ﬂ**","** **")
      .addField("***play :musical_note:**","**·‹  ‘€Ì· «·„ÿ·Ê»**")
      .addField("***stop  :musical_keyboard:**","**·‹ «Ìﬁ«› «·„ÿ·Ê»**")
      .addField("***pause :musical_score:**","**·‹ «Ìﬁ«› «·„ÿÊ» „ƒﬁ **")
      .addField("***resume :mute: **","**·‹  ‘€Ì· «·„ÿÊ» »⁄œ «· ÊﬁÌ›**")
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
      .addField("** „»—„Ã «·»Ê  :wrench: **","**- AG , ???????? , ?? ??#2351  , @! ? ~ ?_? ?#2275  **")
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
        var «Ê‰— = message.guild.owner
        var «⁄÷«¡ = message.guild.memberCount
        var «ÌœÌ = message.guild.id
        var »·œ«·”Ì—›— = message.guild.region
        var «·—Ê„«  = message.guild.channels.size
        var «·— » = message.guild.roles
        var ⁄„· = message.guild.createdAt
        var «·—Ê„ = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('«”„ «·”Ì—›—', servername)
        .addField('«Ì œÌ «·”Ì—›— ' , [«ÌœÌ])
        .addField('√⁄÷«¡ «·”Ì—›—', «⁄÷«¡)
        .addField('—Ê„«  «·”Ì—›—', «·—Ê„« )
        .addField('—Ê„ «·‘«  «·√”«”Ì', «·—Ê„)
        .addField('’«Õ» «·”Ì—›—', «Ê‰—)
        .addField('»·œ «·”Ì—›—', »·œ«·”Ì—›—)
        .addField(' «—ÌŒ «›  «Õ «·”Ì—›—', ⁄„·)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **·Ì” ·œÌﬂ ’·«ÕÌ« **');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done |  ‹‹„",
        color: 0x06DF00,
        description: " „ „”Õ «·—”«∆· »‰Ã«Õ",
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
                                      .addField(' „ «·«—”«· »Ê«”ÿ… :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**? Sender  :**', `*** ? ${message.author.username}#${message.author.discriminator}***`)
            .addField('***? Server  :***', `*** ? ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('¯', args)
            m.send(``,{embed: bc});
        });
    }
})
    client.on('message', message => {
     if (message.content === "*id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("„⁄·Ê„«  ⁄‰ «·Õ‹‹”«»")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("«”‹‹‹„ «·Õ”‹‹«»", `${message.author.username}`)
  .addField('ﬂÊœ «·Õ”«» «·Œ«’', message.author.discriminator)
  .addField("«·—ﬁ‹‹‹„ «·‘‹‹‹Œ’Ì", message.author.id)
  .addField('»‹‹‹‹Ê ', message.author.bot)
  .addField(" «—ÌŒ «· ”ÃÌ·", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** Ì„‰⁄ ‰‘— «·—Ê«»ÿ ! **`)
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
message.reply("**Done |  ‹‹„**")
message.reply("** „ «—”«· «Ê«„— «·»Ê  ›Ì «·Œ«’**")
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
  "**«·ÕÌ«… »ﬂ· „« ›ÌÂ«  ﬁ› œ«∆„« ⁄·Ï Õœ «·Ê”ÿÌ… »Ì‰ « “«‰ «·„⁄‰Ï Ê÷œÂ „‰ Õ» Êﬂ—Â ÊÕﬁ Ê»«ÿ· Ê⁄œ· ÊŸ·„**.",
  "**ﬂÏ  ⁄Ì‘ ⁄·Ìﬂ «‰   ﬁ‰ ›‰ «· Ã«Â· »«Õ —«›**.",
  "**·«  Õ“‰ ⁄·Ï „‰ «‘⁄—ﬂ »«‰ ÿÌ» ﬂ €»«¡ «„«„ Êﬁ«Õ Â**.",
  "**Â‰«ﬂ „‰ ÌÕ·„ »«·‰Ã«Õ ÊÂ‰«ﬂ „‰ Ì” ÌﬁŸ »«ﬂ—« · ÕﬁÌﬁÂ**.",
  "**«‰  ⁄«·Ã √·„ﬂ »‰›”ﬂ  ·ﬂ ÂÏ «·ﬁÊ…**.", 
  "**«·Ã„Ì⁄ Ì”„⁄ „«  ﬁÊ· Ê«·«’œﬁ«¡ Ì‰’ Ê‰ ·„«  ﬁÊ· Ê«›÷· «·«’œﬁ«¡ Ì‰’ Ê‰ ·„« «Œ›«Â ”ﬂÊ ﬂ**.", 
  "**«‰ ÂÏ “„‰ «·›—Ê”Ì… ° ·„  ‰ﬁ—÷ «·ŒÌÊ· »· «‰ﬁ—÷ «·›—”«‰**.", 
  "**«‰  ﬂÊ‰ «Œ—”« ⁄«ﬁ·« ŒÌ— „‰ «‰  ﬂÊ‰ ‰ÿÊﬁ« ÃÂÊ·«**.", 
  "**«·„‰«ﬁ‘«  «·⁄ﬁÌ„… ·«  ‰Ã» «›ﬂ«—«**.", 
  "**‰Õ‰ ‰ﬂ » „« ·« ‰” ÿÌ⁄ «‰ ‰ﬁÊ· Ê„« ‰—Ìœ «‰ ÌﬂÊ‰**.", 
  "**‰Õ‰ ‰ﬂ » „« ·« ‰” ÿÌ⁄ «‰ ‰ﬁÊ· Ê„« ‰—Ìœ «‰ ÌﬂÊ‰**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("ŒÊ«ÿ—")) {
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