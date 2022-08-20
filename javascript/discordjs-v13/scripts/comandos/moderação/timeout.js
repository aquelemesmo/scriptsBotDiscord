//Command timeout
//Exemplo: !timeout <@user> <tempo> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

const Discord = require("discord.js")
const ms = require("ms") //npm i --save ms

module.exports.run = async (bot,message,args) => {
    if(!message.member.permissions.has("MODERATE_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    if(!message.guild.me.permissions.has("MODERATE_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
    }

    if(args.length === 0) {
        const lengthEmbed = new MessageEmbed()
        .setColor("cor")
        .setDescription("Use: `!timeout <usuário> <tempo> <motivo>`")
        return message.reply({embeds: [lengthEmbed]})
    }

    const membro = message.mentions.members.first()
    const tempo = args[1]
    const motivo = args.slice(2).join(" ") || "Sem motivo"
    
    message.delete()
    
    const tempoEmMs = ms(tempo)    
   
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL())
    .setColor(sua_cor)
    .addFields(
        {name: '> Author do punimento ', value: `<@${message.author.id}>`, inline: false},
        {name: '> Motivo da punição ', value: `\`\`${motivo}\`\``, inline: false},
        {name: '> Tempo de punição ', value: `${tempo}`, inline: false},
        {name: '> Ação da punição ', value: `Silenciamento temporário`, inline: false},
    )
    if(membro.roles.rawPosition >= message.member.roles.rawPosition) {
        return message.reply("Você não pode punir um membro com cargo igual ou superior ao seu")
    } else {
        membro.timeout(tempoEmMs, motivo)
        bot.channels.cache.get("id_do_canal").send({embeds: [embed]})
        message.reply("Usuário punido com sucesso!")
    }
}