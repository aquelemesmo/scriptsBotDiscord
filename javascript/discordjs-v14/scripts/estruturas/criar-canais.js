//Estrutura criar canals texto e voz
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const { ChannelType, PermissionsBitField } = require("discord.js")

//texto

const canal = await message.guilds.channel.create({
    name: 'texto',
    parent: "id_da_categoria",
    type: ChannelType.GuildText,
    permissionOverwrites: [
        {
            id: bot.user.id,
            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        },
        {
            id: message.guild.id, //interaction.guild.id
            deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        },
        {
            id: message.user.id, //interaction.user.id
            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        },
        {
            id: 'id_role_staff',
            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        }
    ]
})

//voz

const canal2 = await message.guilds.channel.create({
    name: 'texto',
    parent: "id_da_categoria",
    type: ChannelType.GuildVoice,
    permissionOverwrites: [
        {
            id: bot.user.id,
            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        },
        {
            id: message.guild.id, //interaction.guild.id
            deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        },
        {
            id: message.user.id, //interaction.user.id
            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        },
        {
            id: 'id_role_staff',
            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
        }
    ]
})