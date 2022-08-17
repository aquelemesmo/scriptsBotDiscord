//Command servericon
//Exemplo: !servericon <@usuario>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")

module.exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Icone do servidor")
    .setDescription(`[Clique aqui para baixar](${message.guild.iconURL({dynamic: true, size: 4096, format: 'png'})}) o icone`)
    .setImage(message.guild.iconURL({dynamic: true, size: 4096, format: 'png'}))
    message.reply({embeds: [embed]})
}