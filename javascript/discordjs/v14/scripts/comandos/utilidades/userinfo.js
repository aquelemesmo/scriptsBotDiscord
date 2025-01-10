//Command userinfo
//Exemplo: !userinfo <usuário>
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

const { EmbedBuilder, ApplicationCommandType } = require("discord.js");
const moment = require("moment") //npm i --save moment
moment.locale("pt-br")

module.exports = {
    name: "userinfo",
    description: "Veja as informações do usuário",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione o membro que você quer banir",
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const membro = interaction.options.getUser("membro")

        const embed = new EmbedBuilder()
        .setColor("cor")
        .setTitle("Informações de " + membro.user.username)
        .addFields(
            {name: "ID do usuário:", value: `${membro.user.id}`},
            {name: "Discriminator:", value: `${membro.user.discriminator}`},
            {name: "Conta criada em:", value: `<t:${moment(membro.user.createdAt / 1000)}:F>`},
            {name: "Entrei aqui em:", value: `<t:${moment(membro.user.joinedAt / 1000)}:F>`},
        )
        interaction.reply({embeds: [embed]})
    }
}