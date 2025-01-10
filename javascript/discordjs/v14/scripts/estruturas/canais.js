//Estrutura criar canals texto e voz
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack

const { ChannelType, PermissionsBitField } = require("discord.js")

//Criar canal de texto pelo parâmetro message

const canal = await message.guilds.channel.create({
    name: 'texto',
    parent: "id_da_categoria",
    type: ChannelType.GuildText,
    permissionOverwrites: [
        //estruturas/permissões.js
    ]
})

//Criar canal de voz pelo parâmetro message

const canal2 = await message.guilds.channel.create({
    name: 'texto',
    parent: "id_da_categoria",
    type: ChannelType.GuildVoice,
    permissionOverwrites: [
        //estruturas/permissões.js
    ]
})

//Criar categoria pelo parâmetro message

const canal3 = await message.guilds.channel.create({
    name: 'texto',
    type: ChannelType.GuildCategory,
    permissionOverwrites: [
        //estruturas/permissões.js
    ]
})