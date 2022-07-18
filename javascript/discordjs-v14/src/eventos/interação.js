//Para poder usar esse script e fazer funcionar, tera que usar o evento interactionCreate
//Linguagem usada: js
//Versão Discord.JS v14
//Author: aquelemesmoojack#4306

const { InteractionTypes } = require("discord.js/typings/enums")

module.exports.run = async (bot,interaction) => {
    if(interaction.type === InteractionTypes.APPLICATION_COMMAND) {
        //seu código aqui
    } else if(interaction.type === InteractionTypes.MESSAGE_COMPONENT) {
        //seu código aqui
    } else if(interaction.type === InteractionTypes.MODAL_SUBMIT) {
        //seu código aqui
    } else if(interaction.type === InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE) {
        //seu código aqui
    }
}