//Para poder usar esse script e fazer funcionar, tera que usar o eventos interactionCreate
//Linguagem usada: js
//Versão Discord.JS v14
//Author: aquelemesmoojack#4306

const { InteractionTypes } = require("discord.js")

module.exports = async (bot,interaction) => {
    if(interaction.type === InteractionTypes.ApplicationCommand) {
        //seu código aqui
    } else if(interaction.type === InteractionTypes.MessageComponent) {
        //seu código aqui
    } else if(interaction.type === InteractionTypes.ModalSubmit) {
        //modals em discord.js/scripts/estruturas/modals.js
    } else if(interaction.type === InteractionTypes.ApplicationCommandAutoComplete) {
        //seu código aqui
    }
}