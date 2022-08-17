//Command ban
//Exemplo: !ban <@user> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")

module.exports.run = async (client,message,args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
    }

    const membro = message.mentions.members.first() || message.guild.members.get(args[0]) //Pega o membro mencionado ou o membro com o ID passado
    if(!membro) return message.reply("Você não mencionou nenhum membro!") //Se não mencionar nenhum membro, vai aparecer essa mensagem

    const motivo = args.slice(22).join(" ") || "Sem motivo" //Pega o motivo do ban, se caso não estiver nada escrito vai aparecer esse "Sem motivo"

    const banEmbed = new Discord.MessageEmbed()
    .setColor("sua_cor")
    .setTitle("Usuário banido")
    .setDescription(`${membro.user.tag} foi banido por ${message.author.tag}`)
    .addField("> Motivo", motivo)
    client.channels.cache.get(canal_punicao).send({embeds: [banEmbed]}) //se caso quer que envie em algum canal especifico
    membro.ban(motivo) //Vai banir o membro mencionado e enviar o motivo
}

//sem canal especifico

module.exports.run = async (client,message,args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
    }

    const membro = message.mentions.members.first() || message.guild.members.get(args[0]) //Pega o membro mencionado ou o membro com o ID passado
    if(!membro) return message.reply("Você não mencionou nenhum membro!") //Se não mencionar nenhum membro, vai aparecer essa mensagem

    const motivo = args.slice(22).join(" ") || "Sem motivo" //Pega o motivo do ban, se caso não estiver nada escrito vai aparecer esse "Sem motivo"

    message.channel.send("Usuário banido com sucesso!")
    membro.ban(motivo) //Vai banir o membro mencionado e enviar o motivo
}