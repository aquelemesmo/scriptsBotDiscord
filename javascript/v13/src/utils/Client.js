//Client main bot
//Linguagem usada: js

const Discord = require('discord.js');
const bot = Discord.Client({intents: 32767});

//handler main bot no arquivo handler-fs.js

bot.login("seu_token")