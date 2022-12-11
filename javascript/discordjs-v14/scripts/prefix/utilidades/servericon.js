//Command servericon
//Exemplo: /servericon
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

module.exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()
    .setColor("cor")
    .setDescription(` Ícone do servidor: \`${message.guild.name}\``)
    .setImage(message.guild.iconURL({ dynamic: true, size: 4096 }))
    message.reply({embeds: [embed]})
}