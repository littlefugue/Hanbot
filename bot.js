const Discord = require('discord.js');
const client = new Discord.Client();
//const { Client, MessageAttachment } = require('discord.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === '잡담');
	if (!channel) return;
	channel.send(`${member}, 환영합니다. 잡담방에 실명 남겨주시고 공지방에 있는 규정을 읽어 주세요.\n관리자가 확인 후 등급이 부여됩니다.\n봇에 대한 도움말은 help!!! 혹은 도움!!!을 치세요.`);
});


client.on('message', msg => {
	if (msg.author.bot) return;
	const Hangang = client.guilds.cache.get('762158660112613376');
	const Sandbox = client.channels.cache.get('772669318085345280')
	switch (msg.content){
		case('help!!!'):
		case('도움!!!'):
			msg.reply('sandbox를 확인하세요');
			Sandbox.send('**명령어 목록**\n--일치 시 발동--\n> help!!!\n> 도움!!!\n> 갈!!!\n> 한강\n> ㅂ\n--포함 시 발동--\n> 경고!!!\n> 방장!!!');
			break;
		case('갈!!!'):
			const attachment = new MessageAttachment('https://i.imgur.com/kDPRSj4.jpeg');
			message.channel.send(attachment);
		case('한강'):
			msg.reply('가즈아!!!');
			break;
		case('ㅂ'):
			msg.channel.send('(╯°□°）╯︵ ┻━┻');
			break;
	}
	if (msg.content.includes('경고!!!')) {
		msg.channel.send('실매매 얘기/어그로는 실매매방에서만 해주세요.');
	}
	if (msg.content.includes('방장!!!')) {
		msg.channel.send(`${Hangang.owner}!!!`);
	}
});

client.login(process.env.BOT_TOKEN);
