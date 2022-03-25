//Para poder usar esse script e fazer funcionar, tera que usar o evento guildCreate
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const Discord = require("discord.js")

module.exports = async (client, guild, member) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL())
    .setTitle("Fui adicionado em um grupo!")
    .addFields(
        {name: "Nome do servidor", value: `${message.guild.name}`},
        {name: "ID do servidor", value: `${message.guild.id}`},
        {name: "ID dono do servidor", value: `${message.guild.ownerID}`}
    )
    client.channels.cache.get(id_do_canal).send({embeds: [embed]})
}