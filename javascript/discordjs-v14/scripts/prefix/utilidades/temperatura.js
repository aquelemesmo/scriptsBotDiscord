//Command temperatura
//Exemplo: !temperatura <argumento>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { EmbedBuilder } = require("discord.js")
const weather = require("weather-js") //npm i --save weather-js

module.exports.run = async (bot,message,args) => {
    const localizacao = args.join(" ")

    if(!localizacao) return message.reply("Você precisa informar uma localização para ver a pesquisa!")

    weather.find({search: localizacao, degreeType: 'C'}, function(err, result) {
        if(err) console.error(err)

        const resultEmbed = new EmbedBuilder()
        .setColor("Cor")
        .setTitle("Previsão do tempo para " + result[0].location.name)
        .addField("> Temperatura", `${result[0].current.temperature}°C`, true)
        .addField("> Temp. máxima", `${result[0].forecast[0].high}°C`, true)
        .addField("> Temp. mínima", `${result[0].forecast[0].low}°C`, true)
        .addField("> Umidade", `${result[0].current.humidity}%`, true)
        .addField("> Vento", `${result[0].current.winddisplay}`, true)
        .addField("> Atualizado em", `${result[0].current.observationtime}`, true)
        message.reply({embeds: [resultEmbed]})
    })
}