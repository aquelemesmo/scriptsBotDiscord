//Command temperatura
//Exemplo: /temperatura <argumento>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const weather = require("weather-js")
const { ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "temperatura",
    description: "Observe a temperatura de uma cidade",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "cidade",
            description: "Insira o nome da cidade/país/estado",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const cidade = interaction.options.getString("cidade")

        weather.find({search: cidade, degreeType: 'C'}, function(err, result) {
            if(err) console.error(err)
    
            const resultEmbed = new EmbedBuilder()
            .setColor("Cor")
            .setTitle("Previsão do tempo para " + result[0].location.name)
            .addFields([
                {name: "> Temperatura", value: `${result[0].current.temperature}°C`, inline: true},
                {name: "> Temp. máxima", value: `${result[0].forecast[0].high}°C`, inline: true},
                {name: "> Temp. mínima", value: `${result[0].forecast[0].low}°C`, inline: true},
                {name: "> Umidade", value: `${result[0].current.humidity}%`, inline: true},
                {name: "> Vento", value: `${result[0].current.winddisplay}`, inline: true},
                {name: "> Atualizado em", value: `${result[0].current.observationtime}`, inline: true}
            ])
            interaction.reply({embeds: [resultEmbed]})
        })
    }
}