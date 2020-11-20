const Discord = require('discord.js');
const client = new Discord.Client();
//const { Client, MessageAttachment } = require('discord.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === '잡담');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member}, 한강디코에 오신 것을 환영합니다. 이름은 실명으로 바꿔 주시고 공지사항은 전부 읽어 주세요.`);
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
