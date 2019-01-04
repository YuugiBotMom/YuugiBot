const Discord = require('discord.js');
const fetch = require('node-fetch');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const newUsers = [];
//Responses to things
const helloResponses = ['Hi!! (*＾▽＾)／', 'Yo.', 'Hey! ^-^', 'What\'s up?'];
const morningResponses = ['Good morning. I hope you slept well.', 'Good morning!! (*＾ワ＾*)', 'Good morning. :)', 'Morning! ( ´ ▽ ` )', 'Did you just wake up?'];
const thanksResponses = ['No problem.', 'Sure.', '👍', 'You\'re welcome.', 'No problem. (^▽^)b', 'You\'re welcome! ^^', 'No problem! (*＾▽＾)'];
const positiveResponses = ['Remember to take care of yourself. Don\'t forget to go to bed on time, stay hydrated, take any medication you need to take, and eat if you can. Be kind to yourself. I love you. 🖤', 'Never give up on yourself!! ೕ(•̀ㅂ•́ )Everyone makes mistakes sometimes, but what\'s important is learning from them. Even if you think you really, really messed up, nobody is ever past redemption! Keep doing your best and be nice to yourself! I love you!! ＼（＾▽＾）／', 'Hang in there!! You got this! o(≧∇≦o)', 'Always believe in yourself. You can do anything if you stay calm and have confidence. And if things get tough, you can always ask your friends for a little help!', 'Have you been taking care of yourself? (*´◡`*) Don\'t forget to drink water! If you\'re working on something, maybe it\'s time to take a break? (´･ω･`)?', 'Believe in the heart of the cards! I know the cards believe in you!'];
const critResponses = ['Nice one!', 'Critical hit!', 'Yeah!! ＼（＾▽＾）／', 'Hell yeah!', 'Nice one! (^▽^)b', 'Awesome! (*＾▽＾)／'];
const fumbleResponses = ['F', ' If this keeps up... Oof...', 'Oh nooooo (´；д；`)', 'Oops. (´。＿。｀)', '💀', 'Aw, too bad... (´；Д；｀)'];

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Duel Monsters');
});

//Welcome message
client.on('guildMemberAdd', (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

	const welcomeMessages = [`Welcome ${member.user}! Nice to meet you! ヾ(^▽^ヾ) Make sure you read the rules and introduce yourself, and ask a mod if you need any help!`, `Welcome, ${member.user}. Please be sure to read the rules and introduce yourself. I hope we can be friends!`, `Hi ${member.user}, welcome to the server!! Don't forget to read the rules and introduce yourself. ^-^`, `Hello, ${member.user}, welcome to the group. Remember to read the rules and introduce yourself. Ask a mod if you need help with anything.`, `Hello ${member.user}! Welcome new friend! (*＾▽＾)／ Please be sure to read the rules and introduce yourself! Have fun!`, `Welcome, ${member.user}... Don't forget to read the rules and introduce yourself. Enjoy your stay... heh heh heh...`];

	let response = welcomeMessages [Math.floor(Math.random() * welcomeMessages .length)];

    const userlist = newUsers[guild.id].map(u => u.toString()).join(' ');
    guild.channels.find(channel => channel.name === 'general').send(response);
    newUsers[guild.id].clear();


});

client.on('message', message => {
	if (message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//Ping pong test
	if (command === 'ping') {
		message.channel.send('Pong.');
	}

	//YEEHAW!
	else if (command === 'yeehaw') {
		message.channel.send('https://i.imgur.com/lpNydFh.png');
	}
	//Magical Hats
	else if (command.includes('hats')) {
		message.channel.send('https://i.imgur.com/Cd7uuts.png');
	}
	//Jimbo
	else if (command === 'jimbo') {
		message.channel.send('https://i.imgur.com/T5frtAc.png');
	}
	//Passionate Duelist
	else if ((message.content.toLowerCase()).includes('play passionate duelist')) {

		message.channel.send('https://www.youtube.com/watch?v=6FArMA1ZaHM');
	}
	//Passionate Narutoflute
	else if ((message.content.toLowerCase()).includes('play passionate naruto')) {

		message.channel.send('https://www.youtube.com/watch?v=Gjq0qzdlSmE');
	}

	//IT'S TIME TO D-D-D-D-D-D-DUEL!
	else if ((message.content.toLowerCase()).startsWith('it\'s time')) {

		message.channel.send('TO D-D-D-D-D-DUEL!');
	}
	//KUNAAAAAI WIT CHAIN!
	else if (((message.content.toLowerCase()).includes('wit chain')) || ((message.content.toLowerCase()).includes('with chain'))) {

		message.channel.send('https://www.youtube.com/watch?v=kU5KxBYYneA');
	}

	// Greetings - Generic
	else if ((((message.content.toLowerCase()).startsWith('hello')) || ((message.content.toLowerCase()).startsWith('hi')) || ((message.content.toLowerCase()).startsWith('hey')) || ((message.content.toLowerCase()).startsWith('what\'s up')) || ((message.content.toLowerCase()).startsWith('yo'))) && ((message.content.toLowerCase()).includes('yuugi'))) {
		let response = helloResponses [Math.floor(Math.random() * helloResponses .length)];

					message.channel.send(response).then().catch(console.error);
				}

	//Good morning
	else if ((((message.content.toLowerCase()).startsWith('good morning'))  || ((message.content.toLowerCase()).startsWith('morning'))) && ((message.content.toLowerCase()).includes('yuugi'))) {
		let response = morningResponses [Math.floor(Math.random() * morningResponses .length)];

					message.channel.send(response).then().catch(console.error);
				}
  //Goodnight
	else if ((((message.content.toLowerCase()).startsWith('goodnight'))) && ((message.content.toLowerCase()).includes('yuugi'))) {
		const goodnightResponses = [`Goodnight, ${message.author}. I hope you sleep well.`, `Goodnight! (´◡\`)`, `Goodnight. 🌙`, `Goodnight ${message.author}! Sleep well! ^-^`];
		let response = goodnightResponses [Math.floor(Math.random() * goodnightResponses .length)];

					message.channel.send(response).then().catch(console.error);
				}

	//Thanks
	else if (((message.content.toLowerCase()).startsWith('thank')) && ((message.content.toLowerCase()).includes('yuugi'))) {
		let response = thanksResponses [Math.floor(Math.random() * thanksResponses .length)];

					message.channel.send(response).then().catch(console.error);
				}

	//Positivity
	else if (command === 'positive') {
		let response = positiveResponses [Math.floor(Math.random() * positiveResponses .length)];

					message.channel.send(response).then().catch(console.error);
			}

	//Dice roll
	else if (command === 'roll') {
		let rollResult =  (Math.floor(Math.random() * 21));
		let response = `You rolled a ${rollResult}.`;

					message.channel.send(response).then().catch(console.error);
			}

  //Help
	else if (command === 'help') {
		message.channel.send(`\*Yuugibot version 0.2, created by Alex \(greed-the-dorkalicious.tumblr.com\).\nYuugibot is a simple, poorly made-yet-lovable bot for Yugioh fans. Two perfect boys for the price of one! His command prefix is y!. His commands are as follows:\ny!hats or y!magicalhats - Posts the magical hats button image.\ny!jimbo - Posts the \"You\'re going to the Shadow Realm, Jimbo\" image.\ny!positive - Posts a motivational message.\ny!roll - Rolls a d20.\ny!yeehaw - Posts the \"YEEHAW\" Jounouchi image.\nIn addition to these, Yuugibot will also post Passionate Duelist or Kunai Wit Chain upon request. He also responds to his own name in various contexts\; Keep in mind that for sanity\'s sake, he only responds if his name is spelled with two Us. Enjoy!\*`);
	}

});

client.login(token);
