//Para poder usar esse script e fazer funcionar, tera que usar o eventos messageCreate
//Linguagem usada: js
//Versão Discord.JS v14
//Author: aquelemesmoojack#4306

module.exports = async (bot, message) => {
    let prefix = "sua_prefix"

    if(message.author.bot || message.type.channel === "dm") return;
    if(message.content.indexOf(prefix.length) !== 0) return;

    let args = message.content.slice(prefix).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()

    let command = bot.commands.get(cmd) //|| bot.commands.get(bot.aliases.get(aliases))

    try {
        if(command) command.run(bot, message, args)
    } catch(e) {
        console.log(e.stack)
    }
}