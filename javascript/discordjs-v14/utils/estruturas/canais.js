//Estrutura criar canals texto e voz
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const { ChannelType, PermissionsBitField } = require("discord.js")

//Criar canal de texto

const canal = await message.guilds.channel.create({
    name: 'texto',
    parent: "id_da_categoria",
    type: ChannelType.GuildText,
    permissionOverwrites: [
        //estruturas/permissões.js
    ]
})

//Criar canal de voz

const canal2 = await message.guilds.channel.create({
    name: 'texto',
    parent: "id_da_categoria",
    type: ChannelType.GuildVoice,
    permissionOverwrites: [
        //estruturas/permissões.js
    ]
})

//Criar categoria

const canal3 = await message.guilds.channel.create({
    name: 'texto',
    type: ChannelType.GuildCategory,
    permissionOverwrites: [
        //estruturas/permissões.js
    ]
})