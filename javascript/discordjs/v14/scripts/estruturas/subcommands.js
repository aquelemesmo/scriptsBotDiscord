//Estrutura subcommands
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

const { ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "nome do comando",
    type: ApplicationCommandType.ChatInput,
    description: "Descrição do comando",
    options: [
        {
            name: "nome do subcomando",
            description: "descrição do subcomando",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "nome da opção",
                    description: "descrição da opção",
                    type: ApplicationCommandOptionType.String, //String, Integer, Boolean, User, Channel, Role, Mentionable, Number e Subcommand
                    required: true
                },
            ]
        }
    ],
    run: async (client, interaction) => {
        const tipo = interaction.options.getSubcommand("tipo")
        //código
    }
}