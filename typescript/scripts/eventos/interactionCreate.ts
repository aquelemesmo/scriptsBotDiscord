import { Event } from '../estruturas/Event'
import {CommandInteractionOptionResolver} from "discord.js";
import { ExtendedInteraction } from '../typings/Command'
import { client } from '..'

export default new Event("interactionCreate", async (interaction) => {
    if(interaction.isCommand()) {
        await interaction.deferReply()
        const command = client.commands.get(interaction.commandName)
        if(!command) return interaction.editReply("Comando não encontrado")

        command.run({
            args: interaction.options as CommandInteractionOptionResolver,
            client,
            interaction: interaction as ExtendedInteraction
        })
    }
})