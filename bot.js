const Discord = require('discord.js');
const client = new Discord.Client();
//const { Client, MessageAttachment } = require('discord.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.cache.find(ch => ch.name === '잡담');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`${member}, 한강디코에 오신 것을 환영합니다. 잡담방에 인사+실명 남겨주시고 공지사항은 전부 읽어 주세요. 관리자가 확인 후 등급이 부여됩니다.`);
});

client.on('message', msg => {
	if (msg.content==='new'){
		msg.member.guild.channels.cache.get('772669318085345280').send(`${msg.member}hi.`);
	}
});

client.on('message', msg => {
	const Hangang = client.guilds.cache.get('762158660112613376');
	const Sandbox = client.channels.cache.get('772669318085345280')
	switch (msg.content){
		case(help!):
		case(도움!):
			message.reply('sandbox를 확인하세요');
			Sandbox.send('명령어 목록\n--일치--\nhelp!\n도움!\n한강\nㅂ\n--포함--\n방장');
		case('한강'):
			msg.reply('가즈아!!!!!');
			break;
		case('ㅂ'):
			msg.channel.send('(╯°□°）╯︵ ┻━┻');
			break;
		case('new'):
			Sandbox.send(`${msg.member}hi.`);
			break;
	}
	if (msg.content.includes('방장')) {
		msg.channel.send(`${Hangang.owner}!!!`);
	}
});


// Login with your bot token
client.login(process.env.BOT_TOKEN);
