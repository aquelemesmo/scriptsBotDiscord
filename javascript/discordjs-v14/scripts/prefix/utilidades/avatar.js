//Command avatar
//Exemplo: !avatar <@usuário>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { EmbedBuilder } = require("discord.js")

module.exports.run = async (client, message, args) => {
    const membro = message.mentions.members.first() || message.member;

    if(!membro) return message.reply("Mencione um membro")

    const embed = new EmbedBuilder()
    .setTitle("Avatar de " + membro.user.username)
    .setImage(membro.user.displayAvatarURL({dynamic: true, size: 4096}))
    message.reply({embeds: [embed]})
}
