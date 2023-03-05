//Command kick
//Exemplo: /kick <usuário> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { ApplicationCommandType, ApplicationCommandOptionType, PermissionBitField } = require("discord.js")

module.exports = {
    name: "expulsar",
    description: "Expulse um usuário",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione o membro que você quer expulsar",
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
        if(interaction.member.permission.has(PermissionBitField.Flags.KickMembers)) {
            const membro = interaction.guild.members.cache.get(interaction.options.getUser("membro").id)
            const motivo = interaction.options.getString("motivo")

            interaction.reply({content: "Membro expulso com sucesso", ephemeral: true})
            membro.kick({reason: [motivo]})
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}