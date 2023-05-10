//Para poder usar esse script e fazer funcionar, tera que usar o eventos messageCreate
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

module.exports = async (bot, message) => {
    let prefix = "seu_prefix"

    if(message.author.bot || message.type.channel === "dm") return;
    if(message.content.indexOf(prefix.length) !== 0) return; //se colocar outro prefix não mencionado no letm

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    let cmd = bot.commands.get(command);
    if(cmd) cmd.run(bot, message, args);
}

//sem desse jeito em cima e comandos manualmente tudo bagunçado

module.exports = async (bot, message) => {
    if(message.content === "!seu_comando") {
        //qualquer coisa aqui
    }
}