//Command userinfo
//Exemplo: !userinfo <usuário>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { EmbedBuilder } = require("discord.js");
const moment = require("moment") //npm i --save moment
moment.locale("pt-br")

module.exports.run = async (bot,message,args) => {
    const membro = message.mentions.members.first() || message.member;

    if(!membro) return message.reply("Mencione um membro")

    const embed = new EmbedBuilder()
    .setColor("cor")
    .setTitle("Informações de " + membro.user.username)
    .addFields(
        {name: "ID do usuário:", value: `${membro.user.id}`},
        {name: "Discriminator:", value: `${membro.user.discriminator}`},
        {name: "Conta criada em:", value: `<t:${moment(membro.user.createdAt / 1000)}:F>`},
        {name: "Entrei aqui em:", value: `<t:${moment(membro.user.joinedAt / 1000)}:F>`},
    )
    message.reply({embeds: [embed]})
}