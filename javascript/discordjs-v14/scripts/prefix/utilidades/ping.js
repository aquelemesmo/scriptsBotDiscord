//Command ping
//Exemplo: !ping
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v14

module.exports.run = async (client, message, args) => {
    message.reply(`${client.ws.ping}ms.`)
}