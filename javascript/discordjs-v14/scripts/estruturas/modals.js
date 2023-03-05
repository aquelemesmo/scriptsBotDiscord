//Estrutura modals
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { ModalBuilder, TextInputComponentBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js")

module.exports = async (bot, interaction) => {
    const modal = new ModalBuilder()
        .setCustomId("modal-id")
        .setTitle("Meu título")

    const input1 = new TextInputComponentBuilder()
        .setCustomId("input-id-1")
        .setPlaceholder("Digite algo")
        .setLabel("Meu label")
        .setStyle(TextInputStyle.Short) //TextInputStyle.Paragraph
        .setRequired(true) //se for true, essa input vai ser obrigatória
        .setMaxLength(1000) //se for 1000, essa input vai ter no máximo 10 caracteres
        .setMinLength(10) //se for 10, essa input vai ter no mínimo 5 caracteres

    const row1 = new ActionRowBuilder().addComponents(input1)

    modal.addComponents(row1)

    interaction.showModal(modal)
}