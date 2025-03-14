//Para poder usar esse script e fazer funcionar, tera que usar o eventos guildMemberAdd e guildMemberRemove
//Linguagem usada: js
//Author: aquelemesmoojack
//Versão: Discord.JS v14

//entrada para servidor de minecraft

const { EmbedBuilder } = require("discord.js")
const db = require("quick.db")

module.exports = async (member) => {
    const embed = new EmbedBuilder()
    .setColor(cor)
    .setTitle(`Seja bem-vindo(a) ${member.user.username} ao grupo!`)
    .setThumbnail(member.user.displayAvatarURL())
    .addField("Informações: ", "> \`\`\ Site: \`\` https://sualoja.com.br\n> \`\`\ Site: \`\` seuip.com.br")
    .setFooter(`:copyright: Bot desenvolvido por aquelemesmoojack`)
    client.channels.cache.get(id_do_canal).send({embeds: [embed]})
}

//entrada para servidores comuns

module.exports = async (member) => {
    const embed = new EmbedBuilder()
    .setColor(cor)
    .setTitle(`Seja bem-vindo(a) ${member.user.username} ao grupo!`)
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription("Lembre-se! leia as para não causar nenhum tipo de punição eternamente e temporariamente!\n\nSe caso estiver com alguma dúvida, vai no canal #duvidas e diga o que você quer saber.")
    .setFooter(`:copyright: Bot desenvolvido por aquelemesmoojack`)
    client.channels.cache.get(id_do_canal).send({embeds: [embed]})
}

//entrada sem embed

module.exports = async (member) => {
    client.channels.cache.get(id_do_canal).send("Seja bem-vindo(a) " + member.user.username + " ao grupo!")
}

//saida sem embed

module.exports = async (member) => {
    client.channels.cache.get(id_do_canal).send("Que pena, o usuário " + member.user.username + " saiu do grupo... tomará que volte")
}

//entrada com canal setado no setwelcome-quickdb.js

module.exports = async (member) => {
    let chx = db.get(`welchannel.${member.guild.id}`)

    if(!chx) return

    client.channels.cache.get(id_do_canal).send("Seja bem-vindo(a) " + member.user.username + " ao grupo!")
}

//entrada com canal setado no setleave-quickdb.js

module.exports = async (member) => {
    let chx = db.get(`leavechannel.${member.guild.id}`)

    if(!chx) return

    client.channels.cache.get(id_do_canal).send("Que pena, o usuário " + member.user.username + " saiu do grupo... tomará que volte")
}