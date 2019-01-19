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
client.user.setGame(`-bc | Brodcast`,'https://www.twitch.tv/ImD3s_x');	
}); 





client.on('message',async message => {

  if(message.author.bot || message.channel.type === 'dm') return;

  let args = message.content.split(' ');

  if(args[0] === `${prefix}bc`) {

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **��� �� ���� ��������� ������� �������� ��� �����**');

    if(!args[1]) return message.channel.send('- **��� ���� ����� ������� ��� �����**');

  

    let msgCount = 0;

    let errorCount = 0;

    let successCount = 0;

    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ?��� ������� �������**\n**- [ :inbox_tray: :: ${successCount} ] ?��� ������� ��������**\n**- [ :outbox_tray: :: ${errorCount} ]?��� ������� ����� ������**`).then(msg => {

      message.guild.members.forEach(g => {

        g.send(args.slice(1).join(' ')).then(() => {

          successCount++;

          msgCount++;

          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ?��� ������� �������**\n**- [ :inbox_tray: :: ${successCount} ] ?��� ������� ��������**\n**- [ :outbox_tray: :: ${errorCount} ]?��� ������� ����� ������**`);

        }).catch(e => {

          errorCount++;

          msgCount++;

          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ?��� ������� �������**\n**- [ :inbox_tray: :: ${successCount} ] ?��� ������� ��������**\n**- [ :outbox_tray: :: ${errorCount} ]?��� ������� ����� ������**`);

        });

      });

    });

  }

});




client.login(process.env.BOT_TOKEN);