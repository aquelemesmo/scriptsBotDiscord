//Event leave system
//Exemplo: !saldo
//Linguagem usada: js
//Author: aquelemesmoojack#4306

const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    let channel = args[0]

    if(!channel) return message.reply("Você tem que mencionar um canal de texto!")
    
    db.set(`leavechannel_${message.guild.id}`, channel.id)

    message.reply("O canal" + channel + " foi setado como canal de saída!")
}