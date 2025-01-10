//Command sugestão
//Exemplo: /sugestão <sugestão>
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

const { EmbedBuilder, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "sugestão",
    description: "Envie uma sugestão para o servidor",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "sugestão",
            description: "Digite sua sugestão",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (bot, interaction) => {
        const sugestão = interaction.options.getString("sugestão")

        const embed = new EmbedBuilder()
        .setColor("cor")
        .setTitle("Sugestão de: " + message.author.username) //Sugestão de: aquelemesmoojack
        .setDescription(`Sugestão: \`${sugestão}\``)
        bot.channels.cache.get("id_do_canal").send({embeds: [embed]})
    }
}