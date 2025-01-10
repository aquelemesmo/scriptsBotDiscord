//Anunciar um anuncio no canal especificado ou sem canal especificado
//Exemplo: /anunciar <título> <descrição> <content> <canal>
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

const { ApplicationCommandOptionType, ApplicationCommandType } = require("discord.js")

module.exports = {
    name: "anunciar",
    description: "Faça um anúncio",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "título",
            description: "Insira o título do anúncio",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "descrição",
            description: "Insira a descrição do anúncio",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "content",
            description: "Insira alguma mensagem no anúncio",
            type: ApplicationCommandOptionType.String,
            required: true
        }, 
        {
            name: "canal",
            description: "Mencione o canal onde o anúncio será feito",
            type: ApplicationCommandOptionType.Channel,
            required: true
        }
    ],
    run: async (client, interaction) => {
        if(interaction.member.permission.has(PermissionsBitField.Flags.ManageMessages)) {
            const titulo = interaction.options.getString("título")
            const descricao = interaction.options.getString("descrição")
            const content = interaction.options.getString("content")
            const canal = interaction.options.getChannel("canal")

            const embed = new EmbedBuilder()
            .setColor("cor")
            .setTitle(titulo)
            .setDescription(descricao)
            .setFooter({text: `Anúncio enviado por: ${interaction.user.tag}`})
            client.channels.cache.get(canal.id).send({content: `${content}`, embeds: [embed]})
            interaction.reply({content: "Anúncio enviado com sucesso", ephemeral: true})
        } else {
            return interaction.reply({content: "Você não tem permissão", ephemeral: true})
        }
    }
}