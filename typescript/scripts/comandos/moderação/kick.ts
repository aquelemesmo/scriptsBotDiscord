//Command kick
//Exemplo: /kick <usuário> <motivo>
//Linguagem usada: ts
//Author: aquelemesmoojack
//Versão: Discord.JS v14

import { ApplicationCommandType, ApplicationCommandOptionType, PermissionsBitField } from 'discord.js'

module.exports = {
    name: "expulsar",
    description: "Expulse um usuário",
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
        
        if(interaction.member.permission.has(PermissionsBitField.Flags.BanMembers)) {
            const membro = interaction.guild.members.cache.get(interaction.options.getUser("membro").id)
            const motivo = interaction.options.getString("motivo") || "Não informado"

            interaction.reply({content: "Membro banido com sucesso", ephemeral: true})
            membro.kick({reason: [motivo]})
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}