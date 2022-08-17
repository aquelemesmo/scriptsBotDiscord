//Command userinfo
//Exemplo: !userinfo <@usuario>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const membro = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Informações de " + membro.user.username)
    .setThumbnail(membro.user.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
    .setDescription(`
        Nome: ${membro.user.username}
        ID: ${membro.user.id}
        Discriminator: ${membro.user.discriminator}
        Status: ${membro.user.presence.status}
        Jogando: ${membro.user.presence.game ? membro.user.presence.game.name : "Não está jogando nada"}
        Criado em: ${membro.user.createdAt}
        Entrou em: ${membro.joinedAt}
        Cargo: ${membro.roles.map(r => r.name).join(', ') || "Nenhum"}
    `)
    message.reply({embeds: [embed]})
}