//Command avatar
//Exemplo: !avatar <@usuario>
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const Discord = require("discord.js")

module.exports.run = async (client,message,args) => {
    const membro = message.mentions.members.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Avatar de " + membro.user.username)
    .setDescription(`[Clique aqui para baixar](${membro.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'})}) o avatar`)
    .setImage(membro.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    message.reply({embeds: [embed]})
}