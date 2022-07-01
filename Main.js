//Main nada haver kkk
const { Client } = require("discord.js");
const config = require("./config.json")
const bot = new Client({intents: 32767})

bot.login(config.token)