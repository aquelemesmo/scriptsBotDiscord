//Command serverinfo
//Exemplo: !serverinfo
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
     const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Informações do servidor")
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`
        ID: ${message.guild.id}
        Criação: ${message.guild.createdAt}
        Dono: ${message.guild.owner}
        Membros: ${message.guild.memberCount}
        Cargos: ${message.guild.roles.cache.size}
        Categorias: ${message.guild.channels.cache.filter(c => c.type === 'category').size}
        Texto: ${message.guild.channels.cache.filter(c => c.type === 'text').size}
        Voice: ${message.guild.channels.cache.filter(c => c.type === 'voice').size}
        Emojis: ${message.guild.emojis.cache.size}
    `)
    message.reply({embeds: [embed]})
}