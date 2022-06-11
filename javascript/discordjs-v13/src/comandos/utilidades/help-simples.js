//Command help
//Exemplo: !help
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Painel de comandos")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .addField("> 🍃 Categoria utilidades", "!ping\n!avatar\n!serverinfo\n!userinfo\n!botinfo\n!help")
    .addField("> 👮‍♂️ Categoria moderação", "!ban\n!kick\n!mute\n!unmute\n!warn\n!clear\n!warn")
    .addField("> 💰 Categoria economia", "!daily\n!bal\n!transfer\n!pay\n!work")
    .addField("> 🎡 Categoria diversão", "!8ball\n!say\n!coinflip\n!roll\n!slots")
    message.reply({embeds: [embed]})
}