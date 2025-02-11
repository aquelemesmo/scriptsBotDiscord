//Command timeout
//Exemplo: /timeout <usuário> <tempo> <motivo>
//Linguagem usada: ts
//Author: aquelemesmoojack
//Versão: Discord.JS v14

import { ApplicationCommandType, ApplicationCommandOptionType, PermissionsBitField } from 'discord.js';
import ms from 'ms'

module.exports = {
    name: "timeout",
    description: "Mutar um usuário",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione o membro que você quer banir",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "tempo",
            description: "Tempo do mute",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "motivo",
            description: "Insira o motivo",
            type: ApplicationCommandOptionType.String,
            required: false
        }
    ],
    run: async (client, interaction) => {
        
        if(interaction.member.permission.has(PermissionsBitField.Flags.ModerateMembers)) {
            const membro = interaction.guild.members.cache.get(interaction.options.getUser("membro").id)
            const motivo = interaction.options.getString("motivo") || "Não informado"
            const tempo = interaction.options.getString("tempo") 

            const tempoMs = ms(tempo)

            interaction.reply({content: "Membro mutado com sucesso", ephemeral: true})
            membro.timeout({reason: [motivo], time: tempoMs})
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}