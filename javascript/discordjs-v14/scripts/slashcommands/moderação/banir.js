//Command ban
//Exemplo: /ban <usuário> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { ApplicationCommandType, ApplicationCommandOptionType, PermissionBitField } = require("discord.js")

module.exports = {
    name: "banir",
    description: "Bane um usuário",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione o membro que você quer banir",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "motivo",
            description: "Insira o motivo",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction) => {
        if(interaction.member.permission.has(PermissionBitField.Flags.BanMembers)) {
            const membro = interaction.options.getUser("membro")
            const motivo = interaction.options.getString("motivo")

            interaction.reply({content: "Membro banido com sucesso", ephemeral: true})
            membro.ban({reason: [motivo]})
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}