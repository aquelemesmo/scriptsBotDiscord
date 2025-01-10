//Estrutura botões
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack

const row = new ActionRowBuilder()
.addComponents(
    new ButtonBuiler()
    .setLabel("Botão")
    .setStyle(ButtonStyle.Primary) //Primary, Secondary, Danger, Success, Link e Premium
    .setCustomId("teste")
    .setURL("https://google.com") //se for o tipo Link no Style, o botão vai redirecionar para o link
    .setDisable(true) //.setDisable(false)
)

const row2 = new ActionRowBuilder()
.addComponents(
    new StringSelectMenuBuilder()
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