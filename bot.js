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
			Sandbox.send('**명령어 목록**\n--일치 시 발동--\n> help!!!\n> 도움!!!\n> 임상!!!\n> 한강\n> ㅂ\n--포함 시 발동--\n> 경고!!!\n> 방장!!!\n> 갈!!!\n> 비트!!!\n> 비트코인!!!');
			break;
		case('임상!!!'):
			msg.channel.send('짤막상식 1상 : 수십명한테 투여해서 약동/약력학 특성 보고 안전약물용량확인\n즉; 좆밥!\n2상 : 100명 , 용량 용법결정, pilot/pivotal study 다하면 3상 가는데 항생제 같은건 수백명수천면 대상으로도 해서 항생제는 2상 유의미\n3상 : 여까지오면 주식도 3상감 통과하면 시판\n4상: 이미 시판된 약 여기서 망하면 회사 할아버지따라감');
			break;
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
	if (msg.content.includes('갈!!!')) {
		var attatchment;
		const a=Math.random();
		if(a < 0.01) {
			attachment = new Discord.MessageAttachment('https://i.imgur.com/YdzSSBU.jpg');
		} else if(a < 0.04) {
			attachment = new Discord.MessageAttachment('https://i.imgur.com/E07oZUF.jpg');
		} else if(a < 0.1) {
			attachment = new Discord.MessageAttachment('https://i.imgur.com/ahxvoxW.jpg');
		} else if(a < 0.4) {
			attachment = new Discord.MessageAttachment('https://i.imgur.com/2uo6XAz.jpg');
		} else {
			attachment = new Discord.MessageAttachment('https://i.imgur.com/kDPRSj4.jpeg');
		}
		msg.channel.send(attachment);
	}
	if (msg.content.includes('비트!!!') || msg.content.includes('비트코인!!!')) {
		var attatchment;
		const a=Math.random();
		if(a < 0.01) {
			attachment = new Discord.MessageAttachment('https://imgur.com/a/ZC6bmq9');
		} else if(a < 0.04) {
			attachment = new Discord.MessageAttachment('https://imgur.com/a/ZC6bmq9');
		} else if(a < 0.1) {
			attachment = new Discord.MessageAttachment('https://imgur.com/a/ZC6bmq9');
		} else if(a < 0.4) {
			attachment = new Discord.MessageAttachment('https://imgur.com/a/ZC6bmq9');
		} else {
			attachment = new Discord.MessageAttachment('https://imgur.com/a/ZC6bmq9');
		}
		msg.channel.send(attachment);
	}
});

client.login(process.env.BOT_TOKEN);
