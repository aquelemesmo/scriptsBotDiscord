//Para poder usar esse script e fazer funcionar, tera que usar o evento interactionCreate
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const Discord = require("discord.js")

module.exports = async (client,interaction) => {
    if(interaction.isButton()) {
        if(interaction.customId === "id do botão") {
            //alguma coisa aq
        }
    }

    if(interaction.type === Discord.InteractionType.ModalSubmit) {
        //seu modal aqui
    }

    if(interaction.isStringSelectMenu()) {
        if(interaction.values[0] === "id da select menu") {
            //alguma coisa aq
            //estrutura em: discordjs-v13/scripts/estruturas/botões.js
        }
    }

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {
        //alguma coisa aq
    }

    if(interaction.isAutoComplete()) {
        //alguma coisa aqui
    }

    if(interaction.isMessageComponent()) {
        //alguma coisa aqui
    }
}