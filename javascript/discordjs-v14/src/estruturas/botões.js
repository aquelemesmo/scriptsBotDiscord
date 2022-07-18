//Estrutura botões
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const { ButtonStyles } = require("discord.js/typings/enums");

module.exports.run = async (bot,message,args) => {
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuiler()
        .setLabel("Botão")
        .setStyle(ButtonStyle.PRIMARY)
        .setCustomId("teste")
    )

    const row2 = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
        .setCustomId('select')
        .setPlaceholder('Nothing selected')
        .addOptions([
            {
                label: 'Select me',
                description: 'This is a description',
                value: 'first_option',
            },
            {
                label: 'You can select me too',
                description: 'This is also a description',
                value: 'second_option',
            },
        ]),
    )
}