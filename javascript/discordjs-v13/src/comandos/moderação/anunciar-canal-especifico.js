//Channel especific
//Exemplo: !anunciar <anuncio>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    let sugestao = args.join(" ")

    if(!sugestao) return message.reply(`Coloque alguma coisa para ser anunciado!`)

    let channel = client.channels.cache.get("id_do_canal")

    const embed = new Discord.MessageEmbed()
    .setColor(sua_cor) //.setColor("sua_cor")
    .setTitle("seu_titulo")
    .setDescription(sugestao)
    .setFooter({contet: "seu_rodape"})
    .setTimestamp()
    await channel.send({embeds: [embed]})
}

//Comando organizado e arrumado algumas coisas

const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(sua_mensagem_de_erro)

    if(!args.join(" ")) return message.reply(`Coloque alguma coisa para ser anunciado!`)

    const embed = new Discord.MessageEmbed()
    .setColor(sua_cor) //.setColor("sua_cor")
    .setTitle("seu_titulo")
    .setDescription(args.join(" "))
    .setFooter({content: "seu_rodape"})
    .setTimestamp()
    client.channels.cache.get("id_do_canal").send({embeds: [embed]})
}