//Command ban
//Exemplo: !ban <@user> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

const { EmbedBuilder } = require("discord.js")
const Command = require("../estruturas/comando")

module.exports.run = async (client,message,args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
    }

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
        return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
    }

    const membro = message.mentions.members.first() || message.guild.members.get(args[0]) //Pega o membro mencionado ou o membro com o ID passado
    if(!membro) return message.reply("Você não mencionou nenhum membro!") //Se não mencionar nenhum membro, vai aparecer essa mensagem

    const motivo = args.slice(1).join(" ") || "Sem motivo" //Pega o motivo do ban, se caso não estiver nada escrito vai aparecer esse "Sem motivo"

    const banEmbed = new Discord.MessageEmbed()
    .setColor("cor")
    .setTitle("Usuário banido")
    .setDescription(`${membro.user.tag} foi banido por ${message.author.tag}`)
    .addField("> Motivo", motivo)
    client.channels.cache.get(canal_punicao).send({embeds: [banEmbed]}) //se caso quer que envie em algum canal especifico
    membro.ban(motivo) //Vai banir o membro mencionado e enviar o motivo
}

//slashcommands

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            description: 'Bane um usuário do servidor.',
            type: ApplicationCommandType.ChatInput,
            options: [
                {
                    name: 'usuário',
                    type: 'USER',
                    description: 'Usuário a ser banido.',
                    required: true
                },
                {
                    name: 'motivo',
                    type: 'STRING',
                    description: 'Motivo do ban.',
                    required: false
                }
            ]
        })
    }

    run = async (message) => {
        if(!message.member.permissions.has("BAN_MEMBERS")) {
            return message.reply(sua_mensagem_de_erro) //Se o membro não tiver permissão para usar o comando
        }

        if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
            return message.reply(sua_mensagem_de_erro) //Se o bot não tiver permissão para executar essa ação
        }

        const user = message.options.getUser('user')
        if (message.user.id === user.id) return message.reply({ content: 'Você não pode se banir.', ephemeral: true })

        const membro = message.guild.members.cache.get(user.id)

        const motivo = message.options.getString('motivo') || 'Sem motivo'

        if (message.guild.me.roles.highest.position <= membro.roles.highest.position) {
            return message.reply({ content: 'Não consigo banir este usuário, o cargo dele não é mais baixo que o meu.', ephemeral: true })
        } else {
            membro.ban(motivo)
                message.reply({content: `Usuário punido com sucesso!`, ephemeral: true})
                .catch(() => message.reply({ content: 'Erro ao banir o usuário!', ephemeral: true }))
        }
    }
}