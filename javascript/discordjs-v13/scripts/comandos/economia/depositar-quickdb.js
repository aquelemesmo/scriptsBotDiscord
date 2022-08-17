//Command depositar
//Exemplo: !dep <quantidade>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

//depositar todo o dinheiro, depall

const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    let coins = await db.fetch(`moedas_${message.guild.id}_${message.author.id}`) ?? 0

    if(coins < 0) return message.reply("Você não tem moedas para depositar!")

    const embed = new Discord.MessageEmbed()
    .setColor("cor")
    .setDescription("Todo o seu dinheiro foi depositado para o banco!")
    message.reply({embeds: [embed]})
    db.subtract(`moedas_${message.guild.id}_${message.author.id}`, coins)
    db.add(`banco_${message.guild.id}_${message.author.id}`, coins)
}

//depositar qualquer quantia de moedas

const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    let coins = await db.fetch(`moedas_${message.guild.id}_${message.author.id}`) ?? 0

    if(args[0]) return message.reply("Insira uma quantia válida!")

    if(coins < 0) return message.reply("Você não tem moedas para depositar!")

    if(message.content === "-") return message.reply("Você não pode depositar moedas negativas!")

    const embed = new Discord.MessageEmbed()
    .setColor("cor")
    .setDescription("Foi depositado " + args[0] + " moedas para o banco!")
    message.reply({embeds: [embed]})
    db.subtract(`moedas_${message.guild.id}_${message.author.id}`, coins)
    db.add(`banco_${message.guild.id}_${message.author.id}`, coins)
}