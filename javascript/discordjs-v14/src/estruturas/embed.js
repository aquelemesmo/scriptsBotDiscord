//Estrutura embed
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack#4306


const { EmbedBuilder } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    const embed = new EmbedBuilder()
    .setColor("cor_do_embed")
    .setAuthor({name: "autor", iconURL: "iconURL", url: "url"})
    .setTitle("título")
    .setDescription("descrição")
    .setImage("imagem em link")
    .setThumbnail("thumbnail em link ou em métodos")
    .setURL("URL")
    .addFields([
        {name: "valor1", value: "valor2", inline: true},
    ])
    .setFooter({content: "footer"})
    .setTimestamp() //mostrar o tempo de hoje
    message.reply({embeds: [embed]})
}