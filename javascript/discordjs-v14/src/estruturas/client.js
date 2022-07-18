//Estrutura client
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const { GatewayIntentBits } = require("discord.js/typings/enums");
const { Client } = require("discord.js")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages
    ],
})

client.login("token")