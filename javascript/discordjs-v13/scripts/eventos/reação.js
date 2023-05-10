//Para poder usar esse script e fazer funcionar, tera que usar o eventos messageReactionAdd e messageReactionRemove
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Versão: Discord.JS v13

module.exports = async (bot, message, reaction) => {
    if(reaction.emoji.name === "seu_emoji") {
        //qualquer coisa aqui
    }
}

//setar tag ao reagir o emoji

module.exports = async (bot, user, reaction) => {
    if(reaction.emoji.name === "seu_emoji") {
        const guildMember = reaction.message.guild.member.cache.get(user.id)
        if(!guildMember.roles.cache.get("id_da_role")) {
            guildMember.roles.add("id_da_role")
        }
    }
}

//messageReactionRemove, é a mesma coisa que o messageReactionAdd mas a função e quando um usuário vai parar de reagir aquele emoji

module.exports = async (bot, message, reaction) => {
    if(reaction.emoji.name === "seu_emoji") {
        //qualquer coisa aqui
    }
}

//setar tag ao reagir o emoji

module.exports = async (bot, user, reaction) => {
    if(reaction.emoji.name === "seu_emoji") {
        const guildMember = reaction.message.guild.member.cache.get(user.id)
        if(!guildMember.roles.cache.get("id_da_role")) {
            guildMember.roles.remove("id_da_role")
        }
    }
}