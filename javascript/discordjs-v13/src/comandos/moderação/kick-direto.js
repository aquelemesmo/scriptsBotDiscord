//Command kick
//Exemplo: !kick <@user> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const Discord = require("discord.js")

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("KICK_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    if(!message.guild.me.permissions.has("KICK_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
    }

    const membro = message.mentions.members.first() || message.guild.members.get(args[0]) //Pega o membro mencionado ou o membro com o ID passado
    if(!membro) return message.reply("Você não mencionou nenhum membro!") //Se não mencionar nenhum membro, vai aparecer essa mensagem

    const motivo = args.slice(1).join(" ") ?? "Sem motivo" //Pega o motivo do ban, se caso não estiver nada escrito vai aparecer esse "Sem motivo"

    const kickEmbed = new Discord.MessageEmbed()
    .setColor("sua_cor")
    .setTitle("Usuário expulso")
    .setDescription(`${membro.user.tag} foi expulso por ${message.author.tag}`)
    .addField("> Motivo", motivo)
    bot.channels.cache.get(canal_punicao).send({embeds: [kickEmbed]}) //se caso quer que envie em algum canal especifico
    membro.kick(motivo) //Vai expulsar o membro mencionado e enviar o motivo
}