//Command ping
//Exemplo: !ping
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

module.exports.run = async (bot,message,args) => {
    message.reply("Meu ping é de: " + bot.ws.ping + "ms")
}