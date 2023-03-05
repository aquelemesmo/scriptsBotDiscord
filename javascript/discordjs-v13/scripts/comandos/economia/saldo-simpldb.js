//Command saldo
//Exemplo: !saldo
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

//comando que nao precisa mencionar outro usuario para ver o saldo

const Discord = require("discord.js")
const SimplDB = require("simpl.db")
const db = new SimplDB()

module.exports.run = async (client, message, args) => {
    let coins = await db.fetch(`moedas.${message.guild.id}.${message.author.id}`) ?? 0 //ou seja, se nao tiver nada na db, ele vai ser 0

    let banco = await db.fetch(`banco.${message.guild.id}.${message.author.id}`) ?? 0

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Sua carteira")
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Moedas", `${coins}`)
    .addField("Banco", `${banco}`)
    message.reply({embeds: [embed]})
}

//comando que necessita mencionar outro usuario para ver o saldo

const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const membro = message.mentions.members.first() || message.author; //agora precisa mencionar o usuario

    if(!membro) return message.reply("Mencione um usuário válido!")

    let coins = await db.fetch(`moedas.${message.guild.id}.${membro.id}`) ?? 0//ou seja, se nao tiver nada na db, ele vai ser 0

    let banco = await db.fetch(`banco.${message.guild.id}.${membro.id}`) ?? 0

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Carteira de " + membro.user.username)
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Moedas", `${coins}`)
    .addField("Banco", `${banco}`)
    message.reply({embeds: [embed]})
}