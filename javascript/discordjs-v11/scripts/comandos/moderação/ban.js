//Command ban
//Exemplo: !ban <@membro> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v11

const { RichEmbed } = require("discord.js")

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermissions("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro)
    }

    if(!message.guild.me.hasPermissions("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro)
    }

    const membro = message.mentions.members.first()
    if(!membro) return message.reply("Você não mencionou nenhum membro!")

    const motivo = args.slice(22).join(" ") || "Sem motivo"

    message.guild.ban(membro, { reason: motivo })
    
    const banEmbed = new RichEmbed()
    .setColor("sua_cor")
    .setTitle("Usuário banido")
    .setDescription(`${membro.user.tag} foi banido por ${message.author.tag}`)
    .addField("> Motivo", motivo)
    let canal = message.guild.channels.find(c => c.id === "ID_DO_CANAL") //message.guild.channels.find(c => c.name === "NOME_DO_CANAL")
    canal.send({embeds: [banEmbed]})
}