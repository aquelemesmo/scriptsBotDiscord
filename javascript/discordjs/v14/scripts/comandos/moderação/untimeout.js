//Command timeout
//Exemplo: /timeout <usuário> <motivo> <tempo>
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

const { ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "untimeout",
    description: "Silencie um usuário",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione o membro que você quer silenciar",
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ],
    run: async (client, interaction) => {
        if(interaction.member.permission.has(PermissionsBitField.Flags.ManageMessages)) {
            const membro = interaction.guild.members.cache.get(interaction.options.getUser("membro").id)

            interaction.reply({content: `Membro liberado do modo silencioso com sucesso! Tempo: ${tempo}`, ephemeral: true})
            membro.disableCommunicationUntil(null)
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}