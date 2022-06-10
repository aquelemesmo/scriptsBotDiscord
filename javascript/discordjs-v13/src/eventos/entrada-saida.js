//Para poder usar esse script e fazer funcionar, tera que usar o evento guildMemberAdd e guildMemberRemove
//Linguagem usada: js
//Author: aquelemesmoojack#4306

//entrada para servidor de minecraft

module.exports = async (client, member) => {
    const embed = new MessageEmbed()
    .setColor(cor)
    .setTitle(`Seja bem-vindo(a) ${member.user.username} ao grupo!`)
    .setThumbnail(member.user.displayAvatarURL())
    .addField("Informações: ", "> \`\`\ Site: \`\` https://sualoja.com.br\n> \`\`\ Site: \`\` seuip.com.br")
    .setFooter(`:copyright: Bot desenvolvido por aquelemesmoojack#4306`)
    client.channels.cache.get(id_do_canal).send({embeds: [embed]})
}

//entrada para servidores comuns

module.exports = async (client, member) => {
    const embed = new MessageEmbed()
    .setColor(cor)
    .setTitle(`Seja bem-vindo(a) ${member.user.username} ao grupo!`)
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription("Lembre-se! leia as para não causar nenhum tipo de punição eternamente e temporariamente!\n\nSe caso estiver com alguma dúvida, vai no canal #duvidas e diga o que você quer saber.")
    .setFooter(`:copyright: Bot desenvolvido por aquelemesmoojack#4306`)
    client.channels.cache.get(id_do_canal).send({embeds: [embed]})
}

//entrada sem embed

module.exports = async (client, member) => {
    client.channels.cache.get(id_do_canal).send("Seja bem-vindo(a) " + member.user.username + " ao grupo!")
}

//saida sem embed

module.exports = async (client, member) => {
    client.channels.cache.get(id_do_canal).send("Que pena, o usuário " + member.user.username + " saiu do grupo... tomará que volte")
}