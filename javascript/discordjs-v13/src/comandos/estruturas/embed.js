//Estrutura embed
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require ("discord.js")

const embed = new Discord.MessageEmbed()
    .setColor("cor_do_embed")
    .setAuthor({name: "autor", iconURL: "iconURL", url: "url"})
    .setTitle("título")
    .setDescription("descrição")
    .setImage("imagem em link")
    .setThumbnail("thumbnail em link ou em métodos")
    .setURL("URL")
    .addField("valor1", "valor2")
    .addFields([
        {name: "valor1", value: "valor2", inline: true},
    ])
    .setFooter({content: "footer"})
    .setTimestamp() //mostrar o tempo de hoje
message.channel.send({embeds: [embed]})