//Event welcome system
//Exemplo: !saldo
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    let channel = args[0]

    if(!channel) return message.reply("Você precisa mencionar um canal")
    
    db.set(`welchannel_${message.guild.id}`, channel.id)

    message.reply("O canal" + channel + " foi setado como canal de entrada!")
}