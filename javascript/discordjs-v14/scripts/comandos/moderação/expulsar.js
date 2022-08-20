//Command kick
//Exemplo: !kick <@user> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { EmbedBuilder, ApplicationCommandType } = require("discord.js")
const Command = require("../estruturas/comando")

module.exports.run = async (client,message,args) => {
    if(!message.member.permissions.has("KICK_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    if(!message.guild.me.permissions.has("KICK_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
    }

    const membro = message.mentions.members.first() || message.guild.members.get(args[0]) //Pega o membro mencionado ou o membro com o ID passado
    if(!membro) return message.reply("Você não mencionou nenhum membro!") //Se não mencionar nenhum membro, vai aparecer essa mensagem

    const motivo = args.slice(1).join(" ") || "Sem motivo" //Pega o motivo do ban, se caso não estiver nada escrito vai aparecer esse "Sem motivo"

    const kickEmbed = new EmbedBuilder()
    .setColor("cor")
    .setTitle("Usuário expulso")
    .setDescription(`${membro.user.tag} foi expulso por ${message.author.tag}`)
    .addField("> Motivo", motivo)
    client.channels.cache.get(canal_punicao).send({embeds: [kickEmbed]}) //se caso quer que envie em algum canal especifico
    membro.kick(motivo) //Vai expulsar o membro mencionado e enviar o motivo
}

//slashcommands

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            description: 'Expulsar um usuário do servidor.',
            type: ApplicationCommandType.ChatInput,
            options: [
                {
                    name: 'usuário',
                    type: 'USER',
                    description: 'Usuário a ser expulso.',
                    required: true
                },
                {
                    name: 'motivo',
                    type: 'STRING',
                    description: 'Motivo do kick.',
                    required: false
                }
            ]
        })
    }

    run = async (message) => {
        if(!message.member.permissions.has("KICk_MEMBERS")) {
            return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
        }

        if(!message.guild.me.permissions.has("KICk_MEMBERS")) {
            return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
        }

        const user = message.options.getUser('user')
        if (message.user.id === user.id) return message.reply({ content: 'Você não pode se expulsar.', ephemeral: true })

        const membro = message.guild.members.cache.get(user.id)

        const motivo = message.options.getString('motivo') || 'Sem motivo'

        if (message.guild.me.roles.highest.position <= membro.roles.highest.position) {
            return message.reply({ content: 'Não consigo expulsar este usuário, o cargo dele não é mais baixo que o meu.', ephemeral: true })
        } else {
            membro.kic(motivo)
            message.reply({content: `Usuário punido com sucesso!`, ephemeral: true})
                .catch(() => message.reply({ content: 'Erro ao expulsar o usuário!', ephemeral: true }))
        }
    }
}