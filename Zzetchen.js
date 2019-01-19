const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const request = require('request');
const r1 = require('snekfetch');
const fs = require('fs');
const Canvas = require('canvas');
const jimp = require('jimp');
const moment = require('moment');
const dateFormat = require('dateformat');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("ZzetchenMC !",{type: 'watching'})
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
     message.author.send('` «‰  „⁄«ﬁ» „ÌÊ  ‘« Ì »”»» ‰‘— ”—›—«  «‰ ﬂ«‰ ⁄‰ ÿ—Ìﬁ «·Œÿ« „‰ ›÷·ﬂ  ﬂ·„ „⁄ «·«œ«—… `');
   
       
    }
})




client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","ZzetchenMC-Member"));
    });


////////////////////////////////////////////
//                                        //
//                                        //
//    M3L4 7ses Bek                       //
//                                        //
//                                        //
//                                        //
////////////////////////////////////////////
client.on("message", message => {
    if (message.content.startsWith("g!bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  ⁄œœ «·„” ·„Ì‰ `);
  message.delete();
  };
  });





client.on('message', eyad => {
  if (eyad.content.startsWith('!unbanv')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**«‰  ·«  „ ·ﬂ «·Œ«’ÌÂ «·„ÿ·Ê»Â** | ? ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`?| ** ÌÃ» ⁄·Ìﬂ «·„‰‘‰ «Ê·« **`');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 «·«‰ Ì„ﬂ‰ﬂ «·œŒÊ· «·Ì «·—Ê„«  «·’Ê ÌÂ:)
»Ê«”ÿ… : <@${eyad.author.id}> **`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
«·«‰ Ì„ﬂ‰ﬂ «·œŒÊ· «·Ì «·—Ê„«  «·’Ê ÌÂ
»Ê«”ÿ… : <@${eyad.author.id}>
`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
}) // ‰Â«ÌÂ ﬂÊœ ›ﬂ «·»«‰œ «·›ÊÌ”
 
client.on('message', eyad => {
  if (eyad.content.startsWith('!banvoice')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("? | **«‰  ·«  „ ·ﬂ «·Œ«’ÌÂ «·„ÿ·Ê»Â**");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`?| ** ÌÃ» ⁄·Ìﬂ «·„‰‘‰ «Ê·« **`');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
·ﬁœ  „ „‰⁄ „‰ œŒÊ· «·—Ê„«  «·’Ê ÌÂ 
»Ê«”ÿ… : <@${eyad.author.id}> **`)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
·ﬁœ  „ „‰⁄ „‰ œŒÊ· «·—Ê„«  «·’Ê ÌÂ
»Ê«”ÿ… : <@${eyad.author.id}> `)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})// ‰Â«ÌÂ ﬂÊœ «·»«‰œ «·›ÊÌ”



client.on('message', msg => {
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'createvoice')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**Â–« «·√„— ›ﬁÿ ··”Ì—›—« **').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`Â· «‰  „ «ﬂœ „‰ «‰‘«¡ —Ê„ ’Ê Ì ø\n  ?  \n  ? \n  ·œÌﬂ 60 À«‰Ì… ··«Œ Ì«—`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('?').then(r=>{
 message.react('?').then(r=>{           
 let eyadandr3d = (reaction, user) => reaction.emoji.name === '?' && user.id === msg.author.id;
 let eyadandr3dd = (reaction, user) => reaction.emoji.name === '?' && user.id === msg.author.id;
 let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
 let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
er.on("collect", r => {
msg.channel.send("` „ «·«·€«¡`")
message.delete();
})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice').then(ra3deyad => {
channelCreated = ra3deyad.createdAt
      const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage()
  .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134017/1500920527.jpg')
  .setURL('')
  .addField(`«”„ «·ﬁ‰«…`, `${ra3deyad.name}`, true)
  .addField(`√ÌœÌ «·ﬁ‰«…`, `${ra3deyad.id}`, true)
  .addField(`‰Ê⁄ «·ﬁ‰«…`, `${ra3deyad.type}`, true)
  .addField(`„ Ï «‰‘√  «·ﬁ‰«…`, `${channelCreated}`)
 msg.channel.send({embed})
    message.delete();
})
})
})
})
})
}
});






//////////
 client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(`:low_brightness:·ﬁœ ﬁ„  »œ⁄ÊÂ`, ` ${inviteCount}:champagne_glass:`)
           .setFooter(`:black_small_square:ª Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});

//-----------------------------------------------------------------------------------------------------------------------------
client.on("guildMemberAdd", msg => {
  var AlphaE = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(msg.user.username, msg.user.avatarURL)
.setThumbnail(msg.user.avatarURL)
.setTitle(`
WËlcome to SËrver 
`)
.addField("ZzetchenMC  ", `${msg.user.tag}`, true)
.addField(`???Link Server??? `,`https://discord.gg/7vAcGGX`, true)
 .setFooter(msg.user.tag, msg.user.avatarURL, true)
msg.user.sendMessage(AlphaE);
});






client.on("message", message => {
    if (message.content === "g!help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setDescription(`**?????Ê‘ „„Ì“«  «·»Ê ?????**
        **__1-__:books:?? ZzetchenMC  ??:books:
         __2-__:white_check_mark: :part_alternation_mark:? «” Œœ«„Â Ãœ« ”Â·:part_alternation_mark:?:white_check_mark: 
         __3-__:gear:?’Ì«‰Â ﬂ· ÌÊ„:gear:?
         __4-__:money_with_wings: „Ã«‰Ì :money_with_wings:**`)
   message.author.sendEmbed(embed)
   
   }
   });
   
   
  




	
		 


 
client.on("message", message => {
 if (message.content === "!help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
	
          ***Ø?‹??_ªPlease Chose´_??‹?Ø***
         
***??ï ??ï??ï ??ï ??ï ??ï??ï ??ï  WelÁome ??ï ??ï??ï ??ï   ??ï ??ï ??ï ??***
:small_blue_diamond:${prefix}***help-public*** ?? ***?«Ê«„— ⁄«„…?*** :bell:  
:small_orange_diamond:${prefix}***help-admin***  ??***?«Ê«„— «œ«—… «·”Ì—›—?*** :ok_hand: 
			 
:small_blue_diamond:${prefix}***help-games*** ?? ***?«Ê«„— «·«·⁄«»?*** :video_game:
:small_orange_diamond:${prefix}***help-music***  ?? ***?«Ê«„— «·„Ê”ÌﬁÏ?*** :loud_sound: 
:small_blue_diamond:${prefix}***help-colors*** ?? ***?«Ê«„— «··Ê«‰?***  :traffic_light: 
      
:small_orange_diamond:${prefix}***help-important*** ?? ***?«Ê«„— Â«„…?*** :loudspeaker:
:small_blue_diamond:${prefix}***help-bc*** ?? ***?«Ê«„— «·‰‘— ?*** :e_mail: 
 
:small_blue_diamond:${prefix}***help-R***??***?Rainbow  €Ì— «·Ê«‰ «·— »…  ·ﬁ«∆Ì ?***  ??
***??ï ??ï??ï ??ï ??ï ??ï??ï ??ï  @Mal Shop #6133 ??ï ??ï??ï ??ï   ??ï ??ï ??ï ??***
          `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
  






client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-public"){
  const embedss2 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
***Ø?‹??ª«Ê«„— ⁄«„…´??‹?Ø***                                                           
***:pushpin:g!allbots
? ·⁄—÷ Ã„Ì⁄ «·»Ê «  «·Ì »«·”Ì—›—
:pushpin:!server 
? Ì⁄—÷ ·ﬂ „⁄·Ê„«  ⁄‰ «·”Ì—›—
:pushpin:!bot 
? Ì⁄—÷ ·ﬂ ﬂ· „⁄·Ê„«  «·»Ê 
:pushpin:!count
Ì⁄—÷ ·ﬂ ⁄œœ «·«‘Œ«’ »«·”Ì—›— »œÊ‰ »Ê « 
:pushpin:!invites
?Ì⁄—÷ ·ﬂ  ⁄œœ «‰›«Ì « ﬂ »«·”Ì—›—
:pushpin:!invite-codes 
? Ì⁄—÷ ·ﬂ —Ê«»ÿ «·«‰›«Ì «  Õﬂﬂ ›Ì «·”Ì—›—
:pushpin:!cal 
? «·Â Õ«”»…
:pushpin:g!trans <language> <any thing> 
? Ì —Ã„ ·ﬂ «·Ì  »ÌÂ „‰ «Ì ·€…
:pushpin:!short 
? ÌŒ ’— ·ﬂ —«»ÿ ﬂ»Ì— «·Ï —«»ÿ ’€Ì—
:pushpin:!tag 
? Ìﬂ » ·ﬂ «·ﬂ·„… »‘ﬂ· Ã„Ì· Êﬂ»Ì—
:pushpin:!google 
? ··»ÕÀ ›Ì ﬁÊﬁ· ⁄‰ ÿ—Ìﬁ «·œ”ﬂÊ—œ
:pushpin:!perms 
? Ì⁄—÷ ·ﬂ »—„‘‰« ﬂ »«·”Ì—›—
:pushpin:!rooms 
? Ì⁄—÷ ·ﬂ ﬂ· «·—Ê„«  «·Ì »«·”Ì—›— „⁄ ⁄œœÂ«
:pushpin:!emojilist
? Ì⁄—÷ ·ﬂ ﬂ· «·«Ì„ÊÃÌ«  «·Ì »«·”Ì—›—
:pushpin:!say 
? Ìﬂ—— «·ﬂ·«„ «·Ì  ﬂ »Ê
:pushpin:!image 
?’Ê—… «·”Ì—›—
:pushpin:!members 
? Ì⁄—÷ ·ﬂ ⁄œœ ﬂ· Õ«·«  «·«‘Œ«’ Ê⁄œœ «·»Ê «  Ê⁄œœ «·«‘Œ«’
:pushpin:!id 
? „⁄·Ê„«  ⁄‰ﬂ
:pushpin:!bans 
? ⁄œœ «·«‘Œ«’ «·„»‰œ… 
? :pushpin: !avatar 
’Ê— ﬂ «Ê ’Ê—… «·Ì  „‰‘‰Ê 
:pushpin: !embed
? Ìﬂ—— «·Ì  ﬁÊ·Ê »‘ﬂ· Õ·Ê
:pushpin:!emoji 
<any things> · ÕÊÌ· «Ì ﬂ·„Â  ﬁÊ·Â« «·Ì «Ì„ÊÃÌ
? «—”«· «ﬁ —«Õ «Ê ·„—«”·… ’«Õ» «·»Ê 
:pushpin: g!report
? « Õœ ”»ﬂ Ê«Â«‰ﬂ
:pushpin: !owner<messange 
? «—”«· —”«·… ·Ì «Ê‰—
:pushpin: !server 
? „⁄·Ê„«  ⁄‰ «·”—›—
:pushpin:g!ed
<messange>  ÌÕÿ ·ﬂ «·ﬂ·«„ ›Ì „—»⁄
:pushpin:g!time 
? ·„⁄—›… «·Êﬁ 
:pushpin:g!dt 
? ·„⁄—›… «·Êﬁ  Ê«· «—ÌŒ 
`)
   message.author.sendEmbed(embed)
    
   }
   }); 

   
  client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-admin") {
  const embedss2 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
***Ø?‹??ª «Ê«„— «œ«—… «·”Ì—›—´??‹?Ø***
***:anger: - ”ÊÌ —Ê„ «”„Â welcome ⁄‘«‰ «·»Ê  Ì—Õ» »ﬂ· «·«⁄÷«¡ «·ÃœÌœ °:anger: ***
***:gem:!move @user 
·”Õ» «·‘Œ’ «·Ï —ÊÊ„ﬂ  
:gem: !bc 
—”«·… Ã„«⁄Ì… «·Ï ﬂ· «⁄÷«¡ «·”Ì—›—
:gem: !role @user <rank>
·√⁄ÿ«¡ — »… ·⁄÷Ê „⁄Ì‰
:gem:!roleremove @user <rank> 
·«“«·… «·— »… „‰ ‘Œ’ „⁄Ì‰
:gem:!role all <rank> 
·√⁄ÿ«¡ — »… ··Ã„Ì⁄
:gem:!role humans <rank> 
·√⁄ÿ«¡ — »… ··«‘Œ«’ ›ﬁÿ
:gem:!role bots <rank>
·√⁄ÿ«¡ — »… ·Ã„Ì⁄ «·»Ê « 
:gem:!hchannel 
«Œ›«¡ «·‘« 
:gem:!schannel
«÷Â«— «·‘«  «·„Œ›Ì…
:gem:!clear <numbr>
„”Õ «·‘«  »⁄œœ
:gem:!clear
„”Õ «·‘« 
:gem:!mute @user <reason>
«⁄ÿ«¡ «·⁄÷Ê „ÌÊ  ·«“„ — »…<Muted>
:gem:!unmute @user
·›ﬂ «·„ÌÊ  ⁄‰ «·‘Œ’ 
:gem:!kick @user <reason>
ÿ—œ «·‘Œ’ „‰ «·”Ì—›—
:gem:!ban @user <reason>
Õ÷— «·‘Œ’ „‰ «·”Ì—›—
:gem:!mc
 ﬁ›Ì· «·‘« 
:gem:!unmc
› Õ «·‘« 
:gem:!dc
„”Õ ﬂ· «·—Ê„« 
:gem:!dr 
<„”Õ ﬂ· «·—«‰ﬂ«  <·«“„  ﬂÊ‰ —«‰ﬂ «·»Ê  ›Êﬁ ﬂ· «·—«‰ﬂ« 
:gem:!ct <name> 
«‰‘«¡ ‘« 
:gem:!cv <name>
«‰‘«¡ —ÊÊ„ ›ÊÌ”
:gem:!delet <name>
„”Õ «·‘«  «Ê «·—ÊÊ„ ›ÊÌ”
:gem:g!color <number>
Ì‰‘« ·ﬂ «·Ê«‰ „⁄ ﬂ„ «·Ê«‰  »Ì
:gem: !muteall
·«⁄ÿ«¡ „ÌÊ  ·ﬂ· «·”—›—
:gem: !deafen
·«⁄ÿ«¡ œ›Ì‰
:gem: !undeafen 
›ﬂ «·œ›Ì‰
:gem:g!setdate 
 «·»Ê  Ì⁄„· —Ê„ ›ÌÂ« «· «—ÌŒ
:gem:g!settime 
«·»Ê  Ì⁄„· —Ê„ ›ÌÂ« «··Êﬁ ***
`)
    message.author.sendEmbed(embed)
    
   }
   });


  client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-games") {
  const embedss2 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
***Ø?‹??ª «Ê«„— «·⁄«»´??‹?Ø***
:video_game: !rps ~ ÕÃ— Ê—ﬁ… „ﬁ’
:video_game: !speed ~ «”—⁄ ﬂ «»…
:video_game: !quas ~ «”∆·… ⁄«„…
:video_game: !‰ﬂ  ~ ‰ﬂ  
:video_game: !⁄»… ›ﬂﬂ ~ ›ﬂﬂ
:video_game: !⁄Ê«’„ ⁄‘Ê«∆Ì… ~ ⁄Ê«’„
:video_game: !·⁄»… ﬂ   ÊÌ  ~ ﬂ   ÊÌ 
:video_game: !roll <number> ~ ﬁ—⁄…
:video_game: !·Ê ŒÌ—Êﬂ »ÿ—Ìﬁ… Õ·Ê… ~ ·Ê ŒÌ—Êﬂ
:video_game: !⁄»… „—Ì„ ~ „—Ì„
:video_game: !›Ê«∆œ Ê‰’«∆Õ  ~ Â·  ⁄·„
:video_game: !·ﬂ ⁄ﬁ«» ﬁ«”Ì… ~ ⁄ﬁ«» `)

   message.author.sendEmbed(embed)
    
   }
   }); 

			  
client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-music") {
  const embedss2 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
***Ø?‹??ª «Ê«„— «·„Ê”ﬁÌ ´??‹?Ø***
***?[??????????????]?
ï
!play ~· ‘€Ì· «€‰Ì…
!join ~ œŒÊ· —Ê„ﬂ «·’Ê Ì
!stop ~ «·Œ—ÊÃ „‰ —Ê„ﬂ «·’Ê Ì
!skip,  ŒÿÌ «·√€‰Ì…
!pause ~ «Ìﬁ«› «·«€‰Ì… „ƒﬁ «
!resume ~  ﬂ„·… «·«€‰Ì…
!queue ~ «ŸÂ«— ﬁ«∆„… «· ‘€Ì·
!np ~ «ŸÂ«— «·«€‰Ì… «··Ì «‰  „‘€·Â« Õ«·Ì«
!vol 0:100 ~ «·’Ê 
ï
?[??????????????]?***
 `)
   message.author.sendEmbed(embed)
    
   }
   }); 


client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-bc") {
  const embedss2 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|ÂÌ·»
  :e_mail:      !bc | ·√—”«· »—Êœ ﬂ«”  ··ﬂ·
  :e_mail:      !bc  |  ·√—”«· »—Êœ ﬂ«”  ··√Ê‰·«Ì‰ `)
   message.author.sendEmbed(embed)
   
   }
   });







  
//////////////////////HELP 
client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-important") {
  const embedss2 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss2});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
?
**?[??????????????]?
                Important  :fire:
?[??????????????]?**
__to enable welcome message do channel name__
 "welcome"
__to enable Suggest message do channel name__
"suggestions"
__to enable log message do channel name__ "log"**
????????????????????????????????????????????????????
__!Build R ª«·»Ê  Ì⁄„· ·ﬂ —Ê„__ 
          ?? »Ì «·‘ﬂ· œ«
***('Info', 'text');
('Welcome', 'text');
('Chat', 'text');
('bot', 'text');
('bo7', 'text');
('pic', 'text');
('cut', 'text');
('log', 'text');
('admin-chat', 'text');
('????ADMNS????', 'voice');
('Owner - „«·ﬂ «·”Ì—›—', 'voice');
('Co Owner - ‰«∆» «·—∆Ì”', 'voice');
('Dev - „»—„Ã «·”Ì—›—', 'voice');
('Admin - „‘—›', 'voice');
('Mod - „Êœ', 'voice');
('????Other????', 'voice');
('[ R E C ] ??', 'voice');
('YouTubers - ÌÊ ÌÊ»—“', 'voice');
('VIP + - ﬂ»«— «·‘Œ’Ì«  »·”', 'voice');
('VIP - ﬂ»«— «·‘Œ’Ì« ', 'voice');
('Friends - «’œﬁ«¡', 'voice');
('????WEL????', 'voice');
('Help - „”«⁄œ…', 'voice');
('?? «ﬁ‹ ‹—«Õ‹« ‹ﬂ„‹ ?? ?', 'voice');
('?????????', 'voice');
('? ?? ??  ”Ê«·Ì› ??  ?', 'voice');
('? ?? ?? „Ê«Â» ??  ?', 'voice');
('? ?? ??›⁄«·Ì«  ?? ?', 'voice');
('? ??  ?? «·ﬁ—¬‰ «·ﬂ—Ì„  ?', 'voice');
('?????????', 'voice');
('?  ?? ??  «·”Ã‰ «·⁄«„ ?? ?', 'voice');
('????Games????', 'voice');
('Clash of Clans | ﬂ·«‘ √Ê› ﬂ·«‰“', 'voice');
('Clash Royal | ﬂ·«‘ —ÊÌ«·', 'voice');
('Hajwala  Online | ÂÃÊ·… √Ê‰ ·«Ì‰', 'voice');
('Bullet force | »Ê·  ›Ê—”', 'voice');
('MTA | «„  Ì «Ì', 'voice');
('Ludo Star | ·ÊœÊ ” «—', 'voice');
('????Private????', 'voice');
('?Tow?', 'voice');
('?Three?', 'voice');
('?Four?', 'voice');
('?Five?', 'voice');
('?Six?', 'voice');
('????AFK????', ***
????????????????????????????????????????????????????????????????????????
`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('??«·Œ«’ „€·ﬁ');
});

}
}); 



//////////////////////////////////----------------------------/////////////////////----////////ID
client.on("message", msg => {     
  if(msg.content.startsWith ("!id")) {
    if(!msg.channel.guild) return msg.reply('**:x: «”› ·ﬂ‰ Â–« «·«„— ··”Ì—›—«  ›ﬁÿ **');
      const embed = new Discord.RichEmbed();
  embed.addField("???ame ", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField("??I? ", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':low_brightness:St?t?s', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField('??P?????? ', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField('???oles ', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField('??Deloveber Bot', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
	    }
});
/////////////////////////////////////--------------------------------------///////////////////////////////////////ID
client.on('message', message => {
    if (message.content === "!ID") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setTitle(`info about ${message.guild.name}`)
   .addField("Server Owner ??",`? ` + `${message.guild.owner.user.username}`, true)
   .addField('Server ID ??',`?` + message.guild.id, true)
   .addField("Owner Tag",`? ` +  `#` + message.guild.owner.user.discriminator, true)
   .addField("Owner ID ??",`? ` + message.guild.owner.user.id, true)
   .addField("Server Region??",`? ` + message.guild.region, true)
   .addField("Server Member Size??",`? ` + message.guild.members.size, true)
   .addField("Server Channels Number??",`? ` + message.guild.channels.size, true)
   .addField("Server Roels Number??",`? ` + message.guild.roles.size, true)
   .addField("AFK channel??",`? ` + message.guild.afkChannel || 'Null', true)
   .addField("Server Created AT",`? ` + message.guild.createdAt, true)
   .addField(`info about ${message.author.username}`, `? `)
   .addField("Name",`? ` + `${message.author.username}`, true)
   .addField('Tag',`? ` + "#" +  message.author.discriminator, true)
   .addField("ID ??",`? ` + message.author.id, true)
   .addField(" Account Created At",`? ` + message.author.createdAt, true)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL)
      
      /////////////////////////////////////////////////////GAMING
   message.channel.sendEmbed(embed);
     }
 });
///////////////////////////////////////Mahmoud-QuaStyle

////////////////////////////////////////-----------////////////////////////////////////Ticket
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("!new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
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
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`g!confirm\`. This will time out in 10 seconds and be cancelled.`)
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


//////////////////////////////////////////////////////////////////////Support 2 



client.on('message', message => {
     if (message.content === "!help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: HELP :gear: **" , "")
     
     
  message.channel.sendEmbed(embed);
    }
});




///2






///////////////////////////////////////////////////////////////////////////////////////////////////Avatar
client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('GAMING BOT',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});
////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////Photo Server IMAGE 
client.on("message", message => {
    const prefix = "!"
              
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

///////////////////////////////////////////////////////////////////////--------------///////////////MOVE 

client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``·«” Œœ«„ «·√„— «ﬂ » Â–Â «·√„— : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`·ﬁœ ﬁ„  »”Õ» <@${usermentioned}> «·Ï «·—Ê„ «·’Ê Ì «·Œ«’ »ﬂ? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``·«  ” ÿÌ⁄ ”Õ» "+ message.mentions.members.first() +" `ÌÃ» «‰ ÌﬂÊ‰ Â–Â «·⁄÷Ê ›Ì —Ê„ ’Ê Ì`")
}
} else {
 message.channel.send("**``ÌÃ» «‰  ﬂÊ‰ ›Ì —Ê„ ’Ê Ì ·ﬂÌ  ﬁÊ„ »”Õ» «·⁄÷Ê √·Ìﬂ``**")
}
} else {
message.react("?")
 }}});	


/////////////////////////////////////////////////--------///////////////////////////ban
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
  /*let log = client.channels.find("name", "log");
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




////////////unban
client.on('message' , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`·«  ÊÃœ ·œÌﬂ — »…`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`·ﬁœ  „ ›ﬂ «·»«‰œ ⁄‰ «·‘Œ’ \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**? Unban** !')
        .addField('**? User Unban :** ', `${user}` , true)
        .addField('**? By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});	///////////////////////////////////////////// By:Mahmoud-QuaStyle

////////////////----------------------------------------------------------------///////////bans 
client.on('message', message => {
    if (message.content.startsWith("!bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} ⁄œœ «‘Œ«’ «·„»‰œ… „‰ «·”Ì—›— `))
  .catch(console.error);
}
});






//////////////////////////////////////////////---------------//////////////////////////////////////// P    I   N  G 

client.on('message', message =>{
    if(message.content === '!ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});

///////////////////////////////////////////--------------////////////////////////////////// ID   BOT 


client.on('message', message => {
    if (message.content.startsWith("!idbot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Name Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});


////////////////////////////////////////////////-------///////////////////////// i n  v i t e s 



////////////////////// ////////////////////// ////////////////////// ////////////////////// /Law 7ad d5al el Server y5od Rank Member Auto
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","´ MEMBER | ZZETCHENMC ª"));
    });
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
    });


//////////////////////////////////-----------////////////////////// ////////////////////// -----///////////////



//////////////////////////------//////////////////////////////////// //////////////////--------------////////////////////////BOT 
client.on('message', message => {
     if (message.content === "!bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});


///////////////-------------///////////////////////// ////////////////////// /////////--------------------------------------------------//////////Roles 
client.on('message', message => {
    if (message.content === '!roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('***Roles***: :100: ',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});



////////////////////////-----------////////////////////////////// ////////////// /////No Share Link Discordddddddddddddddddddddd


client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
}); 

//////////////////////--------------------/////////////////////////////////-----------------------/////////Clear <Number>
 






client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```÷⁄ ⁄œœ «·—”«∆· «· Ì  —Ìœ „”ÕÂ« ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n⁄œœ «·—”«∆· «· Ì  „ „”ÕÂ«: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


/////////////////-----------//////////////////////////////// //////////////////////////////-----------/////////////////////emojilist




client.on('message', message => { 
let PREFIX = '!'
    if (message.content.startsWith(PREFIX + 'Emojiserverda')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});


///////////////--------/////////////////////////////////////// //////////////////////////////--------------////Rules


client.on('message', message => {
            if (message.content.startsWith("!rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **:warning:  «Ê·«** ' ,' **„„‰Ê⁄ «·”»** ')
.addField('     **:warning:  À«‰Ì«** ' ,' **·«  ”ÊÌ ”»«„ ** ')
.addField('     **:warning:  À«·À«** ' ,' **·«  “⁄Ã «·«Œ—Ì‰** ')
.addField('    **:warning:  —«»⁄«**' ,' **„„‰Ê⁄ «·«⁄·«‰« ** ')
.addField('    **:warning:  Œ«„”«**' ,' **«Õ —„ «·«Œ—Ì‰** ')
.addField('    **:warning:  ”«œ”«**' ,' **·«  ‰‘— ›Ì «·‘«  «Ê »· Œ«’** ')
.addField('    **:warning:  ”«»⁄«**' ,' **·«  ‰‘— —Ê«»ÿ!** ')
.addField('    **:warning:  À«„‰«**' ,' **·«  ”ÊÌ ”»«„ «Ì„ÊÃÌ** ')
.addField('    **:warning:   «”⁄«**' ,' **·«  ÿ·» — »Â «·«œ«—Â!** ')
.addField('    **By:@?????????????-QuaStyle ???#5661 ** ')

.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
////////////----------------//////////////////////////////////// ////////////////////// ////////////////////////////BC


//////////////////////////////////////////Autoo Member TO Join Server 

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("Member", "1");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})



////////////////////////////-------------/////////////////////////Color Nubmber

client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '!color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**·« ÌÊÃœ ·Ê‰ »Â–« «·√”„ ** :x: `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done ,  „  €Ì— ·Ê‰ﬂ . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});

///////////////////////////////////////////////////////////////////////// ///////////////-//////////////date
const HeRo = new Discord.Client();
client.on('message', message => {

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**?  Date - «· «—ÌŒ ? **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "?"+ Day + "-" + Month + "-" + Year + "?")
             message.channel.sendEmbed(Date15);
    }
});
/////////////////////////////////////////////////////////----///////////////////Code law 7ad tl3 men server we gh tany y5od nfs el Rank
var ALPHACODES = {};
client.on('guildMemberRemove', member => {
ALPHACODES[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!ALPHACODES[member.user.id]) return;
console.log(ALPHACODES[member.user.id].roles.length);
for(let i = 0; i < ALPHACODES[member.user.id].roles.length + 1; i++) {
member.addRole(ALPHACODES[member.user.id].roles.shift());
}
});
/////////////////////////////////////////////////////////////////////////////////// ////////////////////////////My Invite





////////////////-----------------------/////Send

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("?").then(r => msg.react("?"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});
/////////////////////////////////////////////////////////////////////////-----//////////////MC  Umc


client.on('message', message => {

    if (message.content === "!mc") {
                        if(!message.channel.guild) return message.reply(' Â–« «·«„— ›ﬁÿ ··”Ì—›—«  !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ·Ì” ·œÌﬂ ’·«ÕÌ« ');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply(" „  ﬁ›Ì· «·‘«  ? ")
           });
             }
if (message.content === "!umc") {
    if(!message.channel.guild) return message.reply(' Â–« «·«„— ›ﬁÿ ··”Ì—›—«  !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('·Ì” ·œÌﬂ ’·«ÕÌ« ');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply(" „ › Õ «·‘« ?")
           });
             }



});


//////////////////////////////////////// ////////////////////// ////////////////////// /////////////add ROLE ALL 
client.on('message', message => {
   
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
   
    var command = message.content.toLowerCase().split(" ")[0]; // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
    var prefix = '!'; // Â‰«  ﬁœ—  €Ì— «·»—›ﬂ” <==================
   
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
 
        let roleCommand = new Discord.RichEmbed()
        .setTitle(':white_check_mark: Role Command.')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n? \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n? \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n? \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n? \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n? \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n? \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n? \`\`For remove from all role.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
 
        if(!args[1]) return message.channel.send(roleCommand);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);
 
        if(userM) {
            var argsRole = message.content.toLowerCase().split(' ').slice(2);
        }else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = message.content.toLowerCase().split(' ').slice(3); // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
           
            if(!message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).addRole(getRole.id);
                message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
            }else if(message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).removeRole(getRole.id);
                message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
            }
        }else if(args[1] === 'humans') {
            let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role humans add <ROLE>**\n? \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n? \`\`For delete the role from all humans.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs); // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n? = Sure, give him the role.\n\n? = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('?').then(() => msg.react('?')) // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => { // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n? = Sure, remove the role from him.\n\n? = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('?').then(() => msg.react('?')) // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
                                }, 10000)
                            });
                        });
                    }); // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                    dontRemove.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            } // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
        }else if(args[1] === 'bots') {
        let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role bots add <ROLE>**\n? \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n? \`\`For delete the role from all bots.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n? = Sure, give him the role.\n\n? = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('?').then(() => msg.react('?')) // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') { // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n? = Sure, remove the role from him.\n\n? = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('?').then(() => msg.react('?'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
                            message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }
        }else if(args[1] === 'all') { // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
            let notArgs = new Discord.RichEmbed()
            .setTitle(':white_check_mark: Role Command.')
            .setColor('GREEN')
            .setDescription(`**\n${prefix}role all add <ROLE>**\n? \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n? \`\`For delete the role from all.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            if(!args[2]) return message.channel.send(notArgs);
            if(!args[3]) return message.channel.send(notArgs);
            if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
            if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
 
            if(args[2] === 'add') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed()
                .setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n? = Sure, give all the role.\n\n? = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('?').then(() => msg.react('?'))
 
                    let giveAll = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                    let dontGiveAll = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveAll, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
                                }, 10000) // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === 'remove') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed() // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                .setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
                .setColor('RED')
                .setDescription('**\nYou have 1 min to choose reaction you want.**\n\n? = Sure, remove the role from him.\n\n? = No no, cancel.')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('?').then(() => msg.react('?'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '?'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id; // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    }); // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
                })
            } // ÕﬁÊﬁ «·›« ﬂÊÊœ“ Alpha Codes.
        }
    }
});

////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////// P Music



client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('!p music')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`„‰ ›÷·ﬂ «œŒ· —Ê„ ’Ê Ì `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=feQpSJsNUis/', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('!stop')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`„‰ ›÷·ﬂ «œŒ· —Ê„ ’Ê Ì `);
    }
voiceChannel.leave();
  }

});
/////////////////////////////-----------------//////all BOTS
client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

///////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////create ct and cv

 client.on("message", (message) => {
if (message.content.startsWith("!ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage(':ballot_box_with_check:  ‹„ ≈‰‹‘«¡ —Ê„ ﬂ‹ «»‹Ì')

}
});

//////////////////////////////////////////////////////////////cv 
client.on("message", (message) => {
if (message.content.startsWith("!cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage(':white_check_mark:  ‹„ ≈‰‹‘«¡ —Ê„ ’‹Ê Ì')
    
}
});
/////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////// Inv bot 

//////////////////////////////////////////////////// ////////////////////// /////////////////////7alet el BOT

const adminprefix = "!";
const devs = ['399697177259147275' , '467291744241975326'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}  „  €ÌÌ— »·«Ì‰ﬁ «·»Ê  ≈·Ï **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** :  „  €ÌÌ— √”„ «·»Ê  ≈·Ï`)
return message.reply("**·« Ì„ﬂ‰ﬂ  €ÌÌ— «·«”„ ÌÃ» ⁄·Ìﬂ «·«‰ Ÿ¬— ·„œ… ”«⁄ Ì‰ . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** :  „  €Ì— ’Ê—… «·»Ê `);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`** „  €ÌÌ—  ÊÌ ‘ «·»Ê  ≈·Ï  ${argresult}**`)
}
});




///////////////////////////////////// ////////////////////// //////////// Ty For add BOT in YOur Discord 
client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thank you for adding the bot to The Server :tada: **`)
      guild.owner.send(embed)
});


////////////////////////////////////////// ////////////////////// ////////////////////// /////////////////////////Rsala le Owner

client.on('message', ReBeeL => {
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "owner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** !owner<message> **")
                return;
                  }
                   var rebel = new Discord.RichEmbed()
                      .setColor("RANDOM")
                        .setDescription(`
 „ ≈—”¬· ·ﬂ —”¬·… „‰ «·”Ì—›— «·Œ«’ »ﬂ
${ReBeeL.guild.name}
«·—”¬·…
${args}
        `)
        .setFooter(` »Ê¬”ÿ… ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("** „ ≈—”¬· «·—”¬·… ≈·Ï √Ê‰— «·”Ì—›—**")
     }
    }
  );




/////////////
//////////////////////////////////////---------------///////////////////////////////WELCOME 












////////---------------------------------------////
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








///////////////////////////////////////////////////////// ////////////////////// /////// Color 



client.on('message', function(msg) {
if(msg.content.startsWith ('!server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:**S?rvËr Typ?**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':trident:** __R?nks__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__N?mb?r Th?  MÈmb?rs__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__N?mbÍr ?f M?mb?rs  ?nl?nË__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ R??ms Typ?ng__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':speaking_head:**__R??ms V?ic?__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__OwnËr __**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ID SËrvËr__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ S?rvÈr Fr?m This tim?__**:tools:',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
///Server
client.on('message', function(msg) {
if(msg.content.startsWith ('!Server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:**S?rvËr Typ?**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':trident:** __R?nks__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__N?mb?r Th?  MÈmb?rs__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__N?mbÍr ?f M?mb?rs  ?nl?nË__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ R??ms Typ?ng__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':speaking_head:**__R??ms V?ic?__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__OwnËr __**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ID SËrvËr__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ S?rvÈr Fr?m This tim?__**:tools:',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


////////////////////


client.on('message', async message => {
	if (message.content === '!help-admin') {
		message.react('??');
	}
	else if (message.content === '!react-custom') {
		message.react('396548322053062656');
	}
	else if (message.content === '!fruits') {
		message.react('??')
			.then(() => message.react('??'))
			.then(() => message.react('??'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', async message => {
	if (message.content === '!help-music') {
		message.react('??');
	}
	else if (message.content === '!react-custom') {
		message.react('396548322053062656');
	}
	else if (message.content === '!fruits') {
		message.react('??')
			.then(() => message.react('??'))
			.then(() => message.react('??'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.on('message', async message => {
	if (message.content === '!help-bc') {
		message.react('?');
	}
	else if (message.content === '!react-custom') {
		message.react('396548322053062656');
	}
	else if (message.content === '!fruits') {
		message.react('??')
			.then(() => message.react('??'))
			.then(() => message.react('??'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});


client.on('message', async message => {
	if (message.content === '!help-public') {
		message.react('??');
	}
	else if (message.content === '!react-custom') {
		message.react('396548322053062656');
	}
	else if (message.content === '!fruits') {
		message.react('??')
			.then(() => message.react('??'))
			.then(() => message.react('??'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

////////////////////////

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "!mute")) {
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
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: ·« Ì„ﬂ‰ ¬⁄ÿ«¡ „ÌÊ  ·«œ«—… «·”Ì—›—**`); //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
 
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
    if(!reason) reason = " [ **·„ Ì–ﬂ— ·„«–«** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('** „ ¬⁄ÿ«∆ﬂ „ÌÊ **')
    .addField('**__«·”Ì—›—__**',[ message.guild.name ]) //kinggamer ÕﬁÊﬁ «·›« ﬂÊœ“ Ê
    .addField('**__ „ ¬⁄ÿ«∆ﬂ „ÌÊ  »Ê«”ÿ…__**', [ message.author ])
    .addField('**__¬·”»»__**',reason)
    .addField('**__Êﬁ  «·„ÌÊ __**',duration)
 
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

///////////////////////////////////////////////
/////////////welcome new

///////////////////bot el fe serrver eh 

client.on('message', message => {
    if(message.content == '!bot-all-server') {
             if(!message.author.id === '399697177259147275') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });

////////////////////////////////////////////////////Giveaway

















//////////////////////////////////////


client.on('guildCreate', guild => {
    

    var star = new Discord.RichEmbed()
    .setTitle("GAMING BOT")
    .setColor(000000)
    .setDescription(`**Hey**`)                      
              .setFooter(`GAMING BOT `, 'https://cdn.discordapp.com/attachments/387286451034783744/388013469275914240/thesilent_1x.jpg')
        guild.owner.send(star)
  })







//////Muted «”ﬂÊ 
client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "!mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** ·« ÌÊÃœ ·œÌﬂ »—„‘‰ 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** ·« ÌÊÃœ — »… «·„ÌÊ  'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** ÌÃ» ⁄·Ìﬂ „‰‘‰  ‘Œ’ «Ê·«**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('«·√” ⁄„«·:', '«”ﬂ /«ÕﬂÌ')
      .addField(' „ „ÌÊ :', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('»Ê«”ÿ…:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ·« ÌÊÃœ ·œÌ »—„‘‰ Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: ..  „ «⁄ÿ«¡ «·⁄÷Ê „ÌÊ **").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: ..  „ «⁄ÿ«¡ «·⁄÷Ê „ÌÊ  ﬂ «»Ì**").catch(console.error);
  });
    }
  
  };
  
  });







///////////////////////////unmute


client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "!unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** ·« ÌÊÃœ ·œÌﬂ »—„‘‰ 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** ·« ÌÊÃœ ·œÌﬂ — »Â «·„ÌÊ  'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** ÌÃ» ⁄·Ìﬂ „‰‘‰  ‘Œ’ «Ê·«**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('«·√” ⁄„«·:', '«”ﬂ /«ÕﬂÌ')
      .addField(' „ ›ﬂ «·„ÌÊ  ⁄‰:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('»Ê«”ÿ…:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ·« ÌÊÃœ ·œÌ »—„‘‰ Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: ..  „ ›ﬂ «·„ÌÊ  ⁄‰ «·‘Œ’ **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: ..  „ ›ﬂ «·„ÌÊ  ⁄‰ «·‘Œ’ **").catch(console.error);
  });
    }
  
  };
  
  });
/////////////////////////////

///// ///////////Music
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('ÌÃ»  Ê¬Ãœ Õ÷— ﬂ »—Ê„ ’Ê Ì .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('·« Ì Ê¬Ãœ ·œÌ ’·«ÕÌ… ·· ﬂ·„ »Â–¬ «·—Ê„');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('·« Ì Ê¬Ãœ ·œÌ ’·«ÕÌ… ·· ﬂ·„ »Â–¬ «·—Ê„');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**ÌÃ»  Ê¬›— »—„‘‰ `EMBED LINKS`·œÌ **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(` **${playlist.title}**  „ «·≈÷¬›… ≈·Ï ﬁ√∆„… «· ‘€Ì·`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**«·—Ã¬¡ „‰ Õ÷— ﬂ ≈Œ Ì¬— —ﬁ„ «·„ﬁÿ⁄** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("Hyped. | v0.1")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('·„ Ì „ ≈Œ Ì¬— „ﬁÿ⁄ ’Ê Ì');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: ·« Ì Ê›— ‰ ¬∆Ã »ÕÀ ');
				}
			}//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('√‰  ·”  »—Ê„ ’Ê Ì .');
		if (!serverQueue) return msg.channel.send('·« Ì Ê›— „ﬁÿ⁄ · Ã¬Ê“Â');
		serverQueue.connection.dispatcher.end(' „  Ã¬Ê“ Â–¬ «·„ﬁÿ⁄');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('√‰  ·”  »—Ê„ ’Ê Ì .');
		if (!serverQueue) return msg.channel.send('·« Ì Ê›— „ﬁÿ⁄ ·≈Ìﬁ¬›Â');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end(' „ ≈Ìﬁ¬› Â–¬ «·„ﬁÿ⁄');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('√‰  ·”  »—Ê„ ’Ê Ì .');
		if (!serverQueue) return msg.channel.send('·« ÌÊÃœ ‘Ì¡ ‘€¬·.');
		if (!args[1]) return msg.channel.send(`:loud_sound: „” ÊÏ «·’Ê  **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker:  „  €Ì— «·’Ê  «·Ì **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('·« ÌÊÃœ ‘Ì¡ Õ«·Ì › «·⁄„·.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: «·«‰ Ì „  ‘€Ì· : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('·« ÌÊÃœ ‘Ì¡ Õ«·Ì › «·⁄„·.');
		let index = 0;
		//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**«·«‰ Ì „  ‘€Ì·** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send(' „ ≈Ìﬁ«› «·„Ê”ÌﬁÏ „ƒﬁ «!');
		}//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		return msg.channel.send('·« ÌÊÃœ ‘Ì¡ Õ«·Ì › «·⁄„·.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('«” √‰›  «·„Ê”ÌﬁÏ »«·‰”»… ·ﬂ !');
		}//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		return msg.channel.send('·« ÌÊÃœ ‘Ì¡ Õ«·Ì ›Ì «·⁄„·.');
	}

	return undefined;
});
//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ¡ , ??#4777 'RqlixMC v0.1'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ¡ , ??#4777 'RqlixMC v0.1'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`·« √” ÿÌ⁄ œŒÊ· Â–¬ «·—Ê„ ${error}`);
		}
	} else {//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}**  „ «÷«›Â «·«€‰Ì… «·Ì «·ﬁ«∆„…!`);
	}
	return undefined;
}//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);
//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ¡ , ??#4777 'CODES SERVER'

	serverQueue.textChannel.send(`»œ¡  ‘€Ì· : **${song.title}**`);
}















client.on('message',function(message) {
    if(!message.channel.guild) return undefined;
    const swearWords = ["ﬂﬂ”","ﬂ” «„ﬂ","ÕÌÊ«‰","ﬂ·»"];
    if (swearWords.some(word => message.content.includes(word)) ) {
      message.delete()
      message.reply("**„„‰Ê⁄ «·”»**"); 
    }
  });





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});
//////////////////////////////----------------welcome///

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .setImage('https://cdn.pg.sa/dupNksp0Yh.gif') //Â‰« Õÿ «·’Ê—Â «·Ì  »ÌÂ«
        .addField(':small_orange_diamond:N‚mË  :rose:   ',`${member}`)
        .addField(':balloon:W?lc?mÈ t?  S?rv?r' , `W?lc?mÈ t?  S?rv?r, ${member}`)
        .addField(':id: | UsËr :', "**[" + `:small_orange_diamond: ${member.id}` + "]**" )
                .addField(':pushpin: Y?? Ar? The M?mbÍr N?mbËr?',`:small_orange_diamond: ${member.guild.memberCount}`)
               
                  .addField("ï?‡me .. ?",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' S?rv?r', `${member.guild.name}`,true)
                                       
     .setFooter("S?rv?r")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .setImage('https://cdn.pg.sa/dupNksp0Yh.gif') //Â‰« Õÿ «·’Ê—Â «·Ì  »ÌÂ«
        .addField(':small_orange_diamond:N‚mË  :rose:   ',`${member}`)
        .addField(':balloon:W?lc?mÈ t?  S?rv?r' , `W?lc?mÈ t?  S?rv?r, ${member}`)
        .addField(':id: | UsËr :', "**[" + `:small_orange_diamond: ${member.id}` + "]**" )
                .addField(':pushpin: Y?? Ar? The M?mbÍr N?mbËr?',`:small_orange_diamond: ${member.guild.memberCount}`)
               
                  .addField("ï?‡me .. ?",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' S?rv?r', `${member.guild.name}`,true)
                                       
     .setFooter("S?rv?r")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    ///////////////////////////////////Code e lma 7ad ytl3 men el Discord
 client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`:wave:  ??`)
            .setImage('https://cdn.pg.sa/GeQGucQhBR.gif') 
            .setDescription(`Bye Bye  ?? `)
            .addField('??  --- ',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== G??d Luck ?=====`, 'https://cdn.pg.sa/GeQGucQhBR.gif')
        
        var channel =member.guild.channels.find('name', 'welcome')
        if (!channel) return;
        channel.send({embed : embed});
        })

/////////////////////name welcome good bye







///////////////////////// ////////////////////// ////////////////////// ////////////////////// ////////WELCOME 

////////////WELCOME 2
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === '111welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` ?  ?***W?e?l?c?o?m?e  , ${member} ?t?o  ?Server Mal,Shop  :two_hearts: ???:sparkles:*** `);
});
////welcome
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === '1welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` ?  ?***W?e?l?c?o?m?e  , ${member} ?t?o  ?Server  :two_hearts: ???:sparkles:*** `);
});



client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'shopªwelcomeãã');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` ?  ?***W?e?l?c?o?m?e  , ${member} ?t?o  ?Server Shoping  :two_hearts: ???:sparkles:*** `);
});
/////////////////////////////////////////////// ////////////////////// ////////////////////// //////////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('***Welcome To Server*** :sparkles: ');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Â·«') {
    msg.reply('***Welcome To Server*** :sparkles: ');
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('***Welcome To Server*** :sparkles: ');
  }
});
client.on('message', msg => {
  if (msg.content === '..') {
    msg.reply('***Welcome To Server*** :sparkles: ');
  }
});
client.on('message', msg => {
  if (msg.content === '...') {
    msg.reply('***Welcome To Server*** :sparkles: ');
  }
});
client.on('message', msg => {
  if (msg.content === '?') {
    msg.reply('***Welcome To Server*** :sparkles: ');
  }
});
client.on('message', msg => {
  if (msg.content === '??') {
    msg.reply('***Welcome To Server*** :sparkles: ');
  }
});





//////////////////////////////////////////////// ////////////////////// ////////////////////////////////uptime el bot 48al men emta 


client.on('message', message => {
    var prefix = "!"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});
















////////////////////////////////////cal
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)  .catch(console.error);

    }
};
});



/////////////////////////////////////////////////////////////-////////////////////kick
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**„‰‘‰ ‘Œ’**");
  if(!reason) return message.reply ("**«ﬂ » ”»» «·ÿ—œ**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**·«Ì„ﬂ‰‰Ì ÿ—œ ‘Œ’ «⁄·Ï „‰ — » Ì Ì—ÃÂ «⁄ÿ«¡ «·»Ê  — »Â ⁄«·Ì**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});







client.on('message', message => {

           if (message.content === prefix + "dt") {
           if (!message.channel.guild) return message.reply('** This command only for servers **');  
           var currentTime = new Date(),
              hours = currentTime.getHours() + 4 ,
              hours2 = currentTime.getHours() + 3 ,
              hours3 = currentTime.getHours() + 2 ,
              hours4 = currentTime.getHours() + 3 ,
              minutes = currentTime.getMinutes(),
              seconds = currentTime.getSeconds(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
               var h = hours
    if(hours > 12) {
                 hours -= 12;
              } else if(hours == 0) {
                  hours = "12";
              }  
               if(hours2 > 12) {
                 hours2 -= 12;
              } else if(hours2 == 0) {
                  hours2 = "12";
               
              }  
  if(hours3 > 12) {
                 hours3 -= 12;
              } else if(hours3 == 0) {
                  hours3 = "12";
              } 
              if (minutes < 10) {
                  minutes = '0' + minutes;
              }
   
   
              var suffix = '’»«Õ«Û';
              if (hours >= 12) {
                  suffix = '„”«¡';
                  hours = hours - 12;
              }
              if (hours == 0) {
                  hours = 12;
              }
    
   
                  var Date15= new Discord.RichEmbed()
                  .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                  .setTitle( ":clock: ?«· «—ÌŒ  Ê«·Êﬁ ?:clock: ")
                  .setColor('RANDOM')
                  .setFooter(message.author.username, message.author.avatarURL)
                  .addField(' :flag_sd: «·«„«—« ',
                  ":round_pushpin: ?"+ hours + ":" + minutes +":"+ seconds + "?:round_pushpin: ")
                   .addField(' :flag_sa: „ﬂÂ «·„ﬂ—„Â',
                  ":round_pushpin: ?"+ hours2 + ":" + minutes +":"+ seconds  + "?:round_pushpin: ") 
                  .addField(' :flag_ye: „’—',
                  ":round_pushpin: ?"+ hours3 + ":" + minutes +":"+ seconds  + "?:round_pushpin: ") 
                   
                  .addField('Date',
                  ":date: ?"+ Day + "-" + Month + "-" + Year +  "?:date: ")
   
                   message.channel.sendEmbed(Date15);
          }
      });

////////////////////////ly t8yr asm 45s fe server



///////////////////////////////////////deafen

 client.on('message', message => {
        if(message.content.startsWith(prefix + 'deafen')) {
      if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
        return message.reply('**ÌÃ» ⁄·Ìﬂ «·„‰‘‰ «Ê·«¯**:x:').catch(console.error);
      }
      if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
        return message.reply('··√”› «·»Ê  ·« Ì„ ·ﬂ ’·«ÕÌ«  · ‰›Ì– Â–Â «·√„—**:x:').catch(console.error);
      }
     
      const deafenMember = (member) => {
        if (!member || !member.voiceChannel) return;
        if (member.serverDeaf) return message.channel.send(`${member} **·œÌÂ œÌ›‰ »«·›⁄·**:x:`);
        member.setDeaf(true).catch(console.error);
        if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**·Ì” ·œÌﬂ ’·«ÕÌ… ·«⁄ÿ«¡ œÌ›‰ **:x: ").then(m => m.delete(5000));
      };
     
      message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
      message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
        }
        
    });  
     
    client.on('message', async message =>{
      if(message.content.startsWith(prefix + 'undeafen')) {
     
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**ÌÃ» ⁄·Ìﬂ «·„‰‘‰ «Ê·«¯**:x:').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('**··√”› «·»Ê  ·« Ì„ ·ﬂ ’·«ÕÌ«  · ‰›Ì– Â–Â «·√„—**:x: ').catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**·Ì” ·œÌﬂ ’·«ÕÌ… ·«⁄ÿ«¡ œÌ›‰ **:x: ").then(m => m.delete(5000));
    }
     
    const undeafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (!member.serverDeaf) return message.channel.send(`${member} `);
      member.setDeaf(false).catch(console.error);
    };
     
    message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
    }
    });
  


/////////////////////////////////////////Mute all 
client.on('message', message => {
  if(message.content === prefix + "muteall") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__·Ì” ·œÌﬂ ’·«ÕÌ« __**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: false
  
  }).then(() => {
      message.reply("**__ „  ﬁ›Ì· «·‘« __ :white_check_mark: **")
  
  });
  }
     
  
  
  });
    client.on('message', message => {
  if(message.content === prefix + "unmuteall") {
            if(!message.channel.guild) return message.reply('** This command only for servers**');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__·Ì” ·œÌﬂ ’·«ÕÌ« __**');
  message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: true
  
  }).then(() => {
      message.reply("**__ „ › Õ «·‘« __:white_check_mark:**")
  });
    }
     
  
  
  });


///////////////////////////////////////obc 






client.on("message", message => {
    if (message.content.startsWith("!d3s")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:heart_exclamation:  ⁄œœ «·„” ·„Ì‰ `);
  message.delete();
  };
  });


//bc online


  




///////////////////////////////////////// 

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('⁄œœ «⁄÷«¡ «·”Ì—›—',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });





//////////////////REPORT



client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("·Ê «‰ «·«»·«€ ›ÌÂ „“Õ —«Õ Ì ⁄—÷ ’«Õ» «·«»·«€ ·ﬁÊ»« ")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("?")
    msg.react("?")
.then(() => msg.react('?'))
.then(() =>msg.react('?'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**ª - Done! ??**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});


////////////////Animal

///////////////////////////////////////////
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("399697177259147275").send({embed:iiMo});
    }
});

////////////////RsaLa most5dem el BOT


client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('!bot-bc')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('Ã«— «—”«· «·—”«·… :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });


//////////////////Photo animal


 

client.on('message', message => {
    if (message.content.startsWith("!AVatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('name bot',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});


////////////////////-----------------------------------------///////info members
client.on('message', message => {
    if(message.author.bot) return; // Alpha Codes Server.
    if(message.channel.type === 'dm') return;
   
    var args = message.content.toLowerCase().split(' '); // Alpha Codes Server.
    var command = args[0];
    var prefix = '!'; // <===========  ﬁœ—  €Ì— «·»—›ﬂ”
   
    if(command == prefix + 'members') {
        var memberS = message.guild.members.size; // Alpha Codes Server.
        if(!args[1] || isNaN(args[1]) || args[1] === '1') {
            var number = 1;
 
            if(memberS > 10) {
                var more = `\n__:sparkles: **More?** \`\`${prefix}members 2\`\` (${Math.round(memberS / 10)} pages)`;
            }else {
                var more = '__'; // Alpha Codes Server.
            }
 
            let embedS = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **${memberS}** Members.`) // Alpha Codes Server.
            .setColor('GREEN')
            .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(0, 10).join('\n')}__\n${more}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
 
            message.channel.send(embedS);
        }else if(!isNaN(args[1])) {
            var number = 1;
 
            if(memberS > 10) {
                var more = `choose **1** To **${Math.round(memberS / 10)}**`;
            }else {
                var more = 'This server have **1** Page only.'; // Alpha Codes Server.
            }
 
            if(Math.round(args[1].replace('-', '')) * 10 - 9 > memberS) return message.channel.send(`:no_entry: | I couldn\'t find the page. ${more}`);
 
           let embedS = new Discord.RichEmbed()
           .setTitle(`:white_check_mark: **${memberS}** Members.`) // Alpha Codes Server.
           .setColor('GREEN')
           .setDescription(`__\n__${message.guild.members.map(m => `**${number++}.** \`\`${m.user.tag}\`\``).slice(10 * Math.round(args[1].replace('-', '')) - 10, 10 * Math.round(args[1].replace('-', ''))).join('\n')}\n\n:sparkles: **More?** \`\`${prefix}members ${Math.round(args[1].replace('-', '')) + 1}\`\` (${Math.round(memberS / 10)} pages)`)
           .setTimestamp()
           .setFooter(message.author.tag, message.author.avatarURL)
 
           message.channel.send(embedS);
       }
   }
 
 
   if(command == prefix + 'info-member') { // Alpha Codes Server.
       if(!args[1]) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
       if(isNaN(args[1])) return message.channel.send(`:no_entry: | Please enter the member number. \`\`If you want to know how to get the member number please type ${prefix}members (page)\`\``);
       if(args[1] > message.guild.members.size) return message.channel.send(`:no_entry: | I couldn\'t find the user. Please selecte number from 1 to ${message.guild.members.size}`);
 
       let memberInfo = new Discord.RichEmbed()
       .setTitle(`:white_check_mark: Informations about **${message.guild.members.map(m => m.user.tag).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}**`) // Alpha Codes Server.
       .setThumbnail(`${message.guild.members.map(m => m.user.avatarURL).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}`)
       .setColor('GREEN')
       .setDescription(`__\n__**INFORMATIONS USER:**\n\n**User ID:** \`\`${message.guild.members.map(m => m.user.id).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Tag:** \`\`#${message.guild.members.map(m => m.user.discriminator).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Created at:** \`\`${message.guild.members.map(m => Days(m.user.createdAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Joined at:** \`\`${message.guild.members.map(m => Days(m.joinedAt)).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Status:** \`\`${message.guild.members.map(m => m.user.presence.status).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\`\n**User Roles Amount:** \`\`${message.guild.members.map(m => m.roles.size - 1).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))} Role.\`\`\n**User Bot:** \`\`${message.guild.members.map(m => m.user.bot).slice(Math.round(args[1].replace('-', '')) - 1, Math.round(args[1].replace('-', '')))}\`\``) // Alpha Codes Server.
       .setTimestamp()
       .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
 
       message.channel.send(memberInfo);
   } // GAMING Server.
});
function Days(date) {
   let now = new Date(); // Alpha Codes Server.
   let diff = now.getTime() - date.getTime(); // Alpha Codes Server.
   let days = Math.floor(diff / 86400000);
   return days + (days == 1 ? " day" : " days") + " ago"; // Alpha Codes Server.
}
///////----------------------------------------------------///GAMING INFO CHANNEL
client.on('message', message => {//GAMING
    if(!message.channel.guild) return;//GAMING //GAMING
if(message.content.startsWith(prefix + 'channel')) {//Alpha Codes
    let channel = message.channel//GAMING
    var embed = new Discord.RichEmbed()//GAMING
      .setTitle(":low_brightness:Channel Info:small_orange_diamond: ")//GAMING
      .setColor("#9932CC")//GAMING
      .setDescription(`:low_brightness:Info about <#${channel.id}>\n:low_brightness:Channel ID: ${channel.id}:pen_ballpoint: `)//Alpha Codes
      .addField(":low_brightness:Created At :small_red_triangle_down: ",  `:low_brightness: ${channel.createdAt}:clock: `)//GAMING
      .addField(":low_brightness:Channel Type :flag_white:", `:low_brightness: ${channel.type}:jack_o_lantern: `)//GAMING
      .addField(":low_brightness:Extra Information :100: ", `:low_brightness:Channel is NSFW => ${channel.nsfw}:round_pushpin: \n:low_brightness:Channel Topic=> ${channel.topic} \n:low_brightness: Channel Parent => ${channel.parent} :orange_book: \n:low_brightness: Channel Position =>   ${channel.position} :black_heart: `)
 
     message.channel.send({ embed: embed });//GAMING
  }//GAMING
 
    });//GAMING





var cats = ["https://cdn.pg.sa/kQnLdE3Iqy.jpg","https://cdn.pg.sa/9NVzokjdye.jpg","https://cdn.pg.sa/FYchkbgg02.jpg","https://cdn.pg.sa/oxEQmBE6Pw.jpg","https://cdn.pg.sa/DwYG1JAibu.jpg","https://cdn.pg.sa/3VOKej7Rze.jpg","https://cdn.pg.sa/TdwTWp1qCw.jpg","https://cdn.pg.sa/gzrwDsZ85u.jpg","https://cdn.pg.sa/Ndpob7WF1c.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'game')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
//////////////////-------------------------------------////////Mn4en el BOT yrod 3lek


client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("`Welcome !!`");
    }
});








///////////////////////////GAME
const cuttweet = [
  'ﬂ   ÊÌ  ˛|  ŒÌ¯· ·Ê √‰ﬂ ” —”„ ‘Ì¡ ÊÕÌœ ›Ì’»Õ ÕﬁÌﬁ…° „«–« ” —”„ø',
  'ﬂ   ÊÌ  | √ﬂÀ— ‘Ì¡ Ìı”ﬂˆ  «·ÿ›· »—√Ìﬂø',
  'ﬂ   ÊÌ  | «·Õ—Ì… ·‹ ... ø',
  'ﬂ   ÊÌ  | ﬁ‰«… «·ﬂ— Ê‰ «·„›÷·… ›Ì ÿ›Ê· ﬂø',
  'ﬂ   ÊÌ  ˛| ﬂ·„… ··’ıœ«⁄ø',
  'ﬂ   ÊÌ  ˛| „« «·‘Ì¡ «·–Ì Ìı›«—ﬁﬂø',
  'ﬂ   ÊÌ  | „Êﬁ› „„Ì“ ›⁄· Â „⁄ ‘Œ’ Ê·« Ì“«· Ì–ﬂ—Â ·ﬂø',
  'ﬂ   ÊÌ  ˛| √ÌÂ„« Ì‰ ’—° «·ﬂ»—Ì«¡ √„ «·Õ»ø',
  'ﬂ   ÊÌ  | »⁄œ 10 ”‰Ì‰ «Ì‘ » ﬂÊ‰ ø',
  'ﬂ   ÊÌ  ˛| „ˆ‰ √€—» Ê√Ã„· «·√”„«¡ «· Ì „—  ⁄·Ìﬂø',
  '˛ﬂ   ÊÌ  | ⁄„—ﬂ ‘·  „’Ì»… ⁄‰ ‘Œ’ »—€» ﬂ ø',
  'ﬂ   ÊÌ  | √ﬂÀ— ”ƒ«· ÊÃˆ¯Â ≈·Ìﬂ „ƒŒ—«ø',
  '˛ﬂ   ÊÌ  | „« ÂÊ «·‘Ì¡ «·–Ì ÌÃ⁄·ﬂ  ‘⁄— »«·ŒÊ›ø',
  '˛ﬂ   ÊÌ  | Ê‘ Ì›”œ «·’œ«ﬁ…ø',
  '˛ﬂ   ÊÌ  | ‘Œ’ ·« —›÷ ·Â ÿ·»« ø',
  '˛ﬂ   ÊÌ  | ﬂ„ „—Â Œ”—  ‘Œ’  Õ»Âø.',
  '˛ﬂ   ÊÌ  | ﬂÌ›   ⁄«„· „⁄ «·«‘Œ«’ «·”·»ÌÌ‰ ø',
  '˛ﬂ   ÊÌ  | ﬂ·„…  ‘⁄— »«·ŒÃ· «–« ﬁÌ·  ·ﬂø',
  '˛ﬂ   ÊÌ  | Ã”„ﬂ «ﬂ»— „‰ ⁄Ò„—ﬂ «Ê «·⁄ﬂ”¯ ø!',
  '˛ﬂ   ÊÌ  |√ﬁÊÏ ﬂ–»… „‘  ⁄·Ìﬂ ø',
  '˛ﬂ   ÊÌ  |   √À— »œ„Ê⁄ ‘Œ’ Ì»ﬂÌ ﬁœ«„ﬂ ﬁ»·  ⁄—› «·”»» ø',
  'ﬂ   ÊÌ  | Â· ÕœÀ Ê÷ÕÌ  „‰ √Ã· ‘Œ’Ú √Õ»» ø',
  '˛ﬂ   ÊÌ  | √ﬂÀ—  ÿ»Ìﬁ  ” Œœ„Â „ƒŒ—«ø',
  '˛ﬂ   ÊÌ  | ˛«ﬂÀ— ‘Ì Ì—÷Ìﬂ «–« “⁄·  »œÊ‰  ›ﬂÌ— ø',
  '˛ﬂ   ÊÌ  | Ê‘ „Õ «Ã ⁄‘«‰  ﬂÊ‰ „»”Êÿ ø',
  '˛ﬂ   ÊÌ  | „ÿ·»ﬂ «·ÊÕÌœ «·ÕÌ‰ ø',
  '˛ﬂ   ÊÌ  | Â· ÕœÀ Ê‘⁄—  »√‰ﬂ «— ﬂ»  √Õœ «·–‰Ê» √À‰«¡ «·’Ì«„ø',
]

client.on('message', message => {
if (message.content.startsWith(prefix + "ﬂ   ÊÌ ")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('·⁄»Â ﬂ   ÊÌ ' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});

////////////////7kam

 const kingmas = [
    '*** „‰‘‰ «·Ã„Ì⁄ Êﬁ· «‰« «ﬂ—Âﬂ„. ***',
 '*** « ’· ⁄·Ï «„ﬂ Ê ﬁÊ· ·Â« «‰ﬂ  Õ»Â« :heart:. ***',
    '***      ’· ⁄·Ï «·Ê«·œÂ  Ê  ﬁÊ· ·Â«  «Õ» ÊÕœÂ.***',
    '***   ’· ⁄??Ï ‘—ÿÌ  ﬁÊ· ·Â ⁄‰œﬂ„ „ÿ«›Ì.***',
    '*** ’Ê— «Ì ‘Ì¡ Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰.***',
    '*** «ﬂ » ›Ì «·‘«  «Ì ‘Ì¡ Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰ ›Ì «·Œ«’. ***',
    '*** « ’· ⁄·Ï «Õœ „‰ «ŒÊÌ«ﬂ  ŒÊÌ« ﬂ , Ê «ÿ·» „‰Â„ „»·€ ⁄·Ï «”«” «‰ﬂ ’œ„  »”Ì«— ﬂ.***',
    '*** «⁄ÿÌ «Ì «Õœ Ã‰»ﬂ ﬂ› «–« „«›ÌÂ «Õœ Ã‰»ﬂ «⁄ÿÌ ‰›”ﬂ Ê ‰»Ì ‰”„⁄ ’Ê  «·ﬂ›.***',
    '***   —ÊÕ ⁄‰œ ‘Œ’  ﬁÊ· ·Â «Õ»ﬂ. ***',
    '***—ÊÕ ⁄‰œ «Ì «Õœ »«·Œ«’ Ê ﬁÊ· ·Â «‰ﬂ  Õ»Â Ê «·Œ.***',
    '*** «–Â» «·Ï Ê«Õœ „« ⁄—›Â Êﬁ· ·Â «‰« ﬂÌÊ  Ê«»Ì »Ê”Â. ***',
    '*** —ÊÕ «·Ï «Ì ﬁ—Ê» ⁄‰œﬂ ›Ì «·Ê« ” «» Ê «ﬂ » «Ì ‘Ì¡ Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰  «·Õœ «·«ﬁ’Ï 3 —”«∆·. ***',
    '*** «–« «‰  Ê·œ «ﬂ”— «€·Ï «Ê «Õ”‰ ⁄ÿÊ— ⁄‰œﬂ «–« «‰ Ì »‰  «ﬂ”—Ì «·—ÊÃ Õﬁﬂ «Ê «·„Ìﬂ «» Õﬁﬂ. ***',
    '*** –Ì «·„—… ·ﬂ ·«  ⁄ÌœÂ«.***',
    '*** «—„Ì ÃÊ«·ﬂ ⁄·Ï «·«—÷ »ﬁÊ… Ê «–« «‰ﬂ”— ’Ê— «·ÃÊ«· Ê «—”·Â ›Ì «·‘«  «·⁄«„.***',
    '*** « ’· ⁄·Ï «»Êﬂ Ê ﬁÊ· ·Â «‰ﬂ —Õ  „⁄ »‰  Ê «ÕÌ‰ ÂÌ Õ«„·..... ***',
    '***  ﬂ·„ »«··ÂÃ… «·”Êœ«‰Ì… «·Ì‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì….***',
    '***”Ê „‘Âœ  „ÀÌ·Ì ⁄‰ „’—Ì… » Ê·œ.***',
    '*** ﬁÊ· ‰ﬂ … «–« Ê ·«“„ «Õœ «·«⁄»Ì‰ Ì÷Õﬂ «–« „Õœ ÷Õﬂ Ì⁄ÿÊ‰ﬂ „ÌÊ  «·Ï «‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì…. ***',
    '*** ﬁÊ· ‰ﬂ … «–« Ê ·«“„ «Õœ «·«⁄»Ì‰ Ì÷Õﬂ «–« „Õœ ÷Õﬂ Ì⁄ÿÊ‰ﬂ „ÌÊ  «·Ï «‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì….***',
    '*** ”«„Õ ﬂ Œ·«’ „«›ÌÂ ⁄ﬁ«» ·ﬂ :slight_smile:. ***',
    '*** «–Â» «·Ï Ê«Õœ „« ⁄—›Â Êﬁ· ·Â «‰« ﬂÌÊ  Ê«»Ì »Ê”Â.***',
    '***   ’· ⁄·Ï «·Ê«·œÂ  Ê  ﬁÊ· ·Â« Œÿ›  ‘Œ’. ***',
    '*** —ÊÕ «ﬂ· „·Õ + ·Ì„Ê‰ «–« „«›ÌÂ «ﬂ· «Ì ‘Ì¡ „‰ «Œ Ì«— «·Ì „⁄ﬂ.  ***'
 ]
  client.on('message', message => {
  if (message.content.startsWith(prefix + 'Õﬂ„')) {
   var mariam= new Discord.RichEmbed()
   .setTitle("Games")
   .setColor('RANDOM')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });
///////////////////////////////////////////////////

////////////////////////////////////////3qab
var Za7f = [
  "**’Ê—… ÊÃÂﬂ «Ê —Ã·ﬂ «Ê Œ‘„ﬂ «Ê Ìœﬂ**.",
  "**«’œ— «Ì ’Ê  Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰**.",
  "**”ﬂ— Œ‘„ﬂ Ê ﬁÊ· ﬂ·„… „‰ «Œ Ì«— «·«⁄»Ì‰ «·Ì „⁄ﬂ**.",
  "**—ÊÕ «·Ï «Ì ﬁ—Ê» ⁄‰œﬂ ›Ì «·Ê« ” «» Ê «ﬂ » «Ì ‘Ì¡ Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰  «·Õœ «·«ﬁ’Ï 3 —”«∆·**.",
  "**ﬁÊ· ‰ﬂ … «–« Ê ·«“„ «Õœ «·«⁄»Ì‰ Ì÷Õﬂ «–« „Õœ ÷Õﬂ Ì⁄ÿÊ‰ﬂ „ÌÊ  «·Ï «‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì…**.",
  "**”„⁄‰« ’Ê ﬂ Ê €‰ «Ì «€‰Ì… „‰ «Œ Ì«— «·«⁄»Ì‰ «·Ì „⁄ﬂ**.",
  "**–Ì «·„—… ·ﬂ ·«  ⁄ÌœÂ«**.",
  "**«—„Ì ÃÊ«·ﬂ ⁄·Ï «·«—÷ »ﬁÊ… Ê «–« «‰ﬂ”— ’Ê— «·ÃÊ«· Ê «—”·Â ›Ì «·‘«  «·⁄«„**.",
  "**’Ê— «Ì ‘Ì¡ Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰**.",
  "**« ’· ⁄·Ï «»Êﬂ Ê ﬁÊ· ·Â «‰ﬂ —Õ  „⁄ »‰  Ê «ÕÌ‰ ÂÌ Õ«„·....**.",
  "**”ﬂ— Œ‘„ﬂ Ê ﬁÊ· ﬂ·„… „‰ «Œ Ì«— «·«⁄»Ì‰ «·Ì „⁄ﬂ**.",
  "**”Ê „‘Âœ  „ÀÌ·Ì ⁄‰ „’—Ì… » Ê·œ**.",
  "**«⁄ÿÌ «Ì «Õœ Ã‰»ﬂ ﬂ› «–« „«›ÌÂ «Õœ Ã‰»ﬂ «⁄ÿÌ ‰›”ﬂ Ê ‰»Ì ‰”„⁄ ’Ê  «·ﬂ›**.",
  "**–Ì «·„—… ·ﬂ ·«  ⁄ÌœÂ«**.",
  "** ⁄ÿÌ «Ì ‘Œ’ 5 «·«› ﬂ—œÌ **.",
  "**«—„Ì ÃÊ«·ﬂ ⁄·Ï «·«—÷ »ﬁÊ… Ê «–« «‰ﬂ”— ’Ê— «·ÃÊ«· Ê «—”·Â ›Ì «·‘«  «·⁄«„**.",
  "**—ÊÕ ⁄‰œ «Ì «Õœ »«·Œ«’ Ê ﬁÊ· ·Â «‰ﬂ  Õ»Â Ê «·Œ**.",
  "**«ﬂ » ›Ì «·‘«  «Ì ‘Ì¡ Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰ ›Ì «·Œ«’**.",
  "**ﬁÊ· ‰ﬂ … «–« Ê ·«“„ «Õœ «·«⁄»Ì‰ Ì÷Õﬂ «–« „Õœ ÷Õﬂ Ì⁄ÿÊ‰ﬂ „ÌÊ  «·Ï «‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì…**.",
  "**”«„Õ ﬂ Œ·«’ „«›ÌÂ ⁄ﬁ«» ·ﬂ :slight_smile:**.",
  "**« ’· ⁄·Ï «Õœ „‰ «ŒÊÌ«ﬂ  ŒÊÌ« ﬂ , Ê «ÿ·» „‰Â„ „»·€ ⁄·Ï «”«” «‰ﬂ ’œ„  »”Ì«— ﬂ**.",
  "**€Ì— «”„ﬂ «·Ï «”„ „‰ «Œ Ì«— «·«⁄»Ì‰ «·Ì „⁄ﬂ**.",
  "**« ’· ⁄·Ï «„ﬂ Ê ﬁÊ· ·Â« «‰ﬂ  Õ»Â« :heart:**.",
  "**·« ÌÊÃœ ”ƒ«· ·ﬂ ”«„Õ ﬂ :slight_smile:**.",
  "**ﬁ· ·Ê«Õœ „« ⁄—›Â ⁄ÿ‰Ì ﬂ›**.",
  "**„‰‘‰ «·Ã„Ì⁄ Êﬁ· «‰« «ﬂ—Âﬂ„**.",
  "**« ’· ·«ŒÊﬂ Ê ﬁÊ· ·Â «‰ﬂ ”ÊÌ  Õ«œÀ Ê «·Œ....**.",
  "**—ÊÕ «·„ÿ»Œ Ê «ﬂ”— ’Õ‰ «Ê ﬂÊ»**.",
  "**«⁄ÿÌ «Ì «Õœ Ã‰»ﬂ ﬂ› «–« „«›ÌÂ «Õœ Ã‰»ﬂ «⁄ÿÌ ‰›”ﬂ Ê ‰»Ì ‰”„⁄ ’Ê  «·ﬂ›**.",
  "**ﬁÊ· ·«Ì »‰  „ÊÃÊœ ›Ì «·—Ê„ ﬂ·„… Õ·ÊÂ**.",
  "** ﬂ·„ »«··€… «·«‰Ã·Ì“Ì… «·Ì‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì… ·«“„   ﬂ·„ «–« „«  ﬂ·„   ‰›– ⁄ﬁ«» À«‰Ì**.",
  "**·«   ﬂ·„ Ê·« ﬂ·„… «·Ì‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì… Ê «–«  ﬂ·„  ÌÃÌﬂ »«‰œ ·„œ… ÌÊ„ ﬂ«„· „‰ «·”??—›—**.",
  "**ﬁÊ· ﬁ’Ìœ… **.",
  "** ﬂ·„ »«··ÂÃ… «·”Êœ«‰Ì… «·Ì‰ ÌÃÌ œÊ—ﬂ „—… À«‰Ì…**.",
  "**« ’· ⁄·Ï «Õœ „‰ «ŒÊÌ«ﬂ  ŒÊÌ« ﬂ , Ê «ÿ·» „‰Â„ „»·€ ⁄·Ï «”«” «‰ﬂ ’œ„  »”Ì«— ﬂ**.",
  "**«Ê· Ê«Õœ  ‘Ê›Â ⁄ÿÂ ﬂ›**.",
  "**”Ê „‘Âœ  „ÀÌ·Ì ⁄‰ «Ì ‘Ì¡ Ìÿ·»Â „‰ﬂ «·«⁄»Ì‰**.",
  "**”«„Õ ﬂ Œ·«’ „«›ÌÂ ⁄ﬁ«» ·ﬂ :slight_smile:**.",
  "**« ’· ⁄·Ï «»Êﬂ Ê ﬁÊ· ·Â «‰ﬂ —Õ  „⁄ »‰  Ê «ÕÌ‰ ÂÌ Õ«„·....**.",
  "**—ÊÕ «ﬂ· „·Õ + ·Ì„Ê‰ «–« „«›ÌÂ «ﬂ· «Ì ‘Ì¡ „‰ «Œ Ì«— «·Ì „⁄ﬂ**.",
  "** «Œ– ⁄ﬁ«»Ì‰**.",
  "**ﬁÊ· «”„ «„ﬂ «› Œ— »√”„ «„ﬂ**.",
  "**«—„Ì «Ì ‘Ì¡ ﬁœ«„ﬂ ⁄·Ï «Ì «Õœ „ÊÃÊœ «Ê ⁄·Ï ‰›”ﬂ**.",
  "**«–« «‰  Ê·œ «ﬂ”— «€·Ï «Ê «Õ”‰ ⁄ÿÊ— ⁄‰œﬂ «–« «‰ Ì »‰  «ﬂ”—Ì «·—ÊÃ Õﬁﬂ «Ê «·„Ìﬂ «» Õﬁﬂ**.",
  "**«–Â» «·Ï Ê«Õœ „« ⁄—›Â Êﬁ· ·Â «‰« ﬂÌÊ  Ê«»Ì »Ê”Â**.",
  "**  ’· ⁄·Ï «·Ê«·œÂ  Ê  ﬁÊ· ·Â« Œÿ›  ‘Œ’**.",
  "**   ’· ⁄·Ï «·Ê«·œÂ  Ê  ﬁÊ· ·Â«  “ÊÃ  »« ”—**.",
  "**???? ’· ⁄·Ï «·Ê«·œÂ  Ê  ﬁÊ· ·Â«  «Õ» ÊÕœÂ**.",
    "**  ’· ⁄·Ï ‘—ÿÌ  ﬁÊ· ·Â ⁄‰œﬂ„ „ÿ«›Ì**.",
    "**Œ·«’ ”«„Õ ﬂ**.",
    "**  ’ÌÕ ›Ì «·‘«—⁄ «‰«  „Ã‰ÊÊ‰**.",
    "**  —ÊÕ ⁄‰œ ‘Œ’  ﬁÊ· ·Â «Õ»ﬂ**.",

];

client.on('message', message => {
 if (message.content.startsWith("!⁄ﬁ«»")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('GAMING BOT' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});
///////////////////
////////////////////////////////////////-/////////////////////////////////////////Rps
client.on("message", function(message) {
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});
//////////////////////--------------------/quas
client.on('message', message => {
    if (message.content == "!quas") {
         message.react('??','??')
        var x = ['«Ì‰ Ì·⁄» „’ÿ›Ì › ÕÌø', '„« ÂÊ «”„ „·⁄» »«—‘«·Ê‰…', '„« ÂÊ ÌÊ„ «·ÕÃ «·√ﬂ»—ø', '„« ÂÊ √ÿÊ· √‰Â«— √Ê—»« ø', '„« ÂÊ «”„ »Ì  «·œÃ«Ã', '„« ÂÊ √Ê· »‰ﬂ ﬁ«„ »«·‰‘«ÿ «·„’—›Ì ›Ì «·”⁄ÊœÌ… ⁄«„ 1926„' , '„« ÂÊ √Ê· Ã«„⁄ √ﬁÌ„ ›Ì „’—','„« ÂÊ √ÿÊ· ‰Â— ›Ì ¬”Ì«','„« ÂÊ √ﬁ—» ﬂÊﬂ» ≈·Ï «·‘„”','„« ÂÊ «·ÕÌÊ«‰ «·–Ì Ìı”„Ï «·»Â‰”','„« ÂÊ «Ê· „”Ãœ √”” »«·„œÌ‰…','„ Ï Êﬁ⁄ ’·Õ «·ÕœÌ»Ì… ⁄«„ 6Â‹ «Ê 3Â‹ «Ê 2Â‹ø','„ Ï ﬁ«„  √„—Ìﬂ« »√Ê· —Õ·… ›÷«∆Ì…','„ Ï ﬂ«‰  €“Ê… ŒÌ»—ø','„« ÂÌ «·”Ê—… «· Ì  »œ√ »ﬁÊ·Â  ⁄«·Ï " Ì« √ÌÂ« «·‰»Ì « ﬁ «··Â Ê·«  ÿ⁄ «·ﬂ«›—Ì‰ Ê«·„‰«›ﬁÌ‰ ≈‰ «··Â ﬂ«‰ ⁄·Ì„« ÕﬂÌ„« ".«Ã»ø','„« ÂÌ «·”Ê—… «· Ì Ìÿ·ﬁ ⁄·ÌÂ« ⁄—Ê” «·ﬁ—¬‰','„«–« Ì”„Ï „‰ ·«Ìﬁ—√ Ê·«Ìﬂ »','„«ÂÌ √Ê· œÊ·… «” Œœ„  ÿ«»⁄ «·»—Ìœ','„«ÂÊ ‘⁄«— «·Ê·«Ì«  «·„ Õœ… «·«„—ÌﬂÌ…','„«ÂÊ «–ﬂÌ «·ÕÌÊ«‰« ','„‰ ÂÊ „ﬂ ‘› √„—Ìﬂ«','„«„⁄‰Ï "›—⁄Ê‰" «Ã»ø','„«ÂÊ «ﬁ—» ﬂÊﬂ» ≈·Ï «·«—÷','„« ÂÌ ‰”»Â «·„Ì«Â „‰ «·ﬂ—Â «·«—÷ÌÂ?','ﬂ„ ⁄œœ «·”Ãœ«  ›Ì «·ﬁ—¬‰ «·ﬂ—Ì„ø','„‰ ÂÊ »ÿ· ﬂ«” «·⁄«·„ ›Ì ⁄«„ 1966','√Ì‰ √›  Õ «Ê· „ Õ› ›Ì «·⁄«·„?','„«√”„ √‰ÀÏ «·Õ„«—?','ﬂ„  »·€ œ—ÃÂ Õ—«—Â «·‘„”ø','„‰ ÂÌ „œÌ‰… «·÷»«»','√Ì‰  ÊÃœ √ÿÊ· ”ﬂ… ÕœÌœ ›Ì «·⁄«·„?'
        ];
        var x2 = ['«· ⁄«Ê‰', 'ﬂ«„» ‰Ê', 'ÌÊ„ «·‰Õ—', '«·œ«‰Ê»', 'ﬁ‰', '«·»‰ﬂ «·ÂÊ·‰œÌ', 'Ã«„⁄ ⁄„—Ê »‰ «·⁄«’','«·Ì«‰Ã” Ì','⁄ÿ«—œ','«·«”œ','„”Ãœ ﬁ»«¡','6','”‰… 1962','⁄«„ 7Â‹','«·«Õ“«»','”Ê—… «·—Õ„‰','«„Ì','»—Ìÿ«‰Ì«','«·‰”— «·«’·⁄','«·œ·›Ì‰','ﬂÊ·„»”','«·»Ì  «·ﬂ»Ì—','«·“Â—Â','71%','15 ”Ãœ…','«‰ﬂ· —« ','«·ﬁ«Â—…','«·« «‰','15 „·ÌÊ‰ œ—ÃÂ „∆ÊÌ…','·‰œ‰','ﬂ‰œ«'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`?? «„«„ﬂ œﬁÌﬁ… ·Õ· «·«”∆·… , «·”ƒ«· ÌﬁÊ· :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ·ﬁœ «‰ ÂÏ «·Êﬁ  Ê·„ Ìﬁ„ √Õœ »«·√Ã«»… »‘ﬂ· ’ÕÌÕ `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} ·ﬁœ ﬁ„  »ﬂ «»… «·ÃÊ«» «·’ÕÌÕ  `);
            message.react('?')
        })
        })
    }
});
//////////fkk
client.on('message', message => { 
	var prefix ="!";
           if (message.content.startsWith(prefix + "user")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(':part_alternation_mark: J??? I? Disc?rd Sinc?', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(':trident: J??? I? SËrvËr Sinc?', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`GAMING bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });
/////////////////////////////////////hal t3lam/

client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'Â·  ⁄·„')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
//Franko
client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'halt3lam')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
////////////Profile
client.on('message', message => {
    if(message.content == ('!PRofile')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['ID1.png','ID2.png','ID3,png','ID4.png','ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//„« Œ’ﬂ ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('en-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'Online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "No playing" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });



/////////////-------------------------------/////«„À«·


client.on('message', message => {
    if (message.content == "!«„À«·") {
        var x = ["woooow",
"«·≈ Õ«œ ...",
"«·‰«” ”Ê«”Ì… ﬂ√”‰«‰ ...",
"„« √‘»Â «··Ì·Â",
"«·»⁄œ ...",
"«·„«¡ √ÂÊ‰ „ÊÃÊœ Ê√⁄“ ...",
"«·Â“Ì„…  Õ· ...",
"«·⁄ﬁ· ...",
"«·»ÿ‰…  “Ì· ...",
"«··»Ì» »«·≈‘«—… ...",
"«Œÿ» ·«»‰ ﬂ Ê·«  Œÿ» ...",
"√⁄“ „‰ «·Ê·œ Ê·œ ...",
"«·ﬁ—œ ›Ì ⁄Ì‰ √„Â ...",
"«·ﬂ «» Ìﬁ—√ „‰ ...",
"¬Œ— «·ÕÌ«… ...",
"√ﬂ—„ ‰›”ﬂ ⁄‰ ﬂ·",
"«·⁄“ ›Ì ‰Ê«’Ì",
];
        var x2 = ['–·Ì·',
        "ﬁÊ…",
        "«·„‘ÿ",
        "»«·»«—Õ…",
        "Ã›«¡",
        "„›ﬁÊœ",
        "«·⁄“Ì„…",
        "“Ì‰…",
        "«·›ÿ‰…",
        "Ì›Â„",
        "·«»‰ﬂ",
        "«·Ê·œ",
        "€“«·",
        "⁄‰Ê«‰Â",
        "«·„Ê ",
        "œ‰Ì¡",
        "«·ŒÌ·",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` «ﬂ„· «·„À· «· ¬·Ì :  __**${x[x3]}**__ ø
    ·œÌﬂ 30 À¬‰Ì… ··≈Ã¬»… `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ·ﬁœ «‰ ÂÏ «·Êﬁ  Ê·„ Ìﬁ„ √Õœ »«·√Ã«»… »‘ﬂ· ’ÕÌÕ 
            «·≈Ã¬»… «·’ÕÌÕ…… ÂÌ __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} ·ﬁœ ﬁ„  »ﬂ «»… «·ÃÊ«» «·’ÕÌÕ »«·Êﬁ  «·„‰«”»  `);
        })
        })
    }
})

////////////////////////////////////Tkyem


client.on('message', message => {
			 if(message.content.startsWith(prefix + ' ﬁÌ„')) {
         	let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Tag someone to rate them!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10<:thonk:427846193503272960>`);
} else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 <:thonk:427846193503272960>`);
 }
});
///Franko
client.on('message', message => {
			 if(message.content.startsWith(prefix + 'takyem')) {
         	let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Tag someone to rate them!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10<:thonk:427846193503272960>`);
} else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 <:thonk:427846193503272960>`);
 }
});
///////--------------------------------------

///////------------------------------------------------------------------------------/////top inv

//////////////////////////

module.exports.run = async (bot, message, args) => {

    //!addrole @andrew Dog Person
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("? Sorry pal, you can't do that.");
    if (args[0] == "help") {
        message.reply("Usage: !addrole <user> <role>");
        return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (rMember.roles.has(gRole.id)) return message.reply("? They already have that role.");
    await (rMember.addRole(gRole.id));

    try {
        await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
    } catch (e) {
        console.log(e.stack);
        message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
    }
}

module.exports.help = {
    name: "addrole"
}

// Remove Role


module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Imi pare r?u, nu po?i face asta.");
    if (args[0] == "help") {
        message.reply("Foloseste: !removerole <user> <role>");
        return;
    }
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Nu am putut g?si acel utilizator");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Specifica?i un rol");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Nu am g?sit acest rol.");

    if (!rMember.roles.has(gRole.id)) return message.reply("Ei nu au acel rol.");
    await (rMember.removeRole(gRole.id));

    try {
        await rMember.send(`Ai piedut gradul ${gRole.name}`)
    } catch (e) {
        message.channel.send(`RIP to <@${rMember.id}>, Ai fost ${gRole.name} de la ei. Am Óncercat s? le d?m, dar DM-urile lor sunt blocate.`)
    }
}

module.exports.help = {
    name: "removerole"
}
/////////////////////////////
client.on('message', message => {
    var prefix = "!"
     let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
 
 if(command == "«„—  «·—”„") {
     var Canvas = require('canvas')
   , Image = new Canvas.Image
   , canvas = new Canvas(450, 170)
   , ctx = canvas.getContext('2d');
   ctx.font = '30px Impact';
   let args = message.content.split(" ").slice(1);
   
 Image.src = canvas.toBuffer();
 
     console.log(Image);
 ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
 ctx.fillText(args.join("  "),110, 70);
 
 
 ctx.beginPath();
 ctx.lineTo(50, 102);
 ctx.stroke();
 
 message.channel.sendFile(canvas.toBuffer());
 }
 
 });

////////////////
client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "setdate")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **«·»Ê  ·« Ì„ ·ﬂ ’·«ÕÌ…**');
  msg.guild.createChannel(`date :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`?? - Date?${Year} - ${Month} - ${Dat}?`);
 },1000);
  });
  }
 
});


client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "settime")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **«·»Ê  ·« Ì„ ·ﬂ ’·«ÕÌ…**');
  msg.guild.createChannel(`Time :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds()
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
      time.setName(`?? - Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
 },1000);
  });
  }
 
});




 
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
 
 
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Super"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })

//////////////////////azkar
const adkar = [
    '**«–ﬂ«—  | **«··¯ÛÂı„¯Û «ﬂ˙›ˆ‰ˆÌ »ˆÕÛ·Û«·ˆﬂÛ ⁄Û‰˙ ÕÛ—Û«„ˆﬂÛ ÊÛ√Û€˙‰ˆ‰ˆÌ »ˆ›Û÷˙·ˆﬂÛ ⁄Û„¯Û‰˙ ”ˆÊÛ«ﬂÛ.',
    '**«–ﬂ«—  |  **«··¯ÛÂı„¯Û ≈ˆ‰¯ˆÌ √Û”˙√Û·ıﬂÛ «·˙ÂıœÛÏ ÊÛ«· ¯ıﬁÛÏ ÊÛ«·˙⁄Û›Û«›Û ÊÛ«·˙€ˆ‰ÛÏ. ',
    '**«–ﬂ«—  ˛|  **«··¯ÛÂı„¯Û «€˙›ˆ—˙ ·ˆÌ –Û‰˙»ˆÌ ﬂı·¯ÛÂı° œˆﬁ¯ÛÂı° ÊÛÃˆ·¯ÛÂı° ÊÛ√ÛÊ¯Û·ÛÂı° ÊÛ¬Œˆ—ÛÂı° ÊÛ⁄Û·Û«‰ˆÌÛ ÛÂı° ÊÛ”ˆ—¯ÛÂı. ',
    '**˛«–ﬂ«—  |  **√” €›— «··Â .',     
    '**˛«–ﬂ«—  | **«·˙·Û¯Âı √Ûﬂ˙»Û—ı',
    '**˛«–ﬂ«—  |  **·Û« ≈ˆ·ÛÂÛ ≈ˆ·¯Û« «··¯ÛÂı',
    '**«–ﬂ«—  |  **«··¯ÛÂı„¯Û ’Û·¯ˆ ⁄Û·ÛÏ „ıÕÛ„¯ÛœÚ ÊÛ⁄Û·ÛÏ ¬·ˆ „ıÕÛ„¯ÛœÚ ﬂÛ„Û« ’Û·¯ÛÌ˙ Û ⁄Û·ÛÏ ≈ˆ»˙—Û«ÂˆÌ„Û , ÊÛ⁄Û·ÛÏ ¬·ˆ ≈ˆ»˙—Û«ÂˆÌ„Û ≈ˆ‰¯ÛﬂÛ ÕÛ„ˆÌœÒ „ÛÃˆÌœÒ , «··¯ÛÂı„¯Û »Û«—ˆﬂ˙ ⁄Û·ÛÏ „ıÕÛ„¯ÛœÚ ÊÛ⁄Û·ÛÏ ¬·ˆ „ıÕÛ„¯ÛœÚ ﬂÛ„Û« »Û«—Ûﬂ˙ Û ⁄Û·ÛÏ ≈ˆ»˙—Û«ÂˆÌ„Û ÊÛ⁄Û·ÛÏ ¬·ˆ ≈ˆ»˙—Û«ÂˆÌ„Û ≈ˆ‰¯ÛﬂÛ ÕÛ„ˆÌœÒ „ÛÃˆÌœÒ.',
    '**«–ﬂ«—  |  **”ı»˙ÕÛ«‰Û «·˙·Û¯Âˆ° ÊÛ«·˙ÕÛ„˙œı ·ˆ·Û¯Âˆ° ÊÛ·Û« ≈ˆ·ÛÂÛ ≈ˆ·Û¯« «·˙·Û¯Âı° ÊÛ«·˙·Û¯Âı √Ûﬂ˙»Û—ı',
    '**«–ﬂ«—  | **·Û« ≈·ÛÂ ≈·¯« «··Âı ÊÛÕ˙œÛÂı ·Û« ‘Û—ˆÌﬂÛ ·ÛÂı° ·ÛÂı «·˙„ı·˙ﬂı ÊÛ·ÛÂı «·˙ÕÛ„˙œı ÊÛÂıÊÛ ⁄Û·ÛÏ ﬂı·¯ı ‘ÛÌ˙¡ˆ ﬁÛœˆÌ—ˆ.',
    '**«–ﬂ«—  | **√”˙ Û€˙›ˆ—ı «··ÂÛ ÊÛ√ ıÊ»ı ≈·ÛÌ˙Âˆ',
    '**˛«–ﬂ«—  | **”ı»˙Õ‹«‰Û «··Âˆ ÊÛ»ˆÕÛ„˙‹œˆÂˆ. ',
    '˛**«–ﬂ«—**|  ·Û« ≈·ÛÂ ≈·¯« «··Âı ÊÛÕ˙œÛÂı ·Û« ‘Û—ˆÌﬂÛ ·ÛÂı° ·ÛÂı «·˙„ı·˙ﬂı ÊÛ·ÛÂı «·˙ÕÛ„˙œı ÊÛÂıÊÛ ⁄Û·ÛÏ ﬂı·¯ˆ ‘ÛÌ˙¡ˆ ﬁÛœˆÌ—ˆ.',
    '**«–ﬂ«—  ˛|   **«··¯ÛÂı„¯Û ≈ˆ‰¯ˆÌ √Û”˙√Û·ıﬂÛ ⁄ˆ·˙„« ‰Û«›ˆ⁄«° ÊÛ—ˆ“˙ﬁ« ÿÛÌ¯ˆ»«° ÊÛ⁄Û„Û·« „ı ÛﬁÛ»¯Û·«.',
    '**«–ﬂ«—  | ˛ **ÌÛ« —Û»¯ˆ , ·ÛﬂÛ «·˙ÕÛ„˙œı ﬂÛ„Û« ÌÛ‰˙»Û€ˆÌ ·ˆÃÛ·Û«·ˆ ÊÛÃ˙ÂˆﬂÛ , ÊÛ·ˆ⁄ÛŸˆÌ„ˆ ”ı·˙ÿÛ«‰ˆﬂÛ.',
    '«–ﬂ«—    |  **√”˙ Û€˙›ˆ—ı «··ÂÛ «·⁄ÛŸˆÌ„Û «·¯Û–ˆÌ ·«Û ≈·ÛÂÛ ≈·«¯Û ÂıÊÛ° «·ÕÛÌ¯ı «·ﬁÛÌ¯ıÊ„ı° ÊÛ√ ıÊ»ı ≈·ÛÌÂˆ.**',
    '**˛«–ﬂ«—  |  **«··¯ÛÂı„¯Û ≈ˆ‰¯Û« ‰Û⁄ıÊ–ı »ˆﬂÛ „ˆ‰˙ √Û‰˙ ‰ı‘˙—ˆﬂÛ »ˆﬂÛ ‘ÛÌ˙∆« ‰Û⁄˙·Û„ıÂı ° ÊÛ‰Û”˙ Û€˙›ˆ—ıﬂÛ ·ˆ„Û« ·Û« ‰Û⁄˙·Û„ıÂı.',
    '**˛«–ﬂ«—  |  **«··Û¯Âı„Û¯ ’Û·ˆ¯ ÊÛ”Û·ˆ¯„˙ ÊÛ»Û«—ˆﬂ˙ ⁄·Ï ‰Û»ˆÌˆ¯‰Û« „ıÕ„Û¯œ. ',
    '**˛«–ﬂ«—  |  **√Û⁄‹Ê–ı »ˆﬂÛ·ˆ„‹« ˆ «··¯Âˆ «· ¯‹«„¯‹« ˆ „ˆ‰˙ ‘Û‹—ˆ¯ „« ŒÛ·Û‹ﬁ.',
    '**«–ﬂ«—  |  **ÌÛ« ÕÛÌı¯ ÌÛ« ﬁÌı¯Ê„ı »ˆ—ÛÕ˙„Û ˆﬂÛ √”˙ Û€ˆÌÀı √’˙·ˆÕ˙ ·ˆÌ ‘Û√‰ˆÌ ﬂı·Û¯Âı ÊÛ·«Û  Ûﬂˆ·˙‰ˆÌ ≈·ÛÏ ‰Û›˙”ˆÌ ÿÛ‹—˙›Û…Û ⁄ÛÌ˙‰Ú. ',
    '**«–ﬂ«—  |  **«··¯Âı‹„¯Û ≈ˆ‰¯‹Ì √Û⁄‹Ê–ı »ˆﬂÛ „ˆ‰Û «·˙ﬂı‹›— ° ÊÛ«·›Û‹ﬁ˙— ° ÊÛ√Û⁄‹Ê–ı »ˆﬂÛ „ˆ‰˙ ⁄Û–«»ˆ «·ﬁÛ‹»˙— ° ·« ≈·ÂÛ ≈·«¯ √Û‰˙‹ Û.',
    '**˛«–ﬂ«—  |  **«··¯Âı‹„¯Û ⁄«›ˆ‹‰Ì ›Ì »ÛœÛ‰‹Ì ° «··¯Âı‹„¯Û ⁄«›ˆ‹‰Ì ›Ì ”Û„˙‹⁄Ì ° «··¯Âı‹„¯Û ⁄«›ˆ‹‰Ì ›Ì »Û’Û‹—Ì ° ·« ≈·ÂÛ ≈·«¯ √Û‰˙‹ Û.',
    '**˛«–ﬂ«—  |  **”ı»˙Õ‹«‰Û «··Âˆ ÊÛ»ˆÕÛ„˙‹œˆÂˆ ⁄ÛœÛœÛ ŒÛ·˙‹ﬁˆÂ ° ÊÛ—ˆ÷‹« ‰Û›˙”ˆ‹Â ° ÊÛ“ˆ‰Û‹…Û ⁄Û‹—˙‘ˆ‹Â ° ÊÛ„ˆ‹œ«œÛ ﬂÛ·ˆ„‹« ˆ‹Â. ',
    '**˛«–ﬂ«—  |  **«··¯Âı‹„¯Û »ˆﬂÛ √Û’˙‹»ÛÕ˙‰« ÊÛ»ˆﬂÛ √Û„˙”Û‹Ì‰« ° ÊÛ»ˆﬂÛ ‰ÛÕ˙‹Ì« ÊÛ»ˆﬂÛ ‰Û„ı‹Ê ı ÊÛ≈ˆ·Û‹Ì˙ﬂÛ «·‰¯ı‹‘ıÊ—.',
    '**˛«–ﬂ«—  |  **»ˆ”‹„ˆ «··Âˆ «·–Ì ·« ÌÛ÷ı‹—¯ı „Û⁄Û «”„ˆ‹Âˆ ‘ÛÌ¡Ò ›Ì «·√—˙÷ˆ ÊÛ·« ›Ì «·”¯„‹«¡ˆ ÊÛÂ‹ÊÛ «·”¯„‹Ì⁄ı «·⁄Û·‹Ì„. ',
    '**˛«–ﬂ«—  |  **ÕÛ”˙»ˆ‹ÌÛ «··¯Âı ·« ≈·ÂÛ ≈·«¯ ÂıÊÛ ⁄Û·Û‹ÌÂˆ  ÛÊÛﬂ¯Û‹· ı ÊÛÂıÊÛ —Û»¯ı «·⁄Û—˙‘ˆ «·⁄ÛŸ‹Ì„.',
    '**«–ﬂ«—  |  **«··¯Âı‹„¯Û „« √Û’˙»Û‹ÛÕÛ »Ì „ˆ‹‰˙ ‰ˆ⁄˙‹„Û…Ú √ÛÊ »ˆ√ÛÕÛ‹œÚ „ˆ‹‰˙ ŒÛ·˙‹ﬁˆﬂ ° ›Û„ˆ‹‰˙ﬂÛ ÊÛÕ˙‹œÛﬂÛ ·« ‘—ÌﬂÛ ·Û‹ﬂ ° ›Û·Û‹ﬂÛ «·˙ÕÛ„˙‹œı ÊÛ·Û‹ﬂÛ «·‘¯ıﬂ˙‹—.',
    '**˛«–ﬂ«—  |  **«··¯Âı‹„¯Û ≈ˆ‰ˆ¯‹Ì √Û’˙»Û‹Õ˙ ı √ı‘˙‹Âˆœıﬂ ° ÊÛ√ı‘˙‹Âˆœı ÕÛ„Û·Û‹…Û ⁄Û‹—˙‘ˆ‹ﬂ ° ÊÛ„Û·Û«∆ˆﬂÛ ÛﬂÛ ° ÊÛÃÛ„‹Ì⁄Û ŒÛ·˙‹ﬁˆﬂ ° √Û‰¯Û‹ﬂÛ √Û‰˙‹ Û «··Âı ·« ≈·ÂÛ ≈·«¯ √Û‰˙‹ Û ÊÛÕ˙‹œÛﬂÛ ·« ‘Û—ÌﬂÛ ·Û‹ﬂ ° ÊÛ√Û‰¯Û ı „ıÕÛ„¯‹œ« ⁄Û»˙‹œıﬂÛ ÊÛ—Û”‹Ê·ı‹ﬂ',
    '**˛«–ﬂ«—  |  **—Û÷Ì‹ ı »ˆ«··Âˆ —Û»¯Û‹« ÊÛ»ˆ«·≈”˙·«„ˆ œÌ‹‰« ÊÛ»ˆ„ıÕÛ‹„¯ÛœÚ ’·Ï ??··Â ⁄·ÌÂ Ê”·„ ‰Û»ˆÌ¯‹«',
    '**˛«–ﬂ«—  |  **«··Â„ ≈‰Ì √⁄Ê– »ﬂ „‰ «·⁄Ã“° Ê«·ﬂ”·° Ê«·Ã»‰° Ê«·»Œ·° Ê«·Â—„° Ê⁄–«» «·ﬁ»—° «··Â„ ¬  ‰›”Ì  ﬁÊ«Â«° Ê“ﬂÂ« √‰  ŒÌ— „‰ “ﬂ«Â«. √‰  Ê·ÌÂ« Ê„Ê·«Â«. «··Â„ ≈‰Ì √⁄Ê– »ﬂ „‰ ⁄·„ ·« Ì‰›⁄° Ê„‰ ﬁ·» ·« ÌŒ‘⁄° Ê„‰ ‰›” ·«  ‘»⁄° Ê„‰ œ⁄Ê… ·« Ì” Ã«» ·Â«',
    '**˛«–ﬂ«—  |  **«··Â„ ≈‰Ì √⁄Ê– »ﬂ „‰ ‘— „« ⁄„· ° Ê„‰ ‘— „« ·„ √⁄„·',
    '**˛«–ﬂ«—  |  **«··Â„ „’—› «·ﬁ·Ê» ’—› ﬁ·Ê»‰« ⁄·Ï ÿ«⁄ ﬂ',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + '«–ﬂ«—')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("Games")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
/////////////////////////////////////////////-////////////////////////////////////nokat
client.on('message', message => {
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + '‰ﬂ ')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
//////////contact
client.on('message' , message => {
var prefix = "!"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("399697177259147275").send(
    "\n" + "**" + "? «·”Ì—›— :" + "**" +
    "\n" + "**" + "ª " + message.guild.name + "**" +
    "\n" + "**" + " ? «·„—”· : " + "**" +
    "\n" + "**" + "ª " + message.author.tag + "**" +
    "\n" + "**" + " ? «·—”«·… : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail:  „ «—”«· «·—”«·… «·Ï ’«Õ» «·»Ê  »‰Ã«Õ')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : ImD3s_x")
                                                

message.channel.send(embed);


}
    
});
/////////////////Aktr7at 
client.on('message', async message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
 let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.startsWith(prefix + "sug")) {
  await  message.channel.send(`?? **| «ﬂ » «ﬁ —«Õﬂ **`)
    message.delete(10000);
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content
              message.channel.send(`? **|  „ Õ›Ÿ «ﬁ —«Õﬂ **`)
    message.delete(10000);
            let embed = new Discord.RichEmbed()

       .setColor('RANDOM')
       .setThumbnail('https://images-ext-2.discordapp.net/external/cfiQPI-jiFWEr1dTyHZeT4l5ZSegPifQZSSOYusKSyo/https/cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/letter-256.png')
       .setTitle('')
       .addField('**ª Guild :**', message.guild.name)
       .addField('**ª «·„—”· :**', message.author.username)
       .addField('**ª «ﬁ —«ÕÌ :**', text)
       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)

              client.channels.find('name', 'suggestions').send({embed})
       .setFooter(message.author.username, message.author.avatarURL)
   message.channel.sendMessage({embed});
              })
            }
          })

/////////////////////////////


/////////////////////////
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Õÿ —ﬁ„ „⁄Ì‰ Ì „ «·”Õ» „‰Â**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
//////////////
var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + '·Ê ŒÌ—Êﬂ')) {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});
 /////////wlc 



/////////////
const zead = [
   '*** «‰« «”„Ì „—Ì„ ***',
   '*** „—Õ»«Û „«ÂÊ «”„ﬂ ø ***',
   `*** «Â·« »ﬂ ! «‰«  «∆ÂÂ ›Ì Â–« «·„ﬂ«‰  ***`,
   '*** Â·  Êœ „”«⁄œ Ì ø ***',
   '*** ·„«–« Â· «‰  ﬁ«”Ì «·ﬁ·» ø ***',
   '*** «‰‰Ì «‘›ﬁ ⁄·Ìﬂ ÌÃ» «‰  ÿÂ— —ÊÕﬂ Ê Õ» «·ŒÌ— ··Ã„Ì⁄ ***',
   '*** «» ⁄œ ⁄‰Ì ﬁ·Ì· «‰‰Ì „ ⁄»… ***',
	 '*** Â· «‰  ‰«œ„ ⁄·Ï „«ﬁ·  ø ***',
   '*** Â·  Êœ „”«⁄œ Ì ø ***',
   '*** Ê«Ê «‘ﬂ—ﬂ «‰ﬂ ‘Œ’«Û —«∆⁄ ! ***',
   '*** «»ÕÀ „⁄Ì ⁄‰ „‰“·Ì ·ﬁœ ﬂ«‰ ﬁ—Ì»«Û „‰ Â‰« ***',
   '*** Ê·«ﬂ‰ ⁄‰œ„« Õ· «··Ì· ·„ «⁄œ «—Ï «Ì ‘Ì¡ ***',
   '*** „–«  Ÿ‰ «Ì‰ ÌÊÃœ ø Ì„Ì‰ «Ê Ì”«— ***',
   '*** ÂÌ« «–«Û ***',
   '*** «Êœ «‰ «”∆·ﬂ ”ƒ«· Ê‰Õ‰ ›Ì «·ÿ—Ìﬁ ***',
   '*** Â·  —«‰Ì › «… ·ÿÌ›… «„ „ŒÌ›… ***',
   '*** «‘ﬂ—ﬂ !  ***',
   '*** ·ﬁœ Ê’·‰« «·Ï «·„‰“· ‘ﬂ—«Û Ã“Ì·Û «‰ ÿ—‰Ì ÀÊ«‰Ì Ê”Ê› «⁄Êœ ***',
   '*** Â· «‰  Ã«Â“ ø ***',
   '*** ·ﬁœ «Œ»—  Ê«·œÌ ⁄‰ﬂ ÊÂ„ „ Õ„”Ì‰ ·—ƒÌ ﬂ ***',
   '*** Â·  Êœ «‰  —«Â„ «·«‰ ***',
'*** «‰« ·”  «·ÕÊ  «·«“—ﬁ ﬂ„« Ìœ⁄Ê‰ ***',
   '*** «‰« ·”  ﬂ«–»… ’œﬁ‰Ì***',
   '*** ·„«–« «—Ï ›Ì ⁄Ì‰Ìﬂ «·ŒÊ› ø ***',
   '*** «‰« „Ã—œ › «… ·ÿÌ›…  Õ» «··⁄» „⁄ «·Ã„Ì⁄ ***',
   '*** «⁄—› ﬂ· ‘Ì¡ ÌÕœÀ «”„⁄ –«·ﬂ »«·—«œÌÊ ***',
   '*** ”„⁄  «‰ «·»‘— Ìﬁ ·Ê‰ „‰ «Ã· «·„«· ›ﬁÿ ***',
   '*** ·„«–« ·„  œŒ· «·€—›… ø ***',
   '*** ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂ «‰  «·«‰ „”ÃÊ‰ ›Ì Â–Â «·€—›… ***',
   '*** ·‰  Œ—Ã Õ Ï «⁄Êœ ·ﬂ »⁄œ ﬁ·Ì· ***',
   '*** «·„› «Õ „⁄ﬂ ! «ﬂ » .„—Ì„  ***',
   '*** „› «Õ «Õ„— , Â· Õ’·  ⁄·ÌÂ ø ***',
   '*** «‰ ·„  Õ’· ⁄·ÌÂ , «ﬂ » .„—Ì„ „—… «Œ—Ï ***',
   '*** „› «Õ «”Êœ . Â· Õ’·  ⁄·ÌÂ ø ***',
   '*** «Ì‰  —Ìœ «‰  Œ »∆ »”—⁄… ﬁ»· «‰  ⁄Êœ ***',
   '*** ·ﬁœ ⁄«œ  „‰ ÃœÌœ «·Ï «·„‰“· ***',
   '*** ·«  ’œ— «Ì ’Ê  ! ***',
   '*** „—Ì„ : ·ﬁœ ⁄œ  ***',
   '*** „—Ì„ : Ì« «ÌÂ« «·„Œ«œ⁄ «Ì‰ «‰  ***',
   '*** „—Ì„ : «⁄·„ «‰ﬂ Â‰« ›Ì «·„‰“· ***',
   '*** „—Ì„ : „«–«  —Ìœ «‰  ”„⁄ ***',
   '*** «Õœ „« Œ—Ã „‰ «·„‰“· ***',
   '*** «‰ Ÿ— «·Ã“¡ «·À«‰Ì ⁄‰œ„« ÌÊ’· «·»Ê  100 ”Ì—›— , ”«⁄œ‰Ì ›Ì ‰‘— «·»Ê  Ê«œŒ· Â–« «·”Ì—›—  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('!„—Ì„')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("·⁄»… „—Ì„ ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});
/////////////--------------------------//////

///////////////
var EpicEdiTeD = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("N‚mË :?", message.author.tag)
    .addField("LËvËl? :", EpicEdiTeD[message.author.id].Level)
    .addField("Xp :?",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.25;
EpicEdiTeD[message.author.id].Money+= 0.25;
 
});
////////////////////////
client.on('message' , async message => {
            if(message.content.startsWith(prefix + "auto")) {
     await message.channel.send("`«—”«· «·—”«·Â .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("` ﬂ—«— «·—”«·Â ﬂ· ....... œﬁ«∆ﬁ`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`«·Êﬁ  »«·œﬁ«∆ﬁ ! «—ﬁ«„ ›ﬁÿÚ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`·« «ﬁ· „‰ œﬁÌﬁÂ Ê·« «ﬂÀ— „‰ ÌÊ„`")
  time = co.first().content
co.first().delete()
  e.edit("`«œŒ· «”„ «·—Ê„`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`Ã«—Ì «⁄œ«œ «·„⁄·Ê„«  «·—Ã«¡ «·«‰ Ÿ««—...`").then(b => {
              setTimeout(() => {
    b.edit(`**  „ «⁄œ«œ «·„⁄·Ê„«  »‰Ã«Õ .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});


client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **·Ì” ·œÌﬂ «·’·«ÕÌ«  «·ﬂ«›Ì…**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **·Ì” „⁄Ì «·’·«ÕÌ«  «·??«›Ì…**');
    message.channel.send('?| ** „ ⁄„· «·—Ê„ »‰Ã«Õ**');
    message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Members Count :  ${message.guild.members.size} `)
      },1000);
    });
    }
  });



client.on('message', message => {
         if (message.content === "!Build R") {
		       if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**ÌÕ «Ã «·»Ê  «·Ï Œ«’Ì…` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

                       if(!message.channel.guild) return message.reply('** This command only for servers **');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**√‰  ·Ì” ·œÌﬂ »—„‘‰** `ADMINISTRATOR`' );
	const embed = new Discord.RichEmbed()
		.setDescription('** __:ok_hand: running...to make Channels | Ì „ «·√‰ ⁄„· «·—Ê„«  «·’ÊÌ … Ê«·ﬂ «»Ì…__ **')
		.setColor('RANDOM')
		.setFooter("**GAMING BOT **")
	message.channel.sendEmbed(embed);

message.guild.createChannel('Info', 'text');
message.guild.createChannel('Welcome', 'text');
message.guild.createChannel('Chat', 'text');
message.guild.createChannel('bot', 'text');
message.guild.createChannel('bo7', 'text');
message.guild.createChannel('pic', 'text');
message.guild.createChannel('cut', 'text');
message.guild.createChannel('log', 'text');
message.guild.createChannel('admin-chat', 'text');
message.guild.createChannel('????ADMNS????', 'voice');
message.guild.createChannel('Owner - „«·ﬂ «·”Ì—›—', 'voice');
message.guild.createChannel('Co Owner - ‰«∆» «·—∆Ì”', 'voice');
message.guild.createChannel('Dev - „»—„Ã «·”Ì—›—', 'voice');
message.guild.createChannel('Admin - „‘—›', 'voice');
message.guild.createChannel('Mod - „Êœ', 'voice');
message.guild.createChannel('????Other????', 'voice');
message.guild.createChannel('[ R E C ] ??', 'voice');
message.guild.createChannel('YouTubers - ÌÊ ÌÊ»—“', 'voice');
message.guild.createChannel('VIP + - ﬂ»«— «·‘Œ’Ì«  »·”', 'voice');
message.guild.createChannel('VIP - ﬂ»«— «·‘Œ’Ì« ', 'voice');
message.guild.createChannel('Friends - «’œﬁ«¡', 'voice');
message.guild.createChannel('????WEL????', 'voice');
message.guild.createChannel('Help - „”«⁄œ…', 'voice');
message.guild.createChannel('?? «ﬁ‹ ‹—«Õ‹« ‹ﬂ„‹ ?? ?', 'voice');
message.guild.createChannel('?????????', 'voice');
message.guild.createChannel('? ?? ??  ”Ê«·Ì› ??  ?', 'voice');
message.guild.createChannel('? ?? ?? „Ê«Â» ??  ?', 'voice');
message.guild.createChannel('? ?? ??›⁄«·Ì«  ?? ?', 'voice');
message.guild.createChannel('? ??  ?? «·ﬁ—¬‰ «·ﬂ—Ì„  ?', 'voice');
message.guild.createChannel('?????????', 'voice');
message.guild.createChannel('?  ?? ??  «·”Ã‰ «·⁄«„ ?? ?', 'voice');
message.guild.createChannel('????Games????', 'voice');
message.guild.createChannel('Clash of Clans | ﬂ·«‘ √Ê› ﬂ·«‰“', 'voice');
message.guild.createChannel('Clash Royal | ﬂ·«‘ —ÊÌ«·', 'voice');
message.guild.createChannel('Hajwala  Online | ÂÃÊ·… √Ê‰ ·«Ì‰', 'voice');
message.guild.createChannel('Bullet force | »Ê·  ›Ê—”', 'voice');
message.guild.createChannel('MTA | «„  Ì «Ì', 'voice');
message.guild.createChannel('Ludo Star | ·ÊœÊ ” «—', 'voice');
message.guild.createChannel('????Private????', 'voice');
message.guild.createChannel('?Tow?', 'voice');
message.guild.createChannel('?Three?', 'voice');
message.guild.createChannel('?Four?', 'voice');
message.guild.createChannel('?Five?', 'voice');
message.guild.createChannel('?Six?', 'voice');
message.guild.createChannel('????AFK????', 'voice');
message.guild.createChannel('Away From keyboard AFK', 'voice');
message.guild.createChannel('?????????', 'voice');

  console.log(`i make text channels in this server: ** ${message.guild.name} ** `)
  
}
});
client.on('message', message => {
	
	if (message.content === "!Build Rr") {
		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**ÌÕ «Ã «·»Ê  «·Ï Œ«’Ì…` MANAGE_ROLES ` **").then(msg => msg.delete(6000))

	              if(!message.channel.guild) return message.reply('** This command only for servers **');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**√‰  ·Ì” ·œÌﬂ »—„‘‰** `ADMINISTRATOR`' );
		          const embed = new Discord.RichEmbed()
		.setDescription('** __:ok_hand: running...to make roles | Ì „ «·√‰ ⁄„· «·— »__ **')
		.setColor('RANDOM')
		.setFooter("** GAMING BOT  **")
	message.channel.sendEmbed(embed);
		   

  message.guild.createRole({
        name : "Owner",
        permissions :   [1],
        color : " #000000"
    })
    message.guild.createRole({
        name : "Co-Owner",
        permissions :   [1],
        color : " #000000"
    })
      message.guild.createRole({
        name : "Leader",
        permissions :   [1],
        color : " #EE82EE"
    })
    message.guild.createRole({
        name : "Co-Leader",
        permissions :   [1],
        color : " #EE82EE"
    })
  
     message.guild.createRole({
        name : "Admin",
        permissions :   [1],
        color : " #8A2BE2"
    })
    
     message.guild.createRole({
        name : "GAMING",
        permissions :   [1],
        color : " #RANDOM"
    })
    

  
    message.guild.createRole({
        name : "Mod",
        permissions :   [1],
        color : " #8A2BE2"
    })
    message.guild.createRole({
        name : "VIP + ",
        permissions :   [1],
        color : "  #7CFC00"
    })
    message.guild.createRole({
        name : "VIP",
        permissions :   [1],
        color : " #7CFC00"
    })
    message.guild.createRole({
        name : "Support ",
        permissions :   [1],
        color : " #FFD700"
    })

  message.guild.createRole({
        name : "YouTuber+200",
        permissions :   [1],
        color : " #8B0000"
    })
   
    message.guild.createRole({
        name : "YouTuber",
        permissions :   [1],
        color : " #FF0000"
    })
    
      message.guild.createRole({
        name : "Pro Member?",
        permissions :   [1],
        color : " #ffffff"
    })
    
          message.guild.createRole({
        name : "???Friendly?",
        permissions :   [1],
        color : " #9932CC"
    })
  
 
    message.guild.createRole({
        name : "?Member?",
        permissions :   [1],
        color : " #ffffff"
    })
    
        message.guild.createRole({
        name : "Bot",
        permissions :   [1],
        color : " #ffffff"
    })
    
    message.guild.createRole({
        name : "CrossFire",
        permissions :   [1],
        color : " #ffffff"
    })     
  
    message.guild.createRole({
        name : "PUBG",
        permissions :   [1],
        color : " #ffffff"
    })    
   
     message.guild.createRole({
        name : "BlackSquad",
        permissions :   [1],
        color : " #ffffff"
    })      
  console.log(`i make rools in this server: ** ${message.guild.name} ** `);
}
});
//////////////////////=---------------------------------------------------------------///////
//////////////////////////////////////////////////////////**-----------------
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('ffffff')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });
/////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
    if(message.content.startsWith("!google")) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
   		const args = message.content.split(' ').slice(1);
				let query = args;
				message.channel.send({embed: {
					color: 3447003,
					title: "Your Search",
					url: `https://www.google.com/search?q=${query}`,
					description: "Look at your Search Query via Google.",
					timestamp: new Date(),
					footer: {
						icon_url: client.user.avatarURL,
						text: "GAMING BOT  by Google"
					},
				}});
				
    }
});


/////////////////////////////////----------------------------------------ID--------------/////////
client.on('message', message => {
   if (message.content.startsWith ("!Id")) {
       if(!message.channel.guild) return message.reply('** This command only for servers **');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
      message.guild.fetchInvites()
       .then(invites =>{
 if(!invites.find(invite => invite.inviter.id === `${mentionavatar.id}`)) {
     let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)
  .addField("Invites:", `**0**` ,true)
     .setFooter(`GAMING BOT  `)
      message.channel.sendEmbed(embed);
 }else{
   let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)

  .addField("Invites:", `**${invites.find(invite => invite.inviter.id === `${mentionavatar.id}`).uses}**` ,true)
    .setFooter(`GAMING BOT `)

  message.channel.sendEmbed(embed);
 }
 
       })
    }
});

////////////////////////////////////////----------------/////////////////////Member info 
client.on('message', message => {
    if(message.content == '!members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info??
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
             .setColor(0xd3d0c4)
            .setFooter(`GAMING BOT  `)
         message.channel.send({embed});

    }
  });
///////////////////////////////////////////////-----------------------------------------Stats
//???????????????????????????
//???????????????????????????
//???????????????????????????
//???????????????????????????
//???????????????????????????
//???????????????????????????


client.on('message', message => {
    if (message.content.startsWith("!stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('ffffff')
            .setTitle('**GAMING  Stats** ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
           .setThumbnail(client.avatarURL)
            .setFooter('GAMING BOT')
          
    })
}
});


function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//???????????????????????????????????????
//?????????????????????????????????????????
//???????????????????????????????????????
//???????????????????????????????????????
//???????????????????????????????????????
//???????????????????????????????????????


  client.on('message', message => {
    if (message.content === "!SERVER") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('ffffff')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id:   Server Id :',`${message.guild.id}`,true)
         .addField(':date: Create Date: ',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: Server Owner:',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: Members : ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: Channels:' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: Region:',message.guild.region)
         .addField(':ribbon: Server Emojis :',`${message.guild.emojis.size}`,true)
         .addField(':construction: VerificationLevel:',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: Roles Count : '+message.guild.roles.size+' ','Type`g!id ` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


////////////////////////////////////////---------------------------------------------------///////////////el Tok





function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }


var servers = {};


var q1 = "g!quran 1"

var q2 = "g!quran 2"

var q3 = "g!quran 3"

var q4 = "g!quran 4"

var q5 = "g!live"



function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`Quran bot is in ${client.guilds.size} servers `)
});




///////////sowar


client.on("message", message => {

	                    if (message.content === q1 ) {
                  message.react('??')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Ì—ÃÏ √‰  ﬂÊ‰ ›Ì ﬁ‰«… ’Ê ÌÂ √Ê·«!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
                  message.react('??')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Ì—ÃÏ √‰  ﬂÊ‰ ›Ì ﬁ‰«… ’Ê ÌÂ √Ê·«!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=cR0GQnTrmiw', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
                  message.react('??')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Ì—ÃÏ √‰  ﬂÊ‰ ›Ì ﬁ‰«… ’Ê ÌÂ √Ê·«!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
                  message.react('??')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Ì—ÃÏ √‰  ﬂÊ‰ ›Ì ﬁ‰«… ’Ê ÌÂ √Ê·«!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
	
	
	
      	                    if (message.content === q5 ) {
                  message.react('??')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Ì—ÃÏ √‰  ﬂÊ‰ ›Ì ﬁ‰«… ’Ê ÌÂ √Ê·«!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=lAJaVCbciT4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
    
    
    //outher_cummon  
    
  
  if(message.content === "!stopq" ) {
      			var servers = {};
	  message.channel.send(` „ ≈Ìﬁ«› «·»Ê `);

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

	
	
	
  if(message.content === "g!help-quran") {
    message.channel.send(` 
	 Quran Commands
:pray: g!quran 1             : «·ﬁ—«‰ «·ﬂ—Ì„ ﬂ«„· »’Ê  «·‘ÌŒ ⁄»œ«·»«”ÿ ⁄»œ«·’„œ 
            
:pray: !quran 2             : «·ﬁ—¬‰ «·ﬂ—Ì„ ﬂ«„· »’Ê  «·‘ÌŒ ”⁄œ «·€«„œÌ  
:pray: !quran 3             : «·ﬁ—¬‰ «·ﬂ—Ì„ ﬂ«„· »’Ê  «·‘ÌŒ ⁄»œ «·—Õ„‰ «·”œÌ” Ê”⁄Êœ «·‘—Ì„ 
:pray: !quran 4             : «·ﬁ—¬‰ «·ﬂ—Ì„ ﬂ«„· »’Ê  «·‘ÌŒ «·„⁄Ìﬁ·Ì  
:pray: !live                : · ‘€Ì· «·ﬁ—¬‰ «·ﬂ—Ì„ „»«‘—
:pray: !adkar               : ·‰‘— «·√œﬂ«—
:pray: !stopq               : ·‹ √Ìﬁ«›  ‘€Ì· «·»Ê  `)
	  
	  message.channel.send(`
`)
 
	  
}
 
	    
});




client.on('message' , message => {
var prefix = "!"

if (message.author.bot) return;
if (message.content.startsWith("!contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.reply('**√ﬂ » —”«· ﬂ !**').then(msg => msg.delete(10000))
        message.delete();



client.users.get("399697177259147275").send(
    "\n" + "**" + "? «·”Ì—›— :" + "**" +
    "\n" + "**" + "ª " + message.guild.name + "**" +
    "\n" + "**" + " ? «·„—”· : " + "**" +
    "\n" + "**" + "ª " + message.author.tag + "**" +
    "\n" + "**" + " ? «·—”«·… : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('??  „ «—”«· «·—”«·… «·Ï ’«Õ» «·»Ê  »‰Ã«Õ')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : 3mk D3s")
                                                

message.channel.send(embed);


}
    
});






///////////////////////-//////////////EL MS7f
client.on('message', message => { // Leaked by [ @Fr3on Gamer#9338 ]
if(message.content === prefix + '„’Õ›' || message.content === prefix + 'ms7f') {
	var pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	var page = 1;

	message.delete();

	var embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`«·ﬁ—«¬‰ «·ﬂ—Ì„ | ’›Õ… —ﬁ„ ${page} „‰ «’· ${pages.length} ’›Õ…`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128')
	.setImage(pages[page-1])

// ${page}
// ${pages.length}
	message.channel.sendEmbed(embed).then(msg => {

		msg.react('?').then( r => {
			msg.react('?')
		.then(() => msg.react('?'))
		.then(() => msg.react('?'))
		.then(() => msg.react('?'))

		var backwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
			var forwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

			var sbackwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
			var sforwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

			var cancelFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

		var backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			var forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });

		var sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			var sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });

			var cancel = msg.createReactionCollector(cancelFilter, { time: 0 });

			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`«·ﬁ—«¬‰ «·ﬂ—Ì„ | ’›Õ… —ﬁ„ ${page} „‰ «’· ${pages.length} ’›Õ…`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`«·ﬁ—«¬‰ «·ﬂ—Ì„ | ’›Õ… —ﬁ„ ${page} „‰ «’· ${pages.length} ’›Õ…`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`«·ﬁ—«¬‰ «·ﬂ—Ì„ | ’›Õ… —ﬁ„ ${page} „‰ «’· ${pages.length} ’›Õ…`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; // ≈–«  »Ì  ﬂ„· · 600 ’›Õ… €Ì— «·—ﬁ„ ··’›Õ… «·Ì Ê’·  ·Â«
				embed.setImage(pages[page-1]);
				embed.setFooter(`«·ﬁ—«¬‰ «·ﬂ—Ì„ | ’›Õ… —ﬁ„ ${page} „‰ «’· ${pages.length} ’›Õ…`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**”Ê› Ì „ ≈€·«ﬁ «·ﬁ«∆„…**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/avatars/439427357175185408/b484f58b385cd3da5799522c52111ad4.jpg?size=128');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});


///////////////////////////////////////////



///////////////////////////////welcome by swra 
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'welcome');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(':  «—ÌŒ œŒÊ·ﬂ «·œ”ﬂÊ—œ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    



const w = ['./img/w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});






client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setDays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **·Ì” ·œÌﬂ «·’·«ÕÌ«  «·ﬂ«›Ì…**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **·Ì” „⁄Ì «·’·«ÕÌ«  «·ﬂ«›Ì…**');
    message.channel.send('?| ** „ ⁄„· «·—Ê„ »‰Ã«Õ**');
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`?? - Day : ?${moment().format('dddd')}?`);
      },1000);
    });
    }
  });

////////////////////////////////// Law anta d5al 3ndy Github el Fo2 inviteBy Fehom t3del da a7tmal y4t8al m3ak we a7la msa 3la gd3an 
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const member = member.guild.channels.find("name", "welcomer");
     member.send(`<@${member.user.id}>  „  «·œ⁄ÊÂ „‰ <@${inviter.id}>`);
    member.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
});
////////////////////////////////////////////////////////////////Rolelist
client.on('message', message => {
  if (message.content === prefix + "rolelist") {
    var iconb = client.user.avatarURL;
    var iconm = message.author.avatarURL
    var name = message.guild.id
    var statsmsg = new Discord.RichEmbed()
    .setAuthor("InfoRoles - AdminBot", iconb)
    .addField(`Roles¨`, '`'+ client.guilds.get(name).roles.map(r => r.name).join(", ") + '`')
    .setColor("#A901DB")
    .setFooter(`DemandÈ par ${message.author.tag}`, iconm)
    
    message.delete().catch(O_o=>{});
    message.channel.sendMessage(statsmsg);
  }
}); 
////////////////////////////////////////////// hcchannel shchannel


client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {

      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
///////////////////////////////////


client.on('message', async message => {
  if(message.content.startsWith(prefix + "ÿ·»")) {
    await message.channel.send("**„«–«  —Ìœ:small_orange_diamond:**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**ﬂ„  œ›⁄ :small_blue_diamond:**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**„‰ «·–Ì  ‘ —Ì „‰Â:shopping_cart:**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('** «‰ Ÿ—..**').then(b => {
        setTimeout(() => {
  b.edit(`** „ «· ﬁœÌ„ Ê”Ì „ «·—œ ›‹ «ﬁ—» Êﬁ :white_check_mark:**`)
        },2000);
var gg = message.guild.channels.find('name','ÿ·»')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**„«–«  —Ìœ:scroll: ª \n ${lan}\nﬂ„  œ›⁄ :moneybag: ª \n ${md} \n „‰ «·–Ì  ‘ —Ì „‰Â :round_pushpin: ª \n ${br}  \n  „ «· ﬁœÌ„ »Ê”ÿ… :top: ª <@${message.author.id}> **`)  
          .setFooter(`Mal,Shop Team?`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})



client.login(process.env.BOT_TOKEN);