//Npm search
//Exemplo: !npm <package>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")
const searchNpmRegistry = require('search-npm-registry') //npm i --save const search-npm-registry

module.exports.run = async (client, message, args) => {
    let npm = args[0]

    const resultados = await searchNpmRegistry().text(`${npm}`).size(5).search()

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Package name - ${resultados[0].name}`) //vai pegar o nome da package pesquisada
    .addField("Versão", `${resultados[0].version}`) //versao da package
    .addField("Descrição", `${resultados[0].description}`) //descrição da package
    .addField("Link", `${resultados[0].links.npm}`) //link da package
    message.reply({embeds: [embed]})
}