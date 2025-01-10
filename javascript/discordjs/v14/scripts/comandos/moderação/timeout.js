//Command timeout
//Exemplo: /timeout <usuário> <motivo> <tempo>
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

const { ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "timeout",
    description: "Silencie um usuário",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione o membro que você quer silenciar",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "motivo",
            description: "Insira o motivo",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "tempo",
            description: "Insira o tempo",
            type: ApplicationCommandOptionType.Integer,
            required: true
        }
    ],
    run: async (client, interaction) => {
        if(interaction.member.permission.has(PermissionsBitField.Flags.ManageMessages)) {
            const membro = interaction.guild.members.cache.get(interaction.options.getUser("membro").id)
            const motivo = interaction.options.getString("motivo")
            const tempo = interaction.options.getInteger("tempo")

            const tempoEmMs = ms(tempo)

            interaction.reply({content: `Membro silenciado com sucesso! Tempo: ${tempo}`, ephemeral: true})
            membro.timeout(tempoEmMs, motivo)
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}