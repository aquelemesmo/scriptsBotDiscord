//Command sugestão
//Exemplo: !sugestão <usuário>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { EmbedBuilder } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    if(!args.join(" ")) return message.reply("Coloque sua sugestão")

    const embed = new EmbedBuilder()
    .setColor("cor")
    .setTitle("Sugestão de: " + message.author.username) //Sugestão de: aquelemesmoojack#4306
    .setDescription(`Sugestão: \`${args.join(" ")}\``)
    bot.channels.cache.get("id_do_canal").send({embeds: [embed]})
}