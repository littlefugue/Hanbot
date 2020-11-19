const Discord = require('discord.js');
const client = new Discord.Client();
//const { Client, MessageAttachment } = require('discord.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pingpingi');
  }
});

client.on('message', msg => {
  if (msg.content === 'pong') {
    msg.reply('pongpongi');
  }
});

client.on('message', msg => {
  if (msg.content === '한강') {
    msg.reply('가즈아!!!!!');
  }
});

client.on('message', msg => {
  if (msg.content === 'ㅂ') {
    msg.channel.send('(╯°□°）╯︵ ┻━┻');
  }
});

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

client.on('message', message => {
  if (message.content === '!rip') {
    //const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
	const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(`${message.author},`, attachment);
  }
});

// Login with your bot token
client.login(process.env.BOT_TOKEN);

//if (msg.toString().toLowerCase().includes('ping')) { ​
//		msg.channel.send('pong!');
//	}