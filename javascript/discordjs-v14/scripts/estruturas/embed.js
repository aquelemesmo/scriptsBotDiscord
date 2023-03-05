//Estrutura embed
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const Discord = require("discord.js")

const embed = new Discord.EmbedBuilder()
    .setColor("cor_do_embed") //Agora não terá como usar cor em todas as letras maiúsculas, agora e só em: Red, Green, Blue, etc.
    .setAuthor({name: "autor", iconURL: "iconURL", url: "url"})
    .setTitle("título")
    .setDescription("descrição")
    .setImage("imagem em link")
    .setThumbnail("thumbnail em link ou em métodos")
    .setURL("URL")
    .addFields([
        {name: "valor1", value: "valor2", inline: true},
    ])
    .setFooter({text: "footer", iconURL: "iconURL"})
    .setTimestamp() //mostrar o tempo de hoje
message.channel.send({embeds: [embed]})