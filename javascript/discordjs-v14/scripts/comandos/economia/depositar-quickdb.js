//Command depositar
//Exemplo: !dep <quantidade>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

//depositar todo o dinheiro, depall

const { EmbedBuilder } = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    let coins = await db.fetch(`moedas.${message.guild.id}.${message.author.id}`) ?? 0

    if(coins < 0) return message.reply("Você não tem moedas para depositar!")

    const embed = new EmbedBuilder()
    .setColor("cor")
    .setDescription("Todo o seu dinheiro foi depositado para o banco!")
    message.reply({embeds: [embed]})
    db.subtract(`moedas.${message.guild.id}.${message.author.id}`, coins)
    db.add(`banco.${message.guild.id}.${message.author.id}`, coins)
}

//depositar qualquer quantia de moedas

const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    let coins = await db.fetch(`moedas.${message.guild.id}.${message.author.id}`) ?? 0

    if(args[0]) return message.reply("Insira uma quantia válida!")

    if(coins < 0) return message.reply("Você não tem moedas para depositar!")

    if(message.content === "-") return message.reply("Você não pode depositar moedas negativas!")

    const embed = new Discord.MessageEmbed()
    .setColor("cor")
    .setDescription("Foi depositado " + args[0] + " moedas para o banco!")
    message.reply({embeds: [embed]})
    db.sub(`moedas.${message.guild.id}.${message.author.id}`, coins)
    db.add(`banco.${message.guild.id}.${message.author.id}`, coins)
}