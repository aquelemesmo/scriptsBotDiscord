//Channel especific
//Exemplo: !anunciar <anuncio>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { EmbedBuilder } = require("discord.js")

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    let sugestao = args.join(" ")

    if(!sugestao) return message.reply(`Coloque alguma coisa para ser anunciado!`)

    let channel = client.channels.cache.get("id_do_canal")

    const embed = new EmbedBuilder()
    .setColor(cor) //.setColor("sua_cor")
    .setTitle("titulo")
    .setDescription(sugestao)
    .setFooter("rodape")
    .setTimestamp()
    await channel.send({embeds: [embed]})
}

//Comando organizado e arrumado algumas coisas

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(sua_mensagem_de_erro)

    if(!args.join(" ")) return message.reply(`Coloque alguma coisa para ser anunciado!`)

    const embed = new EmbedBuilder()
    .setColor(cor)
    .setTitle("titulo")
    .setDescription(args.join(" "))
    .setFooter("rodape")
    .setTimestamp()
    client.channels.cache.get("id_do_canal").send({embeds: [embed]})
}

//anunciar sem canal especifico

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    let sugestao = args.join(" ")

    if(!sugestao) return message.reply(`Coloque alguma coisa para ser anunciado!`)

    const embed = new EmbedBuilder()
    .setColor(cor) //.setColor("sua_cor")
    .setTitle("titulo")
    .setDescription(sugestao)
    .setFooter("rodape")
    .setTimestamp()
    message.channel.send({embeds: [embed]})
}

//Comando organizado e arrumado algumas coisas

const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(sua_mensagem_de_erro)

    if(!args.join(" ")) return message.reply(`Coloque alguma coisa para ser anunciado!`)

    const embed = new EmbedBuilder()
    .setColor(cor) //.setColor("sua_cor")
    .setTitle("titulo")
    .setDescription(args.join(" "))
    .setFooter("rodape")
    .setTimestamp()
    message.channel.send({embeds: [embed]})
}