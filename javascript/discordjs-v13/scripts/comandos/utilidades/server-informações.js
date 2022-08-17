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
    `)
    message.reply({embeds: [embed]})
}