//Estrutura botões
//Discord.TS
//Feito por: aquelemesmoojack#4306

import { ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageActionRowComponent } from "discord.js";

class Example {
    const button = new ButtonBuilder()
        .setLabel("label")
        .setStyle(ButtonStyle.Success)
        .setCustomId("teste")

    const btn = new ActionRowBuilder<MessageActionRowComponent>().addComponents(button)

    interaction.reply({components: [btn]})
}