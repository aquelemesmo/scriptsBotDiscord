//Command desban
//Exemplo: /desban <usuário> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

const { ApplicationCommandType, ApplicationCommandOptionType, PermissionsBitField } = require("discord.js")

module.exports = {
    name: "desbanir",
    description: "Retirar banimento do usuário",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione o membro que você quer banir",
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ],
    run: async (client, interaction) => {
        if(interaction.member.permission.has(PermissionsBitField.Flags.BanMembers)) {
            const membro = interaction.guild.members.cache.get(interaction.options.getUser("membro").id)
            const motivo = interaction.options.getString("motivo")

            interaction.reply({content: "Membro banido com sucesso", ephemeral: true})
            interaction.guild.members.unban(membro, motivo).catch(e => {
                console.log(e)
            })
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}