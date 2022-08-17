//Para poder usar esse script e fazer funcionar, tera que usar o evento interactionCreate
//Linguagem usada: js
//Author: aquelemesmoojack#4306

module.exports.run = async (bot,interaction) => {
    if(interaction.isButton()) {
        if(interaction.customId === "botao-id") {
            //alguma coisa aq
        }
    }

    if(interaction.isModalSubmit()) {
        //seu modal aqui
    }

    if(interaction.isSelectMenu()) {
        if(interaction.values[0] === "menu-select-id") {
            //alguma coisa aq
        }
    }

    if(interaction.isCommand()) {
        //alguma coisa aq
    }
}